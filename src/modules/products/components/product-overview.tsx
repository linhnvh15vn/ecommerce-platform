import UpdateProductOverview from '@/modules/products/components/update-product-overview';
import { useBoolean } from '@/shared/hooks/use-boolean';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Descriptions,
  Divider,
  Space,
  Tag,
  type DescriptionsProps,
} from 'antd';

type ProductOverviewProps = {
  title: string;
  description: string;
  handle: string;
  status: string;
};

export default function ProductOverview({
  title,
  description,
  handle,
  status,
}: ProductOverviewProps) {
  const { value, setTrue, setFalse } = useBoolean(false);
  const items: DescriptionsProps['items'] = [
    {
      label: 'Description',
      children: description,
    },
    {
      label: 'Handle',
      children: `/${handle}`,
    },
    {
      label: 'Status',
      children: <Tag>{status}</Tag>,
    },
  ];

  return (
    <Card
      title={title}
      extra={
        <Space split={<Divider type="vertical" />}>
          <Button type="link" icon={<EditOutlined />} onClick={setTrue} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      }
    >
      <Descriptions column={1} bordered items={items} />
      <UpdateProductOverview
        open={value}
        data={{
          title,
          handle,
          description,
          status,
        }}
        onClose={setFalse}
      />
    </Card>
  );
}
