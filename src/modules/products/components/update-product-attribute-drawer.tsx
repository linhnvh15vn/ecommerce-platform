import { useId } from 'react';

import { useUpdateProduct } from '@/modules/products/api/use-update-product';
import { Button, Drawer, Form, Input, InputNumber, Space } from 'antd';
import { useParams } from 'react-router';

type UpdateProductAttributeDrawerProps = {
  open: boolean;
  data: any;
  onClose: () => void;
};

export default function UpdateProductAttributeDrawer({
  open,
  data,
  onClose,
}: UpdateProductAttributeDrawerProps) {
  const [form] = Form.useForm();
  const params = useParams();
  const formId = useId();
  const { mutate } = useUpdateProduct();

  const handleFinish = (values) => {
    mutate({ id: params.id!, ...values });
    onClose();
  };

  return (
    <Drawer
      open={open}
      title="Edit Attributes"
      size="large"
      styles={{
        footer: { textAlign: 'end' },
      }}
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
        initialValues={data}
        onFinish={handleFinish}
      >
        <Form.Item name="weight" label="Weight">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="length" label="Length">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="height" label="Height">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="width" label="Width">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="material" label="Material">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
