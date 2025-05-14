import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';
import { App } from 'antd';

const deleteCategory = async (id: string) => {
  const response = await axios.delete(`/categories/${id}`);
  return response;
};

export const useDeleteCategory = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries();
      message.success('Success!');
    },
  });
};
