<template>
    <CHeader nav-active="palestras" />
    <MainLecture />
</template>

<script lang="ts">
import CHeader from '~/components/System/Aluno/AlunoHeader.vue';
import MainLecture from '~/components/System/Aluno/MainPalestras.vue';

export default {
    components: { CHeader, MainLecture }
}
</script>