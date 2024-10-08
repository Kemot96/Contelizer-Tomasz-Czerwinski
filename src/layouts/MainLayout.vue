<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-pa-sm q-gutter-md">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="drawer = !drawer"
          class="q-mr-md lt-sm"
        />

        <nav class="row items-center q-ml-md gt-xs">
          <RouterLink to="/" class="q-mr-md">{{
            $t('header.nav.files')
          }}</RouterLink>
          <q-separator dark vertical />
          <RouterLink to="/pesel" class="q-mx-md">{{
            $t('header.nav.pesel')
          }}</RouterLink>
          <q-separator dark vertical />
          <RouterLink to="/api" class="q-ml-md">{{
            $t('header.nav.api')
          }}</RouterLink>
        </nav>

        <q-space />

        <!-- <div class="row items-center q-xs-none q-sm-none">
          <strong>Current route path:</strong>
          <q-badge color="primary" class="q-ml-xs">{{
            $route.fullPath
          }}</q-badge>
        </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" overlay>
      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section>{{ $t('header.nav.files') }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/pesel">
          <q-item-section>{{ $t('header.nav.pesel') }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/api">
          <q-item-section>{{ $t('header.nav.api') }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);

defineOptions({
  name: 'MainLayout',
});
</script>
