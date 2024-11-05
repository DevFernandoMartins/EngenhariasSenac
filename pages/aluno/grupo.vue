<template>
    <CHeader nav-active="grupo" />
    <MainGroup />
</template>

<script lang="ts">
import CHeader from '~/components/Aluno/Global/CHeader.vue';
import MainGroup from '~/components/Aluno/Grupo/MainGroup.vue';

export default {
    components: { CHeader, MainGroup }
}
</script>