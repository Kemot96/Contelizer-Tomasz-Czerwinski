import { api } from 'src/boot/axios';
import { IUser, IPagination, IGetUsersResponse } from 'src/types';

const token = process.env.token || ''; // NOT SAFE HERE, SHOULD BE STORED ON BACKEND, BUT THIS IS FRONT ONLY APP :)

export async function getUsers(
  pagination: IPagination
): Promise<IGetUsersResponse> {
  const { page, rowsPerPage } = pagination;
  try {
    const response = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        per_page: rowsPerPage,
      },
    });

    const total = response.headers['x-pagination-total'];
    const pages = response.headers['x-pagination-pages'];
    const currentPage = response.headers['x-pagination-page'];
    const limit = response.headers['x-pagination-limit'];

    return {
      users: response?.data,
      pagination: {
        total: Number(total),
        pages: Number(pages),
        currentPage: Number(currentPage),
        limit: Number(limit),
      },
    };
  } catch (error) {
    throw error;
  }
}

export async function getUser(id: number) {
  try {
    const response = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(user: IUser) {
  try {
    const response = await api.put(`/users/${user.id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
