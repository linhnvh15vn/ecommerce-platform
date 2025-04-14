import { DATE_FORMAT } from '@/constants';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Space, Table, TableColumnsType } from 'antd';
import dayjs from 'dayjs';

type ProductVariantsTableProps = {
  data: any[];
  externalColumns: any[];
};

export default function ProductVariantsTable({
  data,
  externalColumns,
}: ProductVariantsTableProps) {
  const columns: TableColumnsType = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
    },
    ...externalColumns,
    {
      title: 'Inventory',
      dataIndex: 'inventory_quantity',
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
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Variants"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
