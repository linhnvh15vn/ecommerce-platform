import { Card, Descriptions, DescriptionsProps } from 'antd';

type CategoryOrganizeProps = {
  path: string;
  children: [];
};

export default function CategoryOrganize({
  path,
  children,
}: CategoryOrganizeProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Path',
      children: path,
    },
    {
      label: 'Children',
      children: children.length ? children.length : '-',
    },
  ];

  return (
    <Card title="Organize">
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
