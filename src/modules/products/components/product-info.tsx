import { Card, Descriptions, DescriptionsProps, Space, Tag } from 'antd';

type ProductInfoProps = {
  title: string;
  description: string | undefined;
  handle: string;
  status: string;
};

export default function ProductInfo({
  title,
  description,
  handle,
  status,
}: ProductInfoProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Description',
      children: description ?? '-',
    },
    {
      label: 'Handle',
      children: handle ?? '-',
    },
  ];

  return (
    <Card
      title={title}
      extra={
        <Space>
          <Tag color="green">{status}</Tag>
        </Space>
      }
    >
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
