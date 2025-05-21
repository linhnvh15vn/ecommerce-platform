import { DATE_FORMAT } from '@/constants';
import type { ProductOption } from '@/modules/products/types/product-option.type';
import type { ProductVariant } from '@/modules/products/types/product-variant.type';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Divider,
  Space,
  Table,
  Tag,
  type TableProps,
} from 'antd';
import dayjs from 'dayjs';

type ProductVariantTableProps = {
  variants: ProductVariant[];
  options: ProductOption[];
};

export default function ProductVariantTable({
  variants,
  options,
}: ProductVariantTableProps) {
  const columns: TableProps<ProductVariant>['columns'] = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
    },
    ...options.map((option) => ({
      title: option.title,
      render: (_, record) => {
        const a = record.option_variants.find(
          (optionVariant) => optionVariant.option_value.option_id === option.id,
        );

        return <Tag>{a ? a.option_value.value : '-'}</Tag>;
      },
    })),
    {
      title: 'Stock',
      dataIndex: 'stock',
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
      render: (value) => dayjs(value).format(DATE_FORMAT),
    },
    {
      title: 'Updated',
      dataIndex: 'updated_at',
      render: (value) => dayjs(value).format(DATE_FORMAT),
    },
    {
      align: 'end',
      render: (_, record) => (
        <Space split={<Divider type="vertical" />}>
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card title="Variants">
      <Table columns={columns} dataSource={variants} />
    </Card>
  );
}
