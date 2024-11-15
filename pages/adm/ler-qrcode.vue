<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import QrScanner from "qr-scanner";

// Definindo as variáveis
const videoElement = ref<HTMLVideoElement>();
const id_read = ref("");
const situacao = ref("");
const errorText = ref("");
const hasCamera = ref(true);
const dragClasses = ref("");
const cams = ref<QrScanner.Camera[]>();
const activeCamId = ref("");
let qrScanner: QrScanner;

watch(id_read, async () => {
  if (id_read.value) {
    console.log("ID lido:", id_read.value);

    const idNumeric = Number(id_read.value);

    if (idNumeric > 0){
      situacao.value = "ID válido";
    }else{
      situacao.value = "ID inválido";
    }
  }
});

onMounted(async () => {
  try {
    hasCamera.value = await QrScanner.hasCamera();

    if (hasCamera.value) {
      cams.value = await QrScanner.listCameras(true);

      qrScanner = new QrScanner(
        videoElement.value!,
        (result) => { 
          id_read.value = result.data;
        },
        {
          onDecodeError: (error) => decodeError(error),
          returnDetailedScanResult: true,
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      
      await qrScanner.start();
      activeCamId.value = cams.value[cams.value.length - 1].id;
    } else {
      decodeError("Câmera não encontrada");
    }
  } catch (error) {
    decodeError(error instanceof Error ? error : new Error("Erro desconhecido"));
  }
});

function decodeError(error: Error | string) {
  console.error(error);
  errorText.value = error instanceof Error ? error.message : error;
}

onUnmounted(() => qrScanner?.destroy());
</script>

<template>
  <div class="max-w-140 rounded p-8 text-center transition bg-[#000033] text-white" :class="dragClasses">
    <p class="mb-12 w-full break-all text-lg">{{ id_read }}</p>

      <video v-if="hasCamera" ref="videoElement" class="w-full rounded-lg"></video>
      <p class="mb-12 w-full break-all text-lg">{{ situacao }}</p>
  </div>
</template>

<style lang="css">
body {
  background-color: #000033;
  color: white;
}
</style>
