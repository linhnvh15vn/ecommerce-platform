import { Flex } from 'antd';

import { ProductTable } from '@/modules/products';
import TagInfo from '@/modules/tags/components/tag-info';

export default function TagDetail() {
  return (
    <Flex vertical gap={16}>
      <TagInfo value="new" />
      <ProductTable data={[]} />
    </Flex>
  );
}
