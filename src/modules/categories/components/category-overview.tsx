import {
  Button,
  Card,
  Descriptions,
  Space,
  Tag,
  type DescriptionsProps,
} from 'antd';

import type { Category } from '@/modules/categories/types/category.type';

type CategoryOverviewProps = {
  category: Category;
};

export default function CategoryOverview({ category }: CategoryOverviewProps) {
  const { title, description, handle, is_active } = category;
  const items: DescriptionsProps['items'] = [
    {
      label: 'Description',
      children: description,
    },
    {
      label: 'Handle',
      children: `/${handle}`,
    },
  ];

  return (
    <Card
      title={title}
      extra={
        <Space>
          <Tag color={is_active ? 'green' : 'red'}>
            {is_active ? 'Active' : 'Inactive'}
          </Tag>
          <Button>Edit</Button>
        </Space>
      }
    >
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
