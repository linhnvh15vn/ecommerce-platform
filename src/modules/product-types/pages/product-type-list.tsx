import { Flex } from 'antd';

import ProductTypeFilter from '@/modules/product-types/components/product-type-filter';
import ProductTypeTable from '@/modules/product-types/components/product-type-table';

export default function ProductTypeList() {
  return (
    <Flex vertical gap={16}>
      <ProductTypeFilter />
      <ProductTypeTable data={[]} />
    </Flex>
  );
}
