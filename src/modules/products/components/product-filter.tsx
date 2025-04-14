import { Button, Card, Col, Form, Input, Row, Space } from 'antd';

type ProductFilterProps = {
  // Add your component props here
};

export default function ProductFilter(props: ProductFilterProps) {
  const [form] = Form.useForm();

  return (
    <Card title="Search">
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="abc">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="def">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Space>
              <Button type="primary">Search</Button>
              <Button>Reset</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
