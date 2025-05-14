import { useState, type Key } from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  App,
  Button,
  Card,
  Divider,
  Flex,
  Input,
  Space,
  Table,
  Tag,
  type TableProps,
} from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

import { DATE_FORMAT, PAGE_SIZE_OPTIONS } from '@/constants';
import { useDeleteCategory } from '@/modules/categories/api/use-delete-category';
import { useDeleteManyCategory } from '@/modules/categories/api/use-delete-many-category';
import CategoryForm from '@/modules/categories/components/category-form';
import type { Category } from '@/modules/categories/types/category.type';

type CategoryTableProps = {
  data: Category[];
  isLoading: boolean;
  total: number;
  pageSize: number;
  onPageChange: (pageIndex: number, itemsPerPage: number) => void;
  onSearchChange: (value: string) => void;
};

export default function CategoryTable({
  data,
  isLoading,
  total,
  pageSize,
  onPageChange,
  onSearchChange,
}: CategoryTableProps) {
  const { modal } = App.useApp();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const { mutate } = useDeleteCategory();
  const { mutate: deleteManyCategory } = useDeleteManyCategory();
  const columns: TableProps<Category>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
      title: 'Handle',
      dataIndex: 'handle',
      render: (value: string) => `/${value}`,
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      render: (value: boolean) => (
        <Tag color={value ? 'green' : 'red'}>
          {value ? 'Active' : 'Inactive'}
        </Tag>
      ),
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
                content: `You are about to delete the category ${record.title}. This action cannot be undone.`,
                onOk: () => mutate(record.id),
              });
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Card
        title="Categories"
        extra={
          <Space split={<Divider type="vertical" />}>
            <Input.Search
              allowClear
              placeholder="Search categories"
              onSearch={onSearchChange}
            />
            <Button type="primary" onClick={() => setOpen(true)}>
              Create
            </Button>
          </Space>
        }
      >
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          loading={isLoading}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          onRow={(data) => ({
            onClick: () => navigate(`/categories/${data.id}`),
          })}
          pagination={{
            onChange: (page, pageSize) => onPageChange(page, pageSize),
            total,
            pageSize,
            pageSizeOptions: PAGE_SIZE_OPTIONS,
            showSizeChanger: true,
            showTotal: (total, range) =>
              `${range[0]} - ${range[1]} of ${total} results`,
          }}
        />
      </Card>
      <CategoryForm open={open} onCancel={() => setOpen(false)} />
      {selectedRowKeys.length > 0 && (
        <Flex
          justify="center"
          style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            width: '100%',
          }}
        >
          <Button
            type="primary"
            size="large"
            shape="round"
            danger
            onClick={() => {
              modal.confirm({
                title: 'Are you sure?',
                content: `You are about to delete ${selectedRowKeys.length} the categories. This action cannot be undone.`,
                onOk: () => deleteManyCategory(selectedRowKeys),
              });
            }}
          >
            Remove {selectedRowKeys.length} items
          </Button>
        </Flex>
      )}
    </>
  );
}
