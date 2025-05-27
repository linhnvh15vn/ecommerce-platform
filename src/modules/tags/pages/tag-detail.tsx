import { Card, Flex } from 'antd';
import { useParams } from 'react-router';

import ProductTable from '@/modules/products/components/product-table';

import { useGetTagById } from '../api/use-get-tag-by-id';

export default function TagDetail() {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useGetTagById(params.id!);

  if (isLoading) return;

  return (
    <Flex vertical gap={16}>
      <Card
        title={`#${data?.value}`}
        loading={isLoading}
        styles={{
          body: {
            display: 'none',
          },
        }}
      />
      <ProductTable
        data={data.products?.items || []}
        isLoading={isLoading}
        total={data.products?.totalItems || 0}
        pageSize={data.products?.itemsPerPage || 5}
        onPageChange={() => {}}
        onSearchChange={() => {}}
      />
    </Flex>
  );
}
