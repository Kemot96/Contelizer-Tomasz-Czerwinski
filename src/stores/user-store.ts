import { defineStore } from 'pinia';
import { getUsers, getUser, updateUser } from 'src/api/user-api';
import { IUser, IPagination } from 'src/types';
import { handleApiError, showSuccess } from 'src/utils/notifications';

export const useUserStore = defineStore('api', {
  state: () => ({
    users: [] as Array<IUser>,
    isLoading: false,
  }),
  actions: {
    async fetchUsers(pagination: IPagination) {
      this.isLoading = true;
      try {
        const data = await getUsers(pagination);
        this.users = data.users || [];
        return data;
      } catch (error: unknown) {
        handleApiError(error, 'Unexpected error occurred while fetching users');
      } finally {
        this.isLoading = false;
      }
    },
    async fetchUser(id: number) {
      this.isLoading = true;
      try {
        const data = await getUser(id);
        this.users = [data];
      } catch (error: unknown) {
        handleApiError(error, 'Unexpected error occurred while fetching user');
      } finally {
        this.isLoading = false;
      }
    },
    async updateUser(user: IUser) {
      try {
        await updateUser(user);
        showSuccess('Zaktualizowano użytkownika');
      } catch (error: unknown) {
        handleApiError(error, 'Unexpected error occurred while updating user');
      }
    },
  },
});
