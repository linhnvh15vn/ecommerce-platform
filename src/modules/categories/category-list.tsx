import { useState } from 'react';

import { useGetCategories } from '@/modules/categories/api/use-get-categories';
import CategoryTable from '@/modules/categories/components/category-table';

import type { QueryCategory } from '@/modules/categories/types/query-category.type';

export default function CategoryList() {
  const [params, setParams] = useState<QueryCategory>({
    itemsPerPage: 5,
  });
  const { data, isLoading } = useGetCategories(params);

  const handlePageChange = (pageIndex: number, itemsPerPage: number) => {
    setParams({ ...params, pageIndex, itemsPerPage });
  };

  const handleSearch = (value: string) => {
    setParams({ ...params, title: value });
  };

  return (
    <CategoryTable
      data={data?.data.items || []}
      total={data?.data.totalItems || 0}
      pageSize={data?.data.itemsPerPage || 10}
      isLoading={isLoading}
      onPageChange={handlePageChange}
      onSearchChange={handleSearch}
    />
  );
}
