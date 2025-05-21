import { useId } from 'react';

import { Button, Drawer, Form, Select, Space } from 'antd';
import { useParams } from 'react-router';

import { useUpdateProduct } from '@/modules/products/api/use-update-product';

type UpdateProductOrganizeDrawerProps = {
  open: boolean;
  data: any;
  onClose: () => void;
};

export default function UpdateProductOrganizeDrawer({
  open,
  data,
  onClose,
}: UpdateProductOrganizeDrawerProps) {
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
      title="Edit Organization"
      size="large"
      onClose={onClose}
      styles={{ footer: { textAlign: 'end' } }}
      footer={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" htmlType="submit" form={formId}>
            Save
          </Button>
        </Space>
      }
    >
      <Form
        id={formId}
        form={form}
        layout="vertical"
        initialValues={data}
        onFinish={handleFinish}
      >
        <Form.Item name="tags" label="Tags">
          <Select
            mode="multiple"
            placeholder="Select tags"
            options={tagOptions}
          />
        </Form.Item>

        <Form.Item name="type" label="Type">
          <Select placeholder="Select type" options={typeOptions} />
        </Form.Item>

        <Form.Item name="collection" label="Collection">
          <Select placeholder="Select collection" options={collectionOptions} />
        </Form.Item>

        <Form.Item name="category" label="Category">
          <Select placeholder="Select category" options={categoryOptions} />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
