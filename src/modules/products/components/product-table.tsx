import { type Key, useState } from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  type TableProps,
  App,
  Button,
  Card,
  Divider,
  Space,
  Table,
} from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

import { DATE_FORMAT, PAGE_SIZE_OPTIONS } from '@/constants';
import CreateProductModal from '@/modules/products/components/create-product-modal';
import { useBoolean } from '@/shared/hooks/use-boolean';

import type { Product } from '@/modules/products/types/product.type';

type ProductTableProps = {
  data: Product[];
  isLoading: boolean;
  total: number;
  pageSize: number;
  onPageChange: (pageIndex: number, itemsPerPage: number) => void;
  onSearchChange: (value: string) => void;
};

export default function ProductTable({
  data,
  isLoading,
  total,
  pageSize,
  onPageChange,
}: ProductTableProps) {
  const { modal } = App.useApp();
  const navigate = useNavigate();
  const { value, setTrue, setFalse } = useBoolean(false);
  const columns: TableProps<Product>['columns'] = [
    {
      title: 'Product',
      dataIndex: 'title',
    },
    {
      title: 'Collection',
      dataIndex: 'collection',
      render: (value) => (value ? value.title : '-'),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (value) => (value ? value.title : '-'),
    },
    {
      title: 'Variants',
      dataIndex: 'variants',
      render: (value) => value.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
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
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              modal.confirm({
                title: 'Are you sure?',
                content: `You are about to delete the product ${record.title}. This action cannot be undone.`,
                // onOk: () => mutate(record.id),
              });
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Products"
      extra={
        <Button type="primary" onClick={setTrue}>
          Create
        </Button>
      }
    >
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        onRow={(data) => ({
          onClick: () => navigate(`/products/${data.id}`),
        })}
        pagination={{
          onChange: (page, pageSize) => onPageChange(page, pageSize),
          total,
          pageSize,
          pageSizeOptions: PAGE_SIZE_OPTIONS,
          showSizeChanger: true,
        }}
      />
      <CreateProductModal open={value} onCancel={setFalse} />
    </Card>
  );
}
