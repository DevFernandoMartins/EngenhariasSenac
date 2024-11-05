<template>
    <CHeader nav-active="index" />
    <MainProfile />
</template>

<script lang="ts">
import CHeader from '~/components/System/Aluno/AlunoHeader.vue';
import MainProfile from '~/components/System/Aluno/MainPerfil.vue';

export default {
    components: { CHeader, MainProfile }
}
</script>
