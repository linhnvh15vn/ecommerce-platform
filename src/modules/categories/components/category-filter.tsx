import { Card, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';

type CategoryFilterProps = {
  // Add your component props here
};

export default function CategoryFilter(props: CategoryFilterProps) {
  return (
    <Card title="Search">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Status">
              <Select
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'active' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
