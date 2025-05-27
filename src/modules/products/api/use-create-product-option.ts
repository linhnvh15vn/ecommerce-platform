import { useMutation } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { CreateOption } from '@/modules/products/types/create-option.type';
import type { ProductOption } from '@/modules/products/types/product-option.type';
import type { HttpResponse } from '@/types/http.type';

const createProductOption = async (data: CreateOption) => {
  const response = await axios.post<HttpResponse<ProductOption>>(
    `/products/${data.productId}/options`,
    data,
  );

  return response.data;
};

export const useCreateProductOption = () => {
  return useMutation({
    mutationFn: createProductOption,
  });
};
