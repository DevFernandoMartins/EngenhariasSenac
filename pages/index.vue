<template>
    <CHeader title="10º Semana das Engenharias"/>
    <HomeIndex />
    <AboutIndex />
    <ScheduleIndex />
    <PartnersIndex />
    <CFooter />
</template>

<script lang="ts">
import CHeader from '~/components/Institucional/Global/CHeader.vue';
import HomeIndex from '~/components/Institucional/Index/HomeIndex.vue';
import AboutIndex from '~/components/Institucional/Index/AboutIndex.vue';
import ScheduleIndex from '~/components/Institucional/Index/ScheduleIndex.vue';
import PartnersIndex from '~/components/Institucional/Index/PartnersIndex.vue';
import CFooter from '~/components/Institucional/Global/CFooter.vue';

export default {
    components: { CHeader, HomeIndex, AboutIndex, ScheduleIndex, PartnersIndex, CFooter  }
}
</script>

<style lang="css" scoped>

</style>