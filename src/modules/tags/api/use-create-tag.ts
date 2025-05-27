import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

import { axios } from '@/api/axios.instance';

import type { CreateTagBody, Tag } from '../tag.types';
import type { HttpResponse } from '@/types/http.type';

const createTag = async (data: CreateTagBody) => {
  const response = await axios.post<HttpResponse<Tag>>('/tags', data);
  return response.data;
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
      message.success('Success!');
    },
  });
};
