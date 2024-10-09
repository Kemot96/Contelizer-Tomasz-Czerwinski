<template>
  <div
    class="q-gutter-y-md column items-center"
    style="max-width: 300px; margin: auto"
  >
    <form @submit.prevent="submitForm" class="full-width">
      <q-input
        outlined
        v-model="pesel"
        dense
        mask="###########"
        :error-message="$t('peselValidator.error')"
        :error="error"
        @update:model-value="clearResult"
        style="width: 100%"
        class="q-mb-xs"
      />
      <q-btn color="primary" type="submit" dense style="width: 100%">
        {{ $t('peselValidator.button') }}
      </q-btn>
      <div
        style="
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <p v-if="isPeselCorrect" class="text-success" style="margin-top: 8px">
          {{ $t('peselValidator.result.success') }}
        </p>
        <p
          v-if="isPeselCorrect === false"
          class="text-error"
          style="margin-top: 8px"
        >
          {{ $t('peselValidator.result.failure') }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { validatePesel } from '../utils/pesel';

const pesel = ref('');
const error = ref(false);
const isPeselCorrect: Ref<boolean | null> = ref(null);

function submitForm() {
  validateInput();
  if (error.value === false) {
    isPeselCorrect.value = validatePesel(pesel.value);
  }
}

function validateInput() {
  error.value = false;
  if (pesel.value.length !== 11) {
    error.value = true;
  }
}

function clearResult() {
  isPeselCorrect.value = null;
}
</script>
