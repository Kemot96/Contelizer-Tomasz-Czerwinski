<template>
  <div class="q-pa-md" style="overflow-x: auto">
    <q-table
      :title="$t('userTable.title')"
      :rows="userStore.users"
      :columns="columns"
      row-key="id"
      :loading="isLoading"
      :no-data-label="$t('userTable.noData')"
      :no-results-label="$t('userTable.noResults')"
      v-model:pagination="paginationRef"
      @request="(params) => fetchUsers(params.pagination)"
      :dense="$q.screen.lt.md"
      :rows-per-page-options="[5, 10, 20, 50, 100]"
      :rows-per-page-label="$t('userTable.rowsPerPageLabel')"
    >
      <template v-slot:top-right>
        <q-input
          v-model="searchId"
          :label="$t('userTable.search.input.label')"
          filled
          class="q-mb-md"
          @keyup.enter="fetchUser"
          dense
          style="width: 220px"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          :label="$t('userTable.search.button.label')"
          color="primary"
          @click="fetchUser"
          class="q-mb-md q-ml-sm"
        />
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            :label="$t('userTable.actions.edit')"
            color="secondary"
            @click="handleOpenModal(props.row)"
          />
        </q-td>
      </template>
    </q-table>

    <UserEditModal
      :editedUser="user"
      :open="openModal"
      @close="handleCloseModal"
      @update="() => fetchUsers(paginationRef)"
    />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { computed, ref, onMounted, Ref } from 'vue';
import { IUser, IPagination } from 'src/types';
import UserEditModal from './UserEditModal.vue';
import { QTableColumn } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const userStore = useUserStore();

const columns: QTableColumn[] = [
  {
    name: 'id',
    label: t('userTable.columns.id'),
    field: 'id',
    align: 'center',
  },
  {
    name: 'name',
    label: t('userTable.columns.name'),
    field: 'name',
    align: 'center',
  },
  {
    name: 'email',
    label: t('userTable.columns.email'),
    field: 'email',
    align: 'center',
  },
  {
    name: 'gender',
    label: t('userTable.columns.gender'),
    field: 'gender',
    align: 'center',
  },
  {
    name: 'status',
    label: t('userTable.columns.status'),
    field: 'status',
    align: 'center',
  },
  {
    name: 'actions',
    label: t('userTable.columns.actions'),
    field: '',
    align: 'center',
  },
];

const paginationRef: Ref<IPagination> = ref({
  page: 1,
  rowsPerPage: 10,
});

const isLoading = computed(() => userStore.isLoading);
const searchId = ref();
const openModal = ref(false);
const user: Ref<IUser> = ref({
  id: 0,
  name: '',
  email: '',
  gender: 'male',
  status: 'active',
});

function handleOpenModal(row: IUser) {
  user.value = { ...row };
  openModal.value = true;
}

function handleCloseModal() {
  openModal.value = false;
}

async function fetchUsers(pagination: IPagination) {
  try {
    const response = await userStore.fetchUsers(pagination);
    if (response) {
      const paginationData = response.pagination;
      paginationRef.value = {
        page: paginationData.currentPage,
        rowsPerPage: paginationData.limit,
        rowsNumber: paginationData.total,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

async function fetchUser() {
  try {
    const id = searchId.value.trim();
    if (id) {
      await userStore.fetchUser(id);
      paginationRef.value = {
        ...paginationRef.value,
        page: 1,
        rowsNumber: 1,
      };
    } else {
      await fetchUsers(paginationRef.value);
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => await fetchUsers(paginationRef.value));
</script>
