import { EditOutlined } from '@ant-design/icons';
import { type DescriptionsProps, Button, Card, Descriptions, Tag } from 'antd';

import { useBoolean } from '@/shared/hooks/use-boolean';

import UpdateProductOrganizeDrawer from './update-product-organize-drawer';

import type { ProductTag } from '@/modules/products/types/product-tag.type';
import type { ProductType } from '@/modules/products/types/product-type.type';

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
  const { value, setTrue, setFalse } = useBoolean();
  const items: DescriptionsProps['items'] = [
    {
      label: 'Tags',
      children: tags.map((tag) =>
        tag ? <Tag key={tag.tag.id}>#{tag.tag.value}</Tag> : '-'
      ), // fix
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
    <Card
      title="Organize"
      extra={<Button type="link" icon={<EditOutlined />} onClick={setTrue} />}
    >
      <Descriptions column={1} bordered items={items} />
      <UpdateProductOrganizeDrawer
        open={value}
        data={{
          tag_ids: tags.map((tag) => tag.tag.id),
          type_id: type?.id,
          collection_id: collection?.id,
          category_id: category?.id,
        }}
        onClose={setFalse}
      />
    </Card>
  );
}
