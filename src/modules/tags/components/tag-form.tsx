import { Form, Input, Modal } from 'antd';
import { useParams } from 'react-router';

import { useCreateTag } from '../api/use-create-tag';
import { useUpdateTag } from '../api/use-update-tag';

import type { CreateTagBody, Tag } from '../tag.types';

type TagFormProps = {
  open: boolean;
  data?: Tag;
  onCancel: () => void;
};

export default function TagForm({ open, data, onCancel }: TagFormProps) {
  const [form] = Form.useForm();
  const { mutate: createTag } = useCreateTag();
  const { mutate: updateTag } = useUpdateTag();

  const handleFinish = (values: CreateTagBody) => {
    if (data) {
      updateTag({ id: data.id, ...values });
    } else {
      createTag(values);
    }
    onCancel();
  };

  return (
    <Modal
      title="Create tag | Edit tag"
      open={open}
      destroyOnHidden
      onCancel={onCancel}
      onOk={form.submit}
    >
      <Form
        form={form}
        layout="vertical"
        preserve={false}
        initialValues={data}
        onFinish={handleFinish}
      >
        <Form.Item name="value" label="Value">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
