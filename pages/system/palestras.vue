<template>
    <CHeader nav-active="palestras" />
    <MainLecture />
</template>

<script lang="ts">
import CHeader from '~/components/System/Global/CHeader.vue';
import MainLecture from '~/components/System/Palestras/MainLecture.vue';

export default {
    components: { CHeader, MainLecture }
}
</script>