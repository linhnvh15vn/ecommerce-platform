import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  Tabs,
  Typography,
  Upload,
  type TabsProps,
} from 'antd';

type CreateProductModalProps = {
  open: boolean;
  onCancel: () => void;
};

export default function CreateProductModal({
  open,
  onCancel,
}: CreateProductModalProps) {
  const items: TabsProps['items'] = [
    {
      key: 'details',
      label: 'Details',
      children: <ProductDetailsForm />,
    },
    {
      key: 'organize',
      label: 'Organize',
    },
    {
      key: 'variants',
      label: 'Variants',
    },
  ];

  return (
    <Modal open={open} onCancel={onCancel} width={840}>
      <Tabs items={items} />
    </Modal>
  );
}

const ProductDetailsForm = () => {
  let addFunc;

  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Col>
        <Col span={24}>
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
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={24}>
          <Form.Item label="Variants">
            <Card>
              <Space align="baseline" size="large">
                <Switch size="small" />
                <Space direction="vertical">
                  <Typography.Text strong>
                    Yes, this is a product with variants
                  </Typography.Text>
                  <Typography.Text type="secondary">
                    When unchecked, we will create a default variant for you
                  </Typography.Text>
                </Space>
              </Space>
            </Card>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Card
            title="Product options"
            extra={
              <Button
                type="dashed"
                onClick={() => addFunc?.()}
                icon={<PlusOutlined />}
              >
                Add
              </Button>
            }
          >
            <Form.List name="options">
              {(fields, { add, remove }) => {
                addFunc = add;

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
                  </>
                );
              }}
            </Form.List>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
