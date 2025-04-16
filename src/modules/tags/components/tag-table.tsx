import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Space, Table, TableColumnsType } from 'antd';
import { useNavigate } from 'react-router';

type TagTableProps = {
  data: any[];
};

export default function TagTable({ data }: TagTableProps) {
  const navigate = useNavigate();
  const columns: TableColumnsType = [
    {
      title: 'Value',
      dataIndex: '',
    },
    {
      title: 'Created',
      dataIndex: '',
    },
    {
      title: 'Updated',
      dataIndex: '',
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
    <Card title="Product Tags">
      <Table
        columns={columns}
        dataSource={data}
        onRow={(data) => ({
          onClick: () => navigate(`/tags/${data.id}`),
        })}
      />
    </Card>
  );
}
