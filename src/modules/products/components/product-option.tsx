import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Descriptions,
  Divider,
  Flex,
  Space,
  Tag,
  type DescriptionsProps,
} from 'antd';

import { useDeleteProductOption } from '@/modules/products/api/use-delete-product-option';
import ProductOptionDrawer from '@/modules/products/components/product-option-drawer';
import type { ProductOption } from '@/modules/products/types/product-option.type';
import { useState } from 'react';
import { useParams } from 'react-router';

type ProductOptionProps = {
  options: ProductOption[];
};

export default function ProductOption({ options }: ProductOptionProps) {
  const params = useParams();
  const [selectedOption, setSelectedOption] = useState<ProductOption>();
  const [open, setOpen] = useState(false);
  const { mutate } = useDeleteProductOption();
  const items: DescriptionsProps['items'] = options.map((option) => ({
    label: option.title,
    children: (
      <Flex justify="space-between">
        <Space>
          {option.option_values.map((value) => (
            <Tag key={value.id}>{value.value}</Tag>
          ))}
        </Space>
        <Space split={<Divider type="vertical" />}>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedOption(option);
              handleOpen();
            }}
          />
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() =>
              mutate({ productId: params.id, optionId: option.id })
            }
          />
        </Space>
      </Flex>
    ),
  }));

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSelectedOption(undefined);
    setOpen(false);
  };

  return (
    <Card
      title="Options"
      extra={<Button onClick={() => setOpen(true)}>Create</Button>}
    >
      <Descriptions column={1} bordered items={items} />
      <ProductOptionDrawer
        open={open}
        data={selectedOption}
        onClose={handleClose}
      />
    </Card>
  );
}
