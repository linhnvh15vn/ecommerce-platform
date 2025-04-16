import { Flex } from 'antd';

import { CategoryFilter, CategoryTable } from '@/modules/categories/components';

export default function CategoryList() {
  const categories = [
    {
      id: 'pcat_01JRT8JJ4D2C43FXCJWFTSH6Q6',
      name: 'Sweatshirts',
      category_children: [],
      handle: 'sweatshirts',
      is_internal: false,
      is_active: true,
    },
    {
      id: 'pcat_01JRT8JJ4DDSTH7PHN5WWSYBCV',
      name: 'Merch',
      category_children: [],
      handle: 'merch',
      is_internal: false,
      is_active: true,
    },
    {
      id: 'pcat_01JRT8JJ4DG6ZRBF1P706WEBJ0',
      name: 'Shirts',
      category_children: [],
      handle: 'shirts',
      is_internal: false,
      is_active: true,
    },
    {
      id: 'pcat_01JRT8JJ4DVNWF7T8ZMMBQFR97',
      name: 'Pants',
      category_children: [],
      handle: 'pants',
      is_internal: false,
      is_active: true,
    },
  ];

  return (
    <Flex vertical gap={16}>
      <CategoryFilter />
      <CategoryTable data={categories} />
    </Flex>
  );
}
