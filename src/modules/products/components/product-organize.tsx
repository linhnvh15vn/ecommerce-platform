import type { ProductTag } from '@/modules/products/types/product-tag.type';
import type { ProductType } from '@/modules/products/types/product-type.type';
import { Card, Descriptions, type DescriptionsProps } from 'antd';

type ProductOrganizeProps = {
  tags: ProductTag[];
  type: ProductType;
  collection: any;
  category: any;
};

export default function ProductOrganize({
  tags,
  type,
  collection,
  category,
}: ProductOrganizeProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: 'Tags',
      children: tags.map((tag) => (tag ? `#${tag.tag.value}` : '-')), // fix
    },
    {
      label: 'Type',
      children: type ? type.value : '-',
    },
    {
      label: 'Collection',
      children: collection ? collection.title : '-',
    },
    {
      label: 'Category',
      children: category ? category.title : '-',
    },
  ];

  return (
    <Card title="Organize">
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
