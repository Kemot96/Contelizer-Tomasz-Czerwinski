<template>
  <form @submit.prevent="submitForm">
    <q-file
      v-model="file"
      :label="$t('fileUploadForm.label')"
      filled
      accept=".txt"
      @rejected="rejectFileUpload"
      @update:model-value="handleFileUpload"
    />
    <q-btn color="primary" type="submit">{{
      $t('fileUploadForm.button')
    }}</q-btn>
  </form>
</template>

<script setup lang="ts">
import { useFileStore } from 'src/stores/file-store';
import { Ref, ref } from 'vue';
import { showError } from 'src/utils/notifications';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const file: Ref<File | undefined | null> = ref();
const fileStore = useFileStore();

function handleFileUpload() {
  if (file.value) {
    let reader = new FileReader();
    reader.readAsText(file.value);

    reader.onload = function () {
      if (typeof reader.result === 'string') {
        fileStore.setFileContent(reader.result);
      } else {
        showError(t('fileUploadForm.notifications.error'));
      }
    };
  } else {
    showError(t('fileUploadForm.notifications.error'));
  }
}

function rejectFileUpload() {
  showError(t('fileUploadForm.notifications.rejection'));
}

function submitForm() {
  fileStore.shuffleFileContent();
  file.value = null;
}
</script>
