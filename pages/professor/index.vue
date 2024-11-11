<template>
  <CHeader nav-active="index" />
  <MainProfile />
</template>

<script lang="ts">
import CHeader from "~/components/System/Professor/ProfessorHeader.vue";
import MainProfile from "~/components/System/Professor/MainPerfil.vue";

export default {
  components: { CHeader, MainProfile },
};
</script>
