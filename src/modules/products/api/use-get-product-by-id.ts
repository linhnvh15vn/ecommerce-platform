import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { Product } from '@/modules/products/types/product.type';
import type { HttpResponse } from '@/types/http.type';

const getProductById = async (id: string) => {
  const response = await axios.get<HttpResponse<Product>>(`/products/${id}`);
  return response.data;
};

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id),
  });
};
