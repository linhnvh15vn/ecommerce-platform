import { useQuery } from '@tanstack/react-query';

import { axios } from '@/api/axios.instance';

import type { GetTagQueryParams, Tag } from '../tag.types';
import type { HttpResponse, Paginated } from '@/types/http.type';

export const getTags = async (params?: GetTagQueryParams) => {
  const response = await axios.get<HttpResponse<Paginated<Tag>>>('/tags', {
    params,
  });

  return response.data;
};

export const useGetTags = (params?: GetTagQueryParams) => {
  return useQuery({
    queryKey: ['tags', params],
    queryFn: () => getTags(params),
  });
};
