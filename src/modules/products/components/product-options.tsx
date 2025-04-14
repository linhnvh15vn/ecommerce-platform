import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Divider,
  Flex,
  Space,
  Tag,
} from 'antd';

type ProductOptionsProps = {
  options: any[];
};

export default function ProductOptions({ options }: ProductOptionsProps) {
  const items: DescriptionsProps['items'] = options.map((option) => ({
    label: option.title,
    children: (
      <Flex justify="space-between">
        <Space>
          {option.values.map((value) => (
            <Tag key={value.id}>{value.value}</Tag>
          ))}
        </Space>
        <Space split={<Divider type="vertical" />}>
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} />
        </Space>
      </Flex>
    ),
  }));

  return (
    <Card
      title="Options"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      }
    >
      <Descriptions column={1} bordered items={items} />
    </Card>
  );
}
