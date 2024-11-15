<template>
  <main id="main">
    <div id="inside-main">
      <div class="space">
        <div id="perfil">
          <div class="user-data">
            <form @submit.prevent="handleSave" method="post">
              <div class="mb-3">
                <label for="input-fullname" class="form-label">Nome Completo</label>
                <input
                  type="text"
                  class="form-control"
                  id="input-fullname"
                  name="fullname"
                  v-model="userData.NomeCompleto"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="input-id-senac" class="form-label">ID do Senac</label>
                <input
                  type="text"
                  class="form-control"
                  id="input-id-senac"
                  name="id-senac"
                  v-model="userData.IdAluno"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="input-email-institucional" class="form-label">E-mail Institucional</label>
                <input
                  type="email"
                  class="form-control"
                  id="input-email-institucional"
                  name="email-institucional"
                  v-model="userData.Email"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="input-semestre" class="form-label">Semestre</label>
                <select class="form-select" id="input-semestre" v-model="userData.Semestre" disabled>
                  <option disabled>Selecione um semestre...</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="input-curso" class="form-label">Curso</label>
                <select class="form-select" id="input-curso" v-model="userData.Curso" disabled>
                  <option disabled>Selecione um curso...</option>
                  <option value="computacao">Engenharia da Computação</option>
                  <option value="producao">Engenharia de Produção</option>
                </select>
              </div>
              <div class="options">
                <a
                  href="https://wa.me/551195362039"
                  target="_blank"
                  class="btn-system btn-secondary"
                >
                  Falar com o suporte
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const userData = ref({
  NomeCompleto: '',
  IdAluno: '',
  Email: '',
  emailPessoal: '',
  Semestre: '',
  Curso: '',
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

      // Exibe a resposta completa da API para análise
      console.log('Resposta da API:', response);

      // Verifica se a resposta é um objeto e contém os dados esperados
      if (response && response.IdAluno) {
        userData.value = {
          NomeCompleto: response.nomeCompleto || '',
          Email: response.email || '',
          Semestre: response.semestre || '',
          Curso: response.curso || '',
          IdAluno: response.IdAluno || '',
        };
        console.log('Dados do usuário atribuídos:', userData.value);
      } else {
        console.error('Dados do usuário não encontrados ou formato inválido');
        alert('Dados do usuário não encontrados ou formato inválido');
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
</script>
