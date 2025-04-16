import { Flex } from 'antd';

import TagFilter from '@/modules/tags/components/tag-filter';
import TagTable from '@/modules/tags/components/tag-table';

export default function TagList() {
  return (
    <Flex vertical gap={16}>
      <TagFilter />
      <TagTable data={[]} />
    </Flex>
  );
}
