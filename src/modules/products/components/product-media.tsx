import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Image, Space } from 'antd';

type ProductMediaProps = {
  images: any[];
};

export default function ProductMedia({ images }: ProductMediaProps) {
  return (
    <Card
      title="Media"
      extra={
        <Button type="primary" icon={<EditOutlined />}>
          Edit
        </Button>
      }
    >
      <Space>
        {images.map((image) => (
          <Image key={image.id} src={image.url} alt={image.id} height={98} />
        ))}
      </Space>
    </Card>
  );
}
