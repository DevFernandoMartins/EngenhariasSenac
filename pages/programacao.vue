<template>
    <CHeader title="Programação Completa" />
    <MainSchedule />
    <CFooter />
</template>

<script lang="ts">
import CHeader from '~/components/Institucional/Global/CHeader.vue';
import MainSchedule from '~/components/Institucional/Programacao/MainSchedule.vue';
import CFooter from '~/components/Institucional/Global/CFooter.vue';

export default {
    components: { CHeader, MainSchedule, CFooter }
}
</script>