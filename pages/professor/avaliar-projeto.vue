<template>
  <CHeader nav-active="avaliar-projeto" />
  <MainAvaliar />
</template>

<script lang="ts">
import MainAvaliar from "~/components/System/Professor/MainAvaliar.vue";
import CHeader from "~/components/System/Professor/ProfessorHeader.vue";

export default {
  components: { CHeader, MainAvaliar },
};
</script>
