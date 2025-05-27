import { useState } from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
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

import TagForm from './tag-form';

import type { Tag } from '../tag.types';

type TagTableProps = {
  data: Tag[];
  loading: boolean;
  total: number;
  pageSize: number;
  onPageChange: (pageIndex: number, itemsPerPage: number) => void;
  onSearchChange: (value: string) => void;
};

export default function TagTable({
  data,
  loading,
  total,
  pageSize,
  onPageChange,
  onSearchChange,
}: TagTableProps) {
  const [selectedTag, setSelectedTag] = useState<Tag>();
  const { value, setTrue, setFalse } = useBoolean();
  const columns: TableProps<Tag>['columns'] = [
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

  const handleEdit = (tag: Tag) => {
    setSelectedTag(tag);
    setTrue();
  };

  return (
    <>
      <Card
        title="Tags"
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
      <TagForm open={value} data={selectedTag} onCancel={setFalse} />
    </>
  );
}
