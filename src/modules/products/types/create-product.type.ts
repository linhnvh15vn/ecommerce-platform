import type { CreateOption } from '@/modules/products/types/create-option.type';
import type { CreateVariant } from '@/modules/products/types/create-variant.type';

export type CreateProduct = {
  title: string;
  description: string;
  thumbnail: string;
  category_id?: string;
  collection_id?: string;
  type_id?: string;
  options: CreateOption[];
  variants: CreateVariant[];
};
