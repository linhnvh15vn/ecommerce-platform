import { Card, Descriptions, DescriptionsProps } from 'antd';
import React from 'react';

type CategoryInfoProps = {
  title: string;
  description: string | undefined;
  handle: string;
};

export default function CategoryInfo({
  title,
  description,
  handle,
}: CategoryInfoProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Description',
      children: description,
    },
    {
      label: 'Handle',
      children: handle,
    },
  ];

  return (
    <Card title={title}>
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
