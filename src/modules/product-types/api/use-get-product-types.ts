import { axios } from '@/api/axios.instance';

import type { ProductType } from '../types';
import type { HttpResponse, Paginated } from '@/types/http.type';

export const getProductTypes = async (params?: any) => {
  const response = await axios.get<HttpResponse<Paginated<ProductType>>>(
    '/types',
    { params }
  );

  return response.data;
};
