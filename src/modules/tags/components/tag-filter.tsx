import { Button, Card, Col, Form, Input, Row, Space } from 'antd';

type TagFilterProps = {
  // Add your component props here
};

export default function TagFilter(props: TagFilterProps) {
  return (
    <Card title="Search">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Value">
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
