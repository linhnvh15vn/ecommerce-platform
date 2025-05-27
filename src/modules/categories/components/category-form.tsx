import { Form, Input, Modal, Select } from 'antd';

import { useCreateCategory } from '@/modules/categories/api/use-create-category';

import type { CreateCategory } from '@/modules/categories/types/create-category.type';

type CategoryFormProps = {
  open: boolean;
  onCancel: () => void;
};

export default function CategoryForm({ open, onCancel }: CategoryFormProps) {
  const [form] = Form.useForm();
  const { mutate } = useCreateCategory();

  const onFinish = (data: CreateCategory) => {
    mutate(data);
    onCancel();
  };

  return (
    <Modal title="Category" open={open} onCancel={onCancel} onOk={form.submit}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item name="parent_category_id" label="Parent Category">
          <Select />
        </Form.Item>
      </Form>
    </Modal>
  );
}
