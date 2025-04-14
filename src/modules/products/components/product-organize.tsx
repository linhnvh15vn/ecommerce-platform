import { EditOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Space,
  Tag,
} from 'antd';

type ProductOrganizeProps = {
  tags: any[] | undefined;
  type: string | undefined;
  collection: string | undefined;
  category: string | undefined;
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
      children: tags?.length ? (
        <Space>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </Space>
      ) : (
        '-'
      ),
    },
    {
      label: 'Type',
      children: type ? <Tag>{type}</Tag> : '-',
    },
    {
      label: 'Collection',
      children: collection ? <Tag>{collection}</Tag> : '-',
    },
    {
      label: 'Category',
      children: category ? <Tag>{category}</Tag> : '-',
    },
  ];

  return (
    <Card
      title="Organize"
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
