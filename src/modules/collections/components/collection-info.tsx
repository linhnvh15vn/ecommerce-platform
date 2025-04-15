import { Card, Descriptions, DescriptionsProps } from 'antd';

type CollectionInfoProps = {
  title: string;
  handle: string;
};

export default function CollectionInfo({ title, handle }: CollectionInfoProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Handle',
      children: `/${handle}`,
    },
  ];

  return (
    <Card title={title}>
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
