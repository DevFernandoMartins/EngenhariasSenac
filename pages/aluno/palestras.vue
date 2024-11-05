<template>
    <CHeader nav-active="palestras" />
    <MainLecture />
</template>

<script lang="ts">
import CHeader from '~/components/Aluno/Global/CHeader.vue';
import MainLecture from '~/components/Aluno/Palestras/MainLecture.vue';

export default {
    components: { CHeader, MainLecture }
}
</script>