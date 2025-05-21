import { useUpdateProduct } from '@/modules/products/api/use-update-product';
import { Button, Drawer, Form, Input, Select, Space } from 'antd';
import { useId } from 'react';
import { useParams } from 'react-router';

type UpdateProductOverviewProps = {
  open: boolean;
  data?: any;
  onClose: () => void;
};

export default function UpdateProductOverview({
  open,
  data,
  onClose,
}: UpdateProductOverviewProps) {
  const [form] = Form.useForm();
  const params = useParams<{ id: string }>();
  const formId = useId();

  const { mutate } = useUpdateProduct();

  const handleFinish = (values) => {
    mutate({ ...values, id: params.id! });
    onClose();
  };

  return (
    <Drawer
      open={open}
      title="Update Product"
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
        initialValues={data}
      >
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Select
            options={[
              { label: 'Draft', value: 'Draft' },
              { label: 'Published', value: 'Published' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Handle"
          name="handle"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input disabled addonBefore="/" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
