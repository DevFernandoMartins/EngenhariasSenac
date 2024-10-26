<template>
    <CHeader />
    <HomeIndex />
    <AboutIndex />
    <ScheduleIndex />
    <PartnersIndex />
    <Contact />
</template>

<script lang="js">
import CHeader from '~/components/Global/CHeader.vue';
import HomeIndex from '~/components/Index/HomeIndex.vue';
import AboutIndex from '~/components/Index/AboutIndex.vue';
import ScheduleIndex from '~/components/Index/ScheduleIndex.vue';
import PartnersIndex from '~/components/Index/PartnersIndex.vue';
import Contact from '~/components/Index/Contact.vue';

export default {
    components: { CHeader, HomeIndex, AboutIndex, ScheduleIndex, PartnersIndex, Contact }
}
</script>

<style lang="css" scoped>

</style>