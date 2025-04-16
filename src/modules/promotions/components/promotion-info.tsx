import { Card, Descriptions, DescriptionsProps } from 'antd';

type PromotionInfoProps = {
  code: string;
  type: string;
  value: number;
};

export default function PromotionInfo({
  code,
  type,
  value,
}: PromotionInfoProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Code',
      children: code,
    },
    {
      label: 'Type',
      children: type,
    },
    {
      label: 'Value',
      children: value,
    },
  ];

  return (
    <Card title={code}>
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
