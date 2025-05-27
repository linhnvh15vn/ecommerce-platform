import { axios } from '@/api/axios.instance';

import type { HttpResponse } from '@/types/http.type';

export const getCollections = async (params?: any) => {
  const response = await axios.get('/collections', {
    params,
  });

  return response.data;
};
