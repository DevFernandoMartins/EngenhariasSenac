<template>
    <CHeader title="10º Semana das Engenharias"/>
    <HomeIndex />
    <AboutIndex />
    <ScheduleIndex />
    <PartnersIndex />
    <CFooter />
</template>

<script lang="js">
import CHeader from '~/components/Global/CHeader.vue';
import HomeIndex from '~/components/Index/HomeIndex.vue';
import AboutIndex from '~/components/Index/AboutIndex.vue';
import ScheduleIndex from '~/components/Index/ScheduleIndex.vue';
import PartnersIndex from '~/components/Index/PartnersIndex.vue';
import CFooter from '~/components/Global/CFooter.vue';

export default {
    components: { CHeader, HomeIndex, AboutIndex, ScheduleIndex, PartnersIndex, CFooter  }
}
</script>

<style lang="css" scoped>

</style>