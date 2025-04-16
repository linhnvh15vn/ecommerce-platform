import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Space, Table, TableColumnsType } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

import { DATE_FORMAT } from '@/constants';

type PromotionTableProps = {
  data: any[];
};

export default function PromotionTable({ data }: PromotionTableProps) {
  const navigate = useNavigate();
  const columns: TableColumnsType = [
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Method',
      dataIndex: '',
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
        <Space>
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Promotions"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      }
    >
      <Table
        columns={columns}
        dataSource={data}
        onRow={(data) => ({
          onClick: () => navigate(`/promotions/${data.id}`),
        })}
      />
    </Card>
  );
}
