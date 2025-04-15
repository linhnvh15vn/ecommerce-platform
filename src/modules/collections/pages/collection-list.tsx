import { Flex } from 'antd';

import {
  CollectionFilter,
  CollectionTable,
} from '@/modules/collections/components';

export default function CollectionList() {
  const collections = [
    {
      id: 'pcol_01JRW33XVV48RY8BCG28PHA309',
      title: 'Thu Đông',
      handle: 'thu-đông',
      created_at: '2025-04-15T06:45:20.889Z',
      updated_at: '2025-04-15T06:45:20.889Z',
      metadata: null,
      products: [],
    },
  ];

  return (
    <Flex vertical gap={16}>
      <CollectionFilter />
      <CollectionTable data={collections} />
    </Flex>
  );
}
