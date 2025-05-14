import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';
import type { CreateCategory } from '@/modules/categories/types/create-category.type';
import { App } from 'antd';

const createCategory = async (data: CreateCategory) => {
  const response = await axios.post('/categories', data);
  return response;
};

export const useCreateCategory = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries();
      message?.success('Success!');
    },
  });
};
