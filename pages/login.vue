<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="senha">Senha</label>
        <input type="password" v-model="senha" id="senha" required />
      </div>
      <button type="submit">Entrar</button>
    </form>

    <!-- Exibir dados do usuário após login -->
    <div v-if="userData">
      <h3>{{ userData.nome_completo }}</h3>
      <p>Email Institucional: {{ userData.email_institucional }}</p>
      <p>Email Pessoal: {{ userData.email_pessoal }}</p>
      <p>Curso: {{ userData.curso }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const senha = ref('');
const userData = ref(null);
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { email: email.value, senha: senha.value },
    });

    // Armazenando o token no localStorage
    localStorage.setItem('authToken', response.token);

    // Redireciona para a página do perfil do aluno com o ID do aluno
    router.push(`/aluno`);  // Supondo que o ID seja retornado na resposta
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert('Login falhou. Verifique suas credenciais.');
  }
};


// Função para buscar os dados do usuário após o login
const fetchUserData = async (userId) => {
  try {
    const response = await $fetch(`/hom/api/user/data/${userId}`);
    userData.value = response; // Armazenando os dados do usuário
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    alert('Erro ao carregar os dados do usuário.');
  }
};

// Verificar o ID do usuário na URL e buscar os dados
const userId = router.currentRoute.value.params.id;
if (userId) {
  fetchUserData(userId);
}
</script>
