<template>
    <CHeader nav-active="projetos" />
    <MainLecture />
</template>

<script lang="ts">
import CHeader from '~/components/System/Professor/ProfessorHeader.vue';
import MainLecture from '~/components/System/Professor/MainProjetos.vue';

export default {
    components: { CHeader, MainLecture }
}
</script>