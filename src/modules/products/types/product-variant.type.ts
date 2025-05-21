import type { OptionValue } from '@/modules/products/types/product-option.type';

export type ProductVariant = {
  id: string;
  title: string;
  price: number;
  sale_price: number;
  sku?: string;
  stock: number;
  option_variants: {
    option_values: OptionValue[];
  };
  created_at: Date;
  updated_at: Date;
};
