import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

import { axios } from '@/api/axios.instance';

const deleteManyCategory = async (ids: string[]) => {
  const response = await axios.post('/categories/delete-many', ids);
  return response;
};

export const useDeleteManyCategory = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteManyCategory,
    onSuccess: () => {
      queryClient.invalidateQueries();
      message.success('Success!');
    },
  });
};
