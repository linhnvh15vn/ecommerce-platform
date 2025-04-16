import { Flex } from 'antd';

import ProductTypeInfo from '@/modules/product-types/components/product-type-info';
import { ProductTable } from '@/modules/products';

export default function ProductTypeDetail() {
  return (
    <Flex vertical gap={16}>
      <ProductTypeInfo value="Electric" />
      <ProductTable data={[]} />
    </Flex>
  );
}
