export type HttpResponse<T> = {
  apiVersion: number;
  data: T;
};

export type Paginated<T> = {
  currentItemCount: number;
  itemsPerPage: number;
  totalItems: number;
  pageIndex: number;
  totalPages: number;
  items: T[];
};
