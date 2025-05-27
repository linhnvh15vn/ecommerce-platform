import { useEffect, useId } from 'react';

import { Button, Drawer, Form, Input, Select, Space } from 'antd';
import { useParams } from 'react-router';

import { useCreateProductOption } from '@/modules/products/api/use-create-product-option';
import { useUpdateProductOption } from '@/modules/products/api/use-update-product-option';

type ProductOptionDrawerProps = {
  open: boolean;
  data?: any;
  onClose: () => void;
};

export default function ProductOptionDrawer({
  open,
  data,
  onClose,
}: ProductOptionDrawerProps) {
  const [form] = Form.useForm();
  const params = useParams<{ id: string }>();
  const formId = useId();
  const { mutate: updateProductOption } = useUpdateProductOption();
  const { mutate: createProductOption } = useCreateProductOption();

  const handleFinish = (values) => {
    if (data) {
      updateProductOption({
        ...values,
        productId: params.id,
        optionId: data.id,
      });
    } else {
      createProductOption({
        ...values,
        productId: params.id,
      });
      console.log(values);
    }
    onClose();
  };

  return (
    <Drawer
      open={open}
      title={data ? 'Update Option' : 'Create Option'}
      size="large"
      styles={{
        footer: { textAlign: 'end' },
      }}
      destroyOnHidden
      footer={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" htmlType="submit" form={formId}>
            Save
          </Button>
        </Space>
      }
      onClose={onClose}
    >
      <Form
        id={formId}
        form={form}
        layout="vertical"
        preserve={false}
        onFinish={handleFinish}
        initialValues={{
          title: data?.title,
          values: data?.option_values.map((value) => value.value),
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input placeholder="e.g. Color, Size" />
        </Form.Item>
        <Form.Item
          label="Values (comma-separated)"
          name="values"
          rules={[
            { required: true, message: 'Please enter at least one value' },
          ]}
        >
          <Select
            mode="tags"
            tokenSeparators={[', ']}
            placeholder="e.g. Red, Blue, Green"
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
