<template>
  <CHeader nav-active="notas" />
  <MainNotas />
</template>

<script lang="ts">
import CHeader from "~/components/System/Aluno/AlunoHeader.vue";
import MainNotas from "~/components/System/Aluno/MainNotas.vue";

export default {
  components: { CHeader, MainNotas },
};
</script>
