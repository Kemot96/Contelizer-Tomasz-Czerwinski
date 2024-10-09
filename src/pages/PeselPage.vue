<template>
  <q-page class="row items-center justify-evenly">
    <PeselValidator />
  </q-page>
</template>

<script setup lang="ts">
import PeselValidator from 'src/components/PeselValidator.vue';

defineOptions({
  name: 'PeselPage',
});
</script>
