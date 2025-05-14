export type Category = {
  id: string;
  parent_category_id?: string;
  title: string;
  description: string;
  handle: string;
  mpath: string;
  is_active: boolean;
  rank: number;
  created_at: Date;
  updated_at: Date;
};
