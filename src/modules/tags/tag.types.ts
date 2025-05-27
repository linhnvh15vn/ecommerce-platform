export type GetTagQueryParams = {
  value?: string;
  pageIndex?: number;
  itemsPerPage?: number;
};

export type Tag = {
  id: string;
  value: string;
  created_at: Date;
  updated_at: Date;
};

export type CreateTagBody = {
  value: string;
};

export type UpdateTagBody = Partial<CreateTagBody> & {
  id: string;
};
