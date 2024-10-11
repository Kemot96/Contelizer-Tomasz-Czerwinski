export interface IUser {
  email: string;
  gender: 'male' | 'female';
  id: number;
  name: string;
  status: 'active' | 'inactive';
}

export interface IPagination {
  page: number;
  rowsPerPage: number;
  rowsNumber?: number;
}

export interface IGetUsersResponse {
  users: IUser[];
  pagination: {
    total: number;
    pages: number;
    currentPage: number;
    limit: number;
  };
}
