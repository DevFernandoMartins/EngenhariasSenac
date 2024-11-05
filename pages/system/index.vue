<template>
    <CHeader nav-active="index" />
    <MainProfile />
</template>

<script lang="ts">
import CHeader from '~/components/System/Global/CHeader.vue';
import MainProfile from '~/components/System/Perfil/MainProfile.vue';

export default {
    components: { CHeader, MainProfile }
}
</script>
