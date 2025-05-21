import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';
import type { ProductOption } from '@/modules/products/types/product-option.type';
import type { UpdateOption } from '@/modules/products/types/update-option.type';
import type { HttpResponse } from '@/types/http.type';
import { App } from 'antd';

const updateProductOption = async (data: UpdateOption) => {
  const response = await axios.patch<HttpResponse<ProductOption>>(
    `/products/${data.productId}/options/${data.optionId}`,
    data,
  );

  return response.data;
};

export const useUpdateProductOption = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: updateProductOption,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      message.success('Success!');
    },
  });
};
