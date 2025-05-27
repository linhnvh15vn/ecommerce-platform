import { useState } from 'react';

import TagTable from '@/modules/tags/components/tag-table';

import { useGetTags } from '../api/use-get-tags';

import type { GetTagQueryParams } from '../tag.types';

export default function TagList() {
  const [query, setQuery] = useState<GetTagQueryParams>();
  const { data, isLoading } = useGetTags(query);

  const handlePageChange = (pageIndex: number, itemsPerPage: number) => {
    setQuery({
      ...query,
      pageIndex,
      itemsPerPage,
    });
  };

  const handleSearchChange = (value: string) => {
    setQuery({
      ...query,
      value,
    });
  };

  return (
    <TagTable
      data={data?.items || []}
      loading={isLoading}
      total={data?.totalItems || 0}
      pageSize={data?.itemsPerPage || 10}
      onPageChange={handlePageChange}
      onSearchChange={handleSearchChange}
    />
  );
}
