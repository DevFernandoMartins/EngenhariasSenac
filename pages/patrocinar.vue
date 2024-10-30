<template>
    <CHeader title="Quero ser parceiro" />
    <MainSponsor />
    <CFooter />
</template>

<script>
import CHeader from '~/components/Global/CHeader.vue';
import MainSponsor from '~/components/Sponsor/MainSponsor.vue';
import CFooter from '~/components/Global/CFooter.vue';

export default {
    components: { CHeader, CFooter, MainSponsor }
}


</script>

<style lang="css" scoped>

</style>