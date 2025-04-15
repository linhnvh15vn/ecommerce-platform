import { Card, Col, Form, Input, Row, Select } from 'antd';

type CollectionFilterProps = {
  // Add your component props here
};

export default function CollectionFilter(props: CollectionFilterProps) {
  return (
    <Card title="Search">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Created">
              <Select
                options={[
                  { label: 'Today', value: 'today' },
                  { label: 'Last 7 days', value: 'today' },
                  { label: 'Last 30 days', value: 'today' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Updated">
              <Select
                options={[
                  { label: 'Today', value: 'today' },
                  { label: 'Last 7 days', value: 'today' },
                  { label: 'Last 30 days', value: 'today' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
