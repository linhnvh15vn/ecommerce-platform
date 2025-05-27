import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { Category } from '@/modules/categories/types/category.type';
import type { QueryCategory } from '@/modules/categories/types/query-category.type';
import type { HttpResponse, Paginated } from '@/types/http.type';

export const getCategories = async (params?: QueryCategory) => {
  const response = await axios.get<HttpResponse<Paginated<Category>>>(
    '/categories',
    {
      params,
    }
  );
  return response;
};

export const useGetCategories = (params?: QueryCategory) => {
  return useQuery({
    queryKey: ['categories', params],
    queryFn: () => getCategories(params),
  });
};
