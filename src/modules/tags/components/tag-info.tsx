import { Card } from 'antd';

type TagInfoProps = {
  value: string;
};

export default function TagInfo({ value }: TagInfoProps) {
  return <Card title={`#${value}`} />;
}
