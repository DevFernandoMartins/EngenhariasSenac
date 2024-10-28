<template>
    <CHeader title="Programação Completa" />
    <MainSchedule />
    <CFooter />
</template>

<script>
import CHeader from '~/components/Global/CHeader.vue';
import MainSchedule from '~/components/Schedule/MainSchedule.vue';
import CFooter from '~/components/Global/CFooter.vue';

export default {
    components: { CHeader, MainSchedule, CFooter }
}


</script>

<style lang="css" scoped>

</style>