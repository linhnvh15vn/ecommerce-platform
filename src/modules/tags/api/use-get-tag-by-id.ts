import { useQueries } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';
import { getProducts } from '@/modules/products/api/use-get-products';

import type { Tag } from '../tag.types';
import type { HttpResponse } from '@/types/http.type';

export const getTagById = async (id: string) => {
  const response = await axios.get<HttpResponse<Tag>>(`/tags/${id}`);
  return response.data;
};

export const useGetTagById = (id: string) => {
  return useQueries({
    queries: [
      {
        queryKey: ['tags', id],
        queryFn: () => getTagById(id),
      },
      {
        queryKey: ['products', { tag_id: id }],
        queryFn: () => getProducts({ tag_id: id }),
      },
    ],
    combine: (results) => ({
      data: { ...results[0].data, products: results[1].data },
      isLoading: results.some(({ isLoading }) => isLoading),
    }),
  });
};
