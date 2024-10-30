<template>
    <CHeader title="Entre em contato" />
    <Contact />
    <CFooter />
</template>

<script>
import CHeader from '~/components/Global/CHeader.vue';
import Contact from '~/components/Contato/Contact.vue';
import CFooter from '~/components/Global/CFooter.vue';

export default {
    components: { CHeader, CFooter, Contact }
}


</script>

<style lang="css" scoped>

</style>