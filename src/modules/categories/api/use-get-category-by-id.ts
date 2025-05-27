import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { Category } from '@/modules/categories/types/category.type';
import type { HttpResponse } from '@/types/http.type';

const getCategoryById = async (id: string) => {
  const response = await axios.get<HttpResponse<Category>>(`/categories/${id}`);
  return response.data;
};

export const useGetCategoryById = (id: string) => {
  return useQuery({
    queryKey: ['categories', id],
    queryFn: () => getCategoryById(id),
  });
};
