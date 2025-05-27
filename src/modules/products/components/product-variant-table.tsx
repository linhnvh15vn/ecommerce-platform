import { useState } from 'react';

import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  type TableProps,
  Button,
  Card,
  Divider,
  Space,
  Table,
  Tag,
} from 'antd';
import dayjs from 'dayjs';

import { DATE_FORMAT } from '@/constants';
import { useBoolean } from '@/shared/hooks/use-boolean';

import UpdateProductVariantDrawer from './update-product-variant-drawer';

import type { ProductOption } from '@/modules/products/types/product-option.type';
import type { ProductVariant } from '@/modules/products/types/product-variant.type';

type ProductVariantTableProps = {
  variants: ProductVariant[];
  options: ProductOption[];
};

export default function ProductVariantTable({
  variants,
  options,
}: ProductVariantTableProps) {
  const { value, setTrue, setFalse } = useBoolean();
  const { data, setData } = useState();
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
          (optionVariant) => optionVariant.option_value.option_id === option.id
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
          <Button type="link" icon={<EditOutlined />} onClick={setTrue} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Variants"
      extra={
        <Button icon={<PlusOutlined />} onClick={setTrue}>
          Create
        </Button>
      }
    >
      <Table rowKey="id" columns={columns} dataSource={variants} />
      <UpdateProductVariantDrawer
        open={value}
        options={options}
        data={{}}
        onClose={setFalse}
      />
    </Card>
  );
}
