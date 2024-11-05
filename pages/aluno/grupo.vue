<template>
    <CHeader nav-active="grupo" />
    <MainGroup />
</template>

<script lang="ts">
import CHeader from '~/components/System/Aluno/AlunoHeader.vue';
import MainGroup from '~/components/System/Aluno/MainGrupo.vue';

export default {
    components: { CHeader, MainGroup }
}
</script>