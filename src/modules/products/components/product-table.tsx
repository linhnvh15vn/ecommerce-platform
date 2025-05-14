import type { Product } from '@/modules/products/types/product.type';
import { Card, Table, type TableProps } from 'antd';

type ProductTableProps = {
  data: Product[];
};

export default function ProductTable({ data }: ProductTableProps) {
  const columns: TableProps<Product>['columns'] = [{}];

  return (
    <Card title="Products">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
