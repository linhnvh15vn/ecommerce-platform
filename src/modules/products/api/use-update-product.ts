import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

import { axios } from '@/api/axios.instance';

import type { UpdateProduct } from '@/modules/products/types/update-product.type';

const updateProduct = async (data: UpdateProduct) => {
  const response = await axios.patch(`/products/${data.id}`, data);
  return response;
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      message.success('Success!');
    },
  });
};
