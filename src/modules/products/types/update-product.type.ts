import type { CreateProduct } from '@/modules/products/types/create-product.type';

export type UpdateProduct = Partial<CreateProduct> & {
  id: string;
};
