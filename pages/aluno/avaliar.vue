<template>
  <CHeader nav-active="avaliar" />
  <MainAvaliar />
</template>

<script lang="ts">
import CHeader from "~/components/System/Aluno/AlunoHeader.vue";
import MainAvaliar from "~/components/System/Aluno/MainAvaliar.vue";

export default {
  components: { CHeader, MainAvaliar },
};
</script>
