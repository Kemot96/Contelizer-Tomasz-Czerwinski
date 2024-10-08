<template>
  <q-page class="row items-center justify-evenly">
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
