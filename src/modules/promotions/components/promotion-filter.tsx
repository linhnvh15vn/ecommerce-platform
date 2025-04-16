import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';

type PromotionFilterProps = {
  // Add your component props here
};

export default function PromotionFilter(props: PromotionFilterProps) {
  const [form] = Form.useForm();

  return (
    <Card title="Search">
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <FormItem label="Code">
              <Input />
            </FormItem>
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
