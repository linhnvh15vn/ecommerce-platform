import { Card } from 'antd';

type ProductTypeInfoProps = {
  value: string;
};

export default function ProductTypeInfo({ value }: ProductTypeInfoProps) {
  return <Card title={value} />;
}
