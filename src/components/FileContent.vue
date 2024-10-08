<template>
  <pre v-if="fileContent">{{ fileContent }}</pre>
</template>

<script setup lang="ts">
import { useFileStore } from 'src/stores/file-store';
import { computed } from 'vue';

const fileStore = useFileStore();
const fileContent = computed(() => fileStore.getFileContent);
</script>
