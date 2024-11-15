<template>
  <div class="flex h-screen w-full items-center justify-center bg-gray-100">
    <form action="#" class="flex flex-col items-center justify-center space-y-4">
      <!-- QR Code Canvas -->
      <div>
        <canvas ref="canvas" class="image-render-pixel h-64 w-64"></canvas>
      </div>

      <!-- Botão de Download -->
      <div>
        <button
          type="submit"
          class="rounded bg-gradient-to-br from-blue-400 to-blue-500 p-3 px-6 text-white shadow hover:shadow-lg transition"
          @click.prevent="download"
        >
          Download QR Code
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const userData = ref({
  IdAluno: '',  // Somente o IdAluno é necessário para esta tela
});

const router = useRouter();

// Função para pegar os dados do usuário
onMounted(async () => {
  const token = localStorage.getItem('authToken');

  if (token) {
    try {
      const response = await $fetch('/api/user/data', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Logando toda a resposta para depuração
      console.log('Resposta completa da API:', response);

      // Verificando se a resposta contém o IdAluno diretamente
      if (response && response.IdAluno) {
        userData.value.IdAluno = response.IdAluno.toString(); // Garantindo que seja tratado como string
        console.log('ID do aluno:', userData.value.IdAluno);
      } else {
        console.error('IdAluno não encontrado na resposta da API');
        alert('IdAluno não encontrado ou a resposta da API está incorreta');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      alert('Erro ao buscar dados');
      router.push('/login'); // Redireciona para login em caso de erro
    }
  } else {
    router.push('/login'); // Se não houver token, redireciona para login
  }
});

// Referências e variáveis
const canvas = ref<HTMLCanvasElement | null>(null);
const text = ref(''); // Inicializando com uma string vazia
const filename = ref("qrcode");
const size = ref(300);
let QRCode: any;

// Importa o QRCode no cliente
onMounted(async () => {
  QRCode = await import("qrcode");
});

// Watcher para gerar o QR Code assim que o `userData` for atualizado
watch(() => userData.value.IdAluno, async (newIdAluno) => {
  if (newIdAluno) {
    text.value = newIdAluno; // Atualiza o texto com o ID do aluno
    generateQRCode(); // Gera o QR Code assim que o ID do aluno estiver disponível
  }
});

// Função para gerar o QR Code
async function generateQRCode() {
  if (!canvas.value || !text.value) {
    console.error("Canvas ou texto do QR Code não encontrado!");
    return;
  }

  try {
    await QRCode.toCanvas(canvas.value, text.value, {
      width: size.value,
    });
  } catch (err) {
    console.error("Erro ao gerar QR Code:", err);
  }
}

// Função para baixar o QR Code
async function download() {
  if (!canvas.value) return;

  const link = document.createElement("a");
  link.download = `${filename.value || "qrcode"}.png`;
  link.href = canvas.value.toDataURL("image/png");
  link.click();
}
</script>

<style scoped>
/* Garantindo que o conteúdo do template ocupe a largura e altura disponíveis */
.flex {
  display: flex;
  min-height: 100vh; /* Ajuste para ocupar toda a altura da tela */
  justify-content: center; /* Alinha horizontalmente */
  align-items: center; /* Alinha verticalmente */
}
</style>
