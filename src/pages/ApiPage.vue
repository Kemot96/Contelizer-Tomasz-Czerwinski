<template>
  <q-page class="row items-center justify-evenly">
    <UserTable />
  </q-page>
</template>

<script setup lang="ts">
import UserTable from 'src/components/UserTable.vue';
defineOptions({
  name: 'ApiPage',
});
</script>
