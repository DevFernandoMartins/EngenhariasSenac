<template>
  <main id="main">
    <div id="inside-main">
      <div class="space">
        <div id="perfil">
          <div class="user-data">
            <form @submit.prevent="getGroupData">
              <!-- Nome do Grupo -->
              <div class="mb-3">
                <label for="group-name" class="form-label">Nome do grupo</label>
                <input
                  type="text"
                  class="form-control"
                  id="group-name"
                  :value="group?.NomeGrupo"
                  disabled
                />
              </div>

              <!-- Código do Grupo -->
              <div class="mb-3">
                <label for="group-code" class="form-label">Código do Grupo</label>
                <input
                  type="text"
                  class="form-control"
                  id="group-code"
                  :value="group?.CodGrupo"
                  disabled
                />
              </div>

              <!-- Líder do Grupo -->
              <div class="mb-3">
                <label for="group-leader" class="form-label">Líder</label>
                <input
                  type="text"
                  class="form-control"
                  id="group-leader"
                  :value="group?.LiderNome"
                  disabled
                />
              </div>

              <!-- Integrantes do Grupo -->
              <div class="mb-3">
                <label for="group-members" class="form-label">Integrantes</label>
                <div v-if="group?.Integrantes?.length > 0">
                  <div v-for="(member, index) in group?.Integrantes" :key="index" class="member-item">
                    <div class="member-name">{{ member.Nome }}</div>
                    <div class="member-role" v-if="member.Role">{{ member.Role }}</div>
                  </div>
                </div>
                <div v-else>
                  <p>Não há integrantes cadastrados no momento.</p>
                </div>
              </div>

              <div class="form-text">
                Está faltando algum integrante? Envie o código do grupo e peça
                para que se cadastre.
              </div>
              <div class="form-text">
                * Para alterar dados bloqueados, entre em contato com o suporte.
              </div>
              <div class="options">
                <a href="https://wa.me/551195362039" class="btn-system btn-secondary">Falar com o suporte</a>
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
import axios from 'axios';

// Dados iniciais do grupo
const group = ref({
  NomeGrupo: '',
  CodGrupo: '',
  LiderNome: '',
  Integrantes: []
});

// Função para buscar os dados do grupo e integrantes do banco de dados
const getGroupData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/group'); // Endereço da API do seu backend
    const groupData = response.data;

    // Atualizando os dados com a resposta da API
    group.value.NomeGrupo = groupData.NomeGrupo;
    group.value.CodGrupo = groupData.CodGrupo;
    group.value.LiderNome = groupData.LiderNome;
    group.value.Integrantes = groupData.Integrantes;
  } catch (error) {
    console.error("Erro ao buscar dados do grupo:", error);
  }
};

// Carregar os dados assim que o componente for montado
onMounted(() => {
  getGroupData();
});
</script>

<style scoped>
/* Estilos para os integrantes */
.member-item {
  background-color: #f4f4f4;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.member-name {
  font-weight: bold;
  font-size: 16px;
}

.member-role {
  font-style: italic;
  color: #666;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form-text {
  font-size: 0.9rem;
  color: #6c757d;
}

.options {
  margin-top: 20px;
}

.btn-system {
  text-decoration: none;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
}

.btn-system.btn-secondary {
  background-color: #6c757d;
}

.options a {
  display: inline-block;
  margin-top: 10px;
}
</style>
