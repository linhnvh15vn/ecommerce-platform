import { useId } from 'react';

import { useQueries } from '@tanstack/react-query';
import { Button, Drawer, Form, Select, Space } from 'antd';
import { useParams } from 'react-router';

import { getCategories } from '@/modules/categories/api/use-get-categories';
import { getCollections } from '@/modules/collections/api/use-get-collections';
import { getProductTypes } from '@/modules/product-types/api/use-get-product-types';
import { useUpdateProduct } from '@/modules/products/api/use-update-product';
import { getTags } from '@/modules/tags/api/use-get-tags';

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

  const [tagOtps, typeOtps, collectionOtps, categoryOtps] = useQueries({
    queries: [
      {
        queryKey: ['tag_options'],
        queryFn: () => getTags({ itemsPerPage: 10000 }),
      },
      {
        queryKey: ['type_options'],
        queryFn: () => getProductTypes({ itemsPerPage: 10000 }),
      },
      {
        queryKey: ['collection_options'],
        queryFn: () => getCollections({ itemsPerPage: 10000 }),
      },
      {
        queryKey: ['category_options'],
        queryFn: () => getCategories({ itemsPerPage: 10000 }),
      },
    ],
  });

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
        <Form.Item name="tag_ids" label="Tags">
          <Select
            mode="multiple"
            placeholder="Select tags"
            options={tagOtps.data?.items.map((item) => ({
              label: item.value,
              value: item.id,
            }))}
          />
        </Form.Item>

        <Form.Item name="type_id" label="Type">
          <Select
            placeholder="Select type"
            options={typeOtps.data?.items.map((item) => ({
              label: item.value,
              value: item.id,
            }))}
          />
        </Form.Item>

        <Form.Item name="collection_id" label="Collection">
          <Select
            placeholder="Select collection"
            options={collectionOtps.data?.items.map((item) => ({
              label: item.title,
              value: item.id,
            }))}
          />
        </Form.Item>

        <Form.Item name="category_id" label="Category">
          <Select
            placeholder="Select category"
            options={categoryOtps.data?.data.items.map((item) => ({
              label: item.title,
              value: item.id,
            }))}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
