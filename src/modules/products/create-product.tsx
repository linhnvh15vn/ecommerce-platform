import { useState } from 'react';

import { CloseOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Affix,
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Upload,
} from 'antd';
import { debounce } from 'lodash';

import { useCreateProduct } from '@/modules/products/api/use-create-product';
import { generateVariants } from '@/modules/products/utils';

export default function CreateProduct() {
  const [variants, setVariants] = useState();
  const [form] = Form.useForm();
  let addFunc;
  const { mutate } = useCreateProduct();

  const handleFinish = (values) => {
    mutate({
      ...values,
      thumbnail: 'https://example.com',
    });
  };

  console.log(variants);

  const debouncedGenerate = debounce((options) => {
    const variants = generateVariants(options);
    setVariants(variants);
    form.setFieldsValue({ variants });
  }, 500); // đợi 500ms sau khi dừng nhập

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      onValuesChange={(changedValues, allValues) => {
        if ('options' in changedValues) {
          const options = allValues.options;
          if (options && Array.isArray(options)) {
            debouncedGenerate(options);
          }
        }
      }}
    >
      <Flex vertical gap={16}>
        <Card title="General">
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="thumbnail" label="Thumbnail">
            <Upload.Dragger multiple>
              <Space direction="vertical">
                <Space>
                  <UploadOutlined />
                  <Typography.Text strong>Upload images</Typography.Text>
                </Space>
                <Typography.Text type="secondary">
                  Drag and drop images here or click to upload.
                </Typography.Text>
              </Space>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item name="images" label="Media">
            <Upload.Dragger multiple>
              <Space direction="vertical">
                <Space>
                  <UploadOutlined />
                  <Typography.Text strong>Upload images</Typography.Text>
                </Space>
                <Typography.Text type="secondary">
                  Drag and drop images here or click to upload.
                </Typography.Text>
              </Space>
            </Upload.Dragger>
          </Form.Item>
        </Card>

        <Card title="Options">
          <Form.List name="options">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Card
                      key={key}
                      size="small"
                      style={{
                        backgroundColor: '#fafafa',
                        marginTop: 16,
                      }}
                    >
                      <Flex justify="space-between" align="center" gap={8}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Form.Item
                            {...restField}
                            layout="horizontal"
                            name={[name, 'title']}
                            label="Title"
                            colon={false}
                            style={{ marginBottom: 0 }}
                            labelCol={{ span: 4 }}
                            labelAlign="left"
                            wrapperCol={{ span: 20 }}
                            rules={[
                              {
                                required: true,
                                message: 'Please enter a title',
                              },
                            ]}
                          >
                            <Input placeholder="Color" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            layout="horizontal"
                            name={[name, 'values']}
                            label="Values"
                            colon={false}
                            style={{ marginBottom: 0 }}
                            labelCol={{ span: 4 }}
                            labelAlign="left"
                            wrapperCol={{ span: 20 }}
                            rules={[
                              {
                                required: true,
                                message: 'Please enter values',
                              },
                            ]}
                          >
                            <Select
                              mode="tags"
                              tokenSeparators={[', ']}
                              placeholder="e.g. Red, Blue, Green"
                            />
                          </Form.Item>
                        </Space>
                        <Button
                          type="text"
                          icon={<CloseOutlined />}
                          onClick={() => remove(name)}
                        />
                      </Flex>
                    </Card>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              );
            }}
          </Form.List>
        </Card>
        <Card title="Variants">
          <Form.List name="variants">
            {() => {
              const columns = [
                {
                  title: 'Default option',
                  dataIndex: 'combinations',
                  render: (_, __, index) => (
                    <Form.Item name={[index, 'combinations']} noStyle>
                      <Input disabled value={_.join(' / ')} />
                    </Form.Item>
                  ),
                },
                {
                  title: 'Title',
                  dataIndex: 'title',
                  render: (_, __, index) => (
                    <Form.Item name={[index, 'title']} noStyle>
                      <Input />
                    </Form.Item>
                  ),
                },
                {
                  title: 'SKU',
                  render: (_, __, index) => (
                    <Form.Item name={[index, 'sku']} noStyle>
                      <Input />
                    </Form.Item>
                  ),
                },
                {
                  title: 'Stock',
                  render: (_, __, index) => (
                    <Form.Item name={[index, 'stock']} noStyle>
                      <InputNumber min={0} style={{ width: '100%' }} />
                    </Form.Item>
                  ),
                },
                {
                  title: 'Price',
                  render: (_, __, index) => (
                    <Form.Item name={[index, 'price']} noStyle>
                      <InputNumber min={0} style={{ width: '100%' }} />
                    </Form.Item>
                  ),
                },
                {
                  title: 'Sale Price',
                  render: (_, __, index) => (
                    <Form.Item name={[index, 'sale_price']} noStyle>
                      <InputNumber min={0} style={{ width: '100%' }} />
                    </Form.Item>
                  ),
                },
              ];

              return (
                <Table
                  bordered
                  dataSource={variants}
                  columns={columns}
                  pagination={false}
                />
              );
            }}
          </Form.List>
        </Card>
      </Flex>
    </Form>
  );
}
