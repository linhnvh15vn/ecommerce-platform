import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { ProductVariant } from '@/modules/products/types/product-variant.type';
import type { HttpResponse, Paginated } from '@/types/http.type';

const getProductVariants = async (productId: string) => {
  const response = await axios.get<HttpResponse<Paginated<ProductVariant>>>(
    `/products/${productId}/variants`,
  );

  return response.data;
};

export const useGetProductVariants = (productId: string) => {
  return useQuery({
    queryKey: ['products', productId, 'variants'],
    queryFn: () => getProductVariants(productId),
  });
};
