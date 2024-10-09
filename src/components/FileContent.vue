<template>
  <q-card class="file-content-container" v-if="fileContent">
    <q-card-section>
      <pre v-if="fileContent" class="responsive-pre">{{ fileContent }}</pre>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useFileStore } from 'src/stores/file-store';
import { computed, onUnmounted } from 'vue';

const fileStore = useFileStore();
const fileContent = computed(() => fileStore.getFileContent);

onUnmounted(() => fileStore.setFileContent(''));
</script>
