import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Space, Table, TableColumnsType } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

import { DATE_FORMAT } from '@/constants';

type CollectionTableProps = {
  data: any[];
};

export default function CollectionTable({ data }: CollectionTableProps) {
  const navigate = useNavigate();
  const columns: TableColumnsType = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Handle',
      dataIndex: 'handle',
      render: (value) => `/${value}`,
    },
    {
      title: 'Products',
      dataIndex: 'products',
      render: (value) => (value.length ? value.length : '-'), // or can use ||
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
        <Space split={<Divider />}>
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Collections"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      }
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        onRow={(data) => ({
          onClick: () => navigate(`/collections/${data.id}`),
        })}
      />
    </Card>
  );
}
