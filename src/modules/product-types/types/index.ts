export type GetProductTypeQueryParams = {
  value?: string;
  pageIndex?: number;
  itemsPerPage?: number;
};

export type ProductType = {
  id: string;
  value: string;
  created_at: Date;
  updated_at: Date;
};

export type CreateProductTypeBody = {
  value: string;
};

export type UpdateProductTypeBody = Partial<CreateProductTypeBody> & {
  id: string;
};
