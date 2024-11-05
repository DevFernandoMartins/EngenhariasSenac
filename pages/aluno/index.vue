<template>
    <CHeader nav-active="index" />
    <MainProfile />
</template>

<script lang="ts">
import CHeader from '~/components/Aluno/Global/CHeader.vue';
import MainProfile from '~/components/Aluno/Perfil/MainProfile.vue';

export default {
    components: { CHeader, MainProfile }
}
</script>
