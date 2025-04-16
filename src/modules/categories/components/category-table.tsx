import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Space, Table, TableColumnsType } from 'antd';
import { useNavigate } from 'react-router';

type CategoryTableProps = {
  data: any[];
};

export default function CategoryTable({ data }: CategoryTableProps) {
  const navigate = useNavigate();
  const columns: TableColumnsType = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Handle',
      dataIndex: 'handle',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
    },
    {
      title: 'Updated',
      dataIndex: 'updated_at',
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
    <Card title="Categories">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        onRow={(data) => ({
          onClick: () => navigate(`/categories/${data.id}`),
        })}
      />
    </Card>
  );
}
