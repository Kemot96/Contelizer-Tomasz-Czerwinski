<template>
  <q-page class="items-center justify-evenly column">
    <FileUploadForm />
    <FileContent />
  </q-page>
</template>

<script setup lang="ts">
import FileUploadForm from 'components/FileUploadForm.vue';
import FileContent from 'src/components/FileContent.vue';

defineOptions({
  name: 'IndexPage',
});
</script>
