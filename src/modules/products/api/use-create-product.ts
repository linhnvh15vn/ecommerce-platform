import { axios } from '@/api/axios.instance';
import type { CreateProduct } from '@/modules/products/types/create-product.type';
import type { Product } from '@/modules/products/types/product.type';
import type { HttpResponse, Paginated } from '@/types/http.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { App } from 'antd';

const createProduct = async (data: CreateProduct) => {
  const response = await axios.post<HttpResponse<Paginated<Product>>>(
    '/products',
    data,
  );

  return response.data;
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      message.success('Success!');
    },
  });
};
