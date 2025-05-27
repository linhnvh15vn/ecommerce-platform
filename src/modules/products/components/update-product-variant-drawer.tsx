import {
  Divider,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from 'antd';

import { useCreateProductVariant } from '../api/use-create-product-variant';

import type { ProductOption } from '../types/product-option.type';

type UpdateProductVariantDrawerProps = {
  open: boolean;
  data: any;
  options: ProductOption[];
  onClose: () => void;
};

export default function UpdateProductVariantDrawer({
  open,
  data,
  options,
  onClose,
}: UpdateProductVariantDrawerProps) {
  const [form] = Form.useForm();
  const { mutate: create } = useCreateProductVariant();

  const handleFinish = (values) => {
    if (data) {
      //
    } else {
      create(values);
    }
  };

  return (
    <Drawer open={open} size="large" onClose={onClose}>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="sku" label="SKU">
          <Input />
        </Form.Item>
        {options.map((option) => (
          <Form.Item
            key={option.id}
            name={option.title.toLowerCase()}
            label={option.title}
          >
            <Select
              options={option.option_values.map(({ id, value }) => ({
                label: value,
                value: id,
              }))}
            />
          </Form.Item>
        ))}
        <Form.Item name="barcode" label="Barcode">
          <Input />
        </Form.Item>
        <Form.Item name="inventory" label="Inventory">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
