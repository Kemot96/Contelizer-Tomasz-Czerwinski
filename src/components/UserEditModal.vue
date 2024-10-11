<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card class="card-modal">
      <q-card-section class="q-pa-md">
        <div class="text-h6">{{ $t('userTable.modal.title') }}</div>
      </q-card-section>

      <q-card-section class="q-pa-md">
        <q-input
          v-model="user.name"
          :label="$t('userTable.columns.name')"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model="user.email"
          :label="$t('userTable.columns.email')"
          filled
          class="q-mb-md"
        />
        <q-select
          v-model="user.gender"
          :options="genderOptions"
          :label="$t('userTable.columns.gender')"
          filled
          emit-value
          map-options
          class="q-mb-md"
        />
        <q-select
          v-model="user.status"
          :options="statusOptions"
          :label="$t('userTable.columns.status')"
          filled
          emit-value
          map-options
          class="q-mb-md"
        />
      </q-card-section>

      <q-card-actions class="q-pa-md q-gutter-md">
        <div class="q-ml-auto">
          <q-btn
            :label="$t('userTable.modal.actions.cancel')"
            color="negative"
            @click="close"
            class="q-mr-md"
          />
          <q-btn
            :label="$t('userTable.modal.actions.save')"
            color="primary"
            @click="save"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, Ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { IUser } from 'src/types';
import { useI18n } from 'vue-i18n';

interface Props {
  editedUser: IUser;
  open: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['update', 'close']);

const { t } = useI18n();

const userStore = useUserStore();

const user: Ref<IUser> = ref({
  id: 0,
  name: '',
  email: '',
  gender: 'male',
  status: 'active',
});
const isOpen = ref(false);

watch(
  () => props.open,
  (open) => {
    if (open) {
      user.value = { ...props.editedUser };
    }
    isOpen.value = open;
  }
);

const genderOptions = ref([
  { label: t('userTable.modal.gender.male'), value: 'male' },
  { label: t('userTable.modal.gender.female'), value: 'female' },
]);

const statusOptions = ref([
  { label: t('userTable.modal.status.active'), value: 'active' },
  { label: t('userTable.modal.status.inactive'), value: 'inactive' },
]);

async function save() {
  try {
    await userStore.updateUser(user.value);
    emit('update');
    close();
  } catch (error) {
    console.error(error);
  }
}

function close() {
  emit('close');
}
</script>
