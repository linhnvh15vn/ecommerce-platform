import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { Product } from '@/modules/products/types/product.type';
import type { HttpResponse, Paginated } from '@/types/http.type';

export const getProducts = async (params?: Record<string, string>) => {
  const response = await axios.get<HttpResponse<Paginated<Product>>>(
    '/products',
    {
      params,
    }
  );
  return response.data;
};

export const useGetProducts = (params?: Record<string, string>) => {
  return useQuery({
    queryKey: ['products', { params }],
    queryFn: () => getProducts(params),
  });
};
