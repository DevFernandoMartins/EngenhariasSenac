<template>
    <CHeader title="Quero ser parceiro" />
    <MainSponsor />
    <CFooter />
</template>

<script lang="ts">
import CHeader from '~/components/Institucional/Global/CHeader.vue';
import MainSponsor from '~/components/Institucional/Patrocinar/MainSponsor.vue';
import CFooter from '~/components/Institucional/Global/CFooter.vue';

export default {
    components: { CHeader, CFooter, MainSponsor }
}


</script>

<style lang="css" scoped>

</style>