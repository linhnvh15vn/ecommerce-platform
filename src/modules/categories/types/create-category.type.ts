export type CreateCategory = {
  title: string;
  description: string;
  parent_category_id?: string;
  is_active: boolean;
};
