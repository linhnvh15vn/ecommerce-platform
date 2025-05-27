import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

import { axios } from '@/api/axios.instance';

import type { Tag, UpdateTagBody } from '../tag.types';
import type { HttpResponse } from '@/types/http.type';

const updateTag = async (data: UpdateTagBody) => {
  const response = await axios.patch<HttpResponse<Tag>>(
    `/tags/${data.id}`,
    data
  );

  return response.data;
};

export const useUpdateTag = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: updateTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
      message.success('Success!');
    },
  });
};
