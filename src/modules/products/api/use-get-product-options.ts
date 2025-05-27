import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { ProductOption } from '@/modules/products/types/product-option.type';
import type { HttpResponse, Paginated } from '@/types/http.type';

const getProductOptions = async (productId: string) => {
  const response = await axios.get<HttpResponse<Paginated<ProductOption>>>(
    `/products/${productId}/options`,
  );

  return response.data;
};

export const useGetProductOptions = (productId: string) => {
  return useQuery({
    queryKey: ['products', productId, 'options'],
    queryFn: () => getProductOptions(productId),
  });
};
