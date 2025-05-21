import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';
import type { Product } from '@/modules/products/types/product.type';
import type { HttpResponse, Paginated } from '@/types/http.type';

const getProducts = async () => {
  const response = await axios.get<HttpResponse<Paginated<Product>>>(
    '/products',
  );
  return response.data;
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
};
