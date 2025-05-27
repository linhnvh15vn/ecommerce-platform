import { useState } from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  type TableProps,
  Button,
  Card,
  Divider,
  Input,
  Space,
  Table,
} from 'antd';
import dayjs from 'dayjs';

import { DATE_FORMAT, PAGE_SIZE_OPTIONS } from '@/constants';
import { useBoolean } from '@/shared/hooks/use-boolean';

import type { ProductType } from '../types';

type ProductTypeTableProps = {
  data: ProductType[];
  loading: boolean;
  total: number;
  pageSize: number;
  onPageChange: (pageIndex: number, itemsPerPage: number) => void;
  onSearchChange: (value: string) => void;
};

export default function ProductTypeTable({
  data,
  loading,
  total,
  pageSize,
  onPageChange,
  onSearchChange,
}: ProductTypeTableProps) {
  const [selectedType, setSelectedType] = useState<ProductType>();
  const { value, setTrue, setFalse } = useBoolean();
  const columns: TableProps<ProductType>['columns'] = [
    {
      title: 'Value',
      dataIndex: 'value',
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
      render: (value) => dayjs(value).format(DATE_FORMAT),
    },
    {
      title: 'Updated',
      dataIndex: 'Updated',
      render: (value) => dayjs(value).format(DATE_FORMAT),
    },
    {
      align: 'end',
      render: (_, record) => (
        <Space split={<Divider type="vertical" />}>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  const handleEdit = (type: ProductType) => {
    setSelectedType(type);
    setTrue();
  };

  return (
    <Card
      title="Product Types"
      extra={
        <Space split={<Divider type="vertical" />}>
          <Input.Search
            allowClear
            placeholder="Search tags"
            onSearch={onSearchChange}
          />
          <Button type="primary" onClick={setTrue}>
            Create
          </Button>
        </Space>
      }
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          onChange: (page, pageSize) => onPageChange(page, pageSize),
          total,
          pageSize,
          pageSizeOptions: PAGE_SIZE_OPTIONS,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]} - ${range[1]} of ${total} results`,
        }}
        onRow={(data) => ({})}
      />
    </Card>
  );
}
