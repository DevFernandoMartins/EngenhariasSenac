<template>
    <CHeader title="Entre em contato" />
    <Contact />
    <CFooter />
</template>

<script lang="ts">
import CHeader from '~/components/Institucional/Global/CHeader.vue';
import Contact from '~/components/Institucional/Contato/Contact.vue';
import CFooter from '~/components/Institucional/Global/CFooter.vue';

export default {
    components: { CHeader, CFooter, Contact }
}


</script>

<style lang="css" scoped>

</style>