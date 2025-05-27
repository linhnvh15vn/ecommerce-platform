import { useState } from 'react';

import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  type TabsProps,
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
  Steps,
  Switch,
  Tabs,
  Typography,
  Upload,
} from 'antd';

type CreateProductModalProps = {
  open: boolean;
  onCancel: () => void;
};

const { Step } = Steps;

export default function CreateProductModal({
  open,
  onCancel,
}: CreateProductModalProps) {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: 'First Name',
      content: <Form1 />,
    },
    {
      title: 'Last Name',
      content: <Form2 />,
    },
    {
      title: 'Email',
      content: <Form3 />,
    },
  ];
  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch(() => {});
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values: any) => {
    console.log('Final values:', values);
    // message.success('Form submitted successfully!');
  };

  return (
    <Modal open={open} onCancel={onCancel} width={840}>
      <div style={{ maxWidth: 400, margin: '0 auto' }}>
        <Steps current={current} style={{ marginBottom: 24 }}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <Form form={form} onFinish={onFinish} layout="vertical">
          {steps[current].content}

          <div style={{ marginTop: 24 }}>
            {current > 0 && (
              <Button style={{ marginRight: 8 }} onClick={prev}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Modal>
  );
}

const Form1 = () => {
  return (
    <Form.Item
      name="firstName"
      label="First Name"
      rules={[{ required: true, message: 'Please input your first name!' }]}
    >
      <Input placeholder="Enter first name" />
    </Form.Item>
  );
};

const Form2 = () => {
  return (
    <Form.Item
      name="lastName"
      label="Last Name"
      rules={[{ required: true, message: 'Please input your last name!' }]}
    >
      <Input placeholder="Enter last name" />
    </Form.Item>
  );
};

const Form3 = () => {
  return (
    <Form.Item
      name="email"
      label="Email"
      rules={[
        { required: true, message: 'Please input your email!' },
        { type: 'email', message: 'The input is not a valid email!' },
      ]}
    >
      <Input placeholder="Enter email" />
    </Form.Item>
  );
};
