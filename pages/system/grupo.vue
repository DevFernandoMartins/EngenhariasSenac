<template>
    <CHeader nav-active="grupo" />
    <MainGroup />
</template>

<script lang="ts">
import CHeader from '~/components/System/Global/CHeader.vue';
import MainGroup from '~/components/System/Grupo/MainGroup.vue';

export default {
    components: { CHeader, MainGroup }
}
</script>