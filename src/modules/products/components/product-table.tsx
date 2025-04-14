import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Divider,
  Popconfirm,
  Space,
  Table,
  TableColumnsType,
} from 'antd';
import { useNavigate } from 'react-router';

type ProductTableProps = {
  data: any;
};

export default function ProductTable({ data }: ProductTableProps) {
  const navigate = useNavigate();
  const columns: TableColumnsType = [
    {
      title: 'Product',
      dataIndex: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (value) => value ?? '-',
    },
    {
      title: 'Collection',
      dataIndex: 'collection',
      render: (value) => value ?? '-',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (value) => value ?? '-',
    },
    {
      title: 'Variants',
      dataIndex: 'variants',
      render: (value) => `${value.length} variants`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      align: 'end',
      render: (_, record) => (
        <Space split={<Divider type="vertical" />}>
          <Button type="link" icon={<EditOutlined />} />
          <Popconfirm title="Are you sure?">
            <Button type="link" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Products"
      extra={
        <Space>
          <Button>Export</Button>
          <Button>Import</Button>
          <Button type="primary">Create</Button>
        </Space>
      }
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        onRow={(data) => ({
          onClick: () => navigate(`/products/${data.id}`),
        })}
      />
    </Card>
  );
}
