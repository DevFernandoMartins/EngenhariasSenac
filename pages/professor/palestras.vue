<template>
  <CHeader nav-active="palestras" />
  <MainLecture />
</template>

<script lang="ts">
import CHeader from "~/components/System/Professor/ProfessorHeader.vue";
import MainLecture from "~/components/System/Professor/MainPalestras.vue";

export default {
  components: { CHeader, MainLecture },
};
</script>
