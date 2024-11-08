<template>
  <CHeader nav-active="qr-code" />
  <MainQrCode />
</template>

<script lang="ts">
import CHeader from "~/components/System/Aluno/AlunoHeader.vue";
import MainQrCode from "~/components/System/Aluno/MainQrCode.vue";

export default {
  components: { CHeader, MainQrCode },
};
</script>
