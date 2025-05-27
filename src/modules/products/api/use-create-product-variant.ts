import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

import { axios } from '@/api/axios.instance';

import type { CreateVariant } from '../types/create-variant.type';
import type { ProductVariant } from '../types/product-variant.type';
import type { HttpResponse } from '@/types/http.type';

const createProductVariant = async (data: CreateVariant) => {
  const response = await axios.post<HttpResponse<ProductVariant>>(
    `/products/${data.product_id}/variants`,
    data
  );
  return response.data;
};

export const useCreateProductVariant = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: createProductVariant,
    onSuccess: () => {
      queryClient.invalidateQueries();
      message.success('Success!');
    },
  });
};
