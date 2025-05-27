import { type DescriptionsProps, Card, Descriptions } from 'antd';

import type { Category } from '@/modules/categories/types/category.type';

type CategoryOrganizeProps = {
  path: string;
  children?: Category;
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
      children: '1',
    },
  ];

  return (
    <Card title="Organize">
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
