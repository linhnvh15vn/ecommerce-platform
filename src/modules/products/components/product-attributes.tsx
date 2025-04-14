import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions, DescriptionsProps } from 'antd';

type ProductAttributesProps = {
  height: number | undefined;
  width: number | undefined;
  length: number | undefined;
  weight: number | undefined;
  material: number | undefined;
};

export default function ProductAttributes({
  height,
  width,
  length,
  weight,
  material,
}: ProductAttributesProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Height',
      children: height ? height : '-',
    },
    {
      label: 'Width',
      children: width ? width : '-',
    },
    {
      label: 'Length',
      children: length ? length : '-',
    },
    {
      label: 'Weight',
      children: weight ? weight : '-',
    },
    {
      label: 'Material',
      children: material ? material : '-',
    },
  ];

  return (
    <Card
      title="Attributes"
      extra={
        <Button type="primary" icon={<EditOutlined />}>
          Edit
        </Button>
      }
    >
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
