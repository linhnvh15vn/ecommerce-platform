import { Card, Image, Space } from 'antd';

type ProductMediaProps = {
  images: [];
};

export default function ProductMedia({ images }: ProductMediaProps) {
  return (
    <Card title="Media">
      <Space>
        {images.map((image) => (
          <Image key={image.id} src={image.url} alt={image.id} />
        ))}
      </Space>
    </Card>
  );
}
