import { CloseOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
  Tabs,
  type TabsProps,
} from 'antd';

export default function ProductCreate() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'General',
      children: <ProductGeneralForm />,
    },
    {
      key: '2',
      label: 'Organize',
      children: <ProductOrganizeForm />,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  console.log('a');

  return <Tabs defaultActiveKey="1" items={items} />;
}

function ProductGeneralForm() {
  return (
    <Card title="General">
      <Form layout="vertical">
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={5} />
        </Form.Item>
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
                      extra={
                        <Button
                          type="text"
                          icon={<CloseOutlined />}
                          onClick={() => remove(name)}
                        />
                      }
                    >
                      <Space direction="vertical" style={{ width: '50%' }}>
                        <Form.Item
                          {...restField}
                          layout="horizontal"
                          name={[name, 'title']}
                          label="Title"
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
      </Form>
    </Card>
  );
}

function ProductOrganizeForm() {
  return (
    <Card title="Organize">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="type_id" label="Type (Optional)">
              <Select />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="collection_id" label="Collection (Optional)">
              <Select />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="category_id" label="Category (Optional)">
              <Select />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="tags" label="Tags (Optional)">
              <Select />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
