import { Col, Flex, Row } from 'antd';

import {
  CategoryInfo,
  CategoryOrganize,
} from '@/modules/categories/components';
import { ProductTable } from '@/modules/products';

export default function CategoryDetail() {
  const category = {
    id: 'pcat_01JRT8JJ4D2C43FXCJWFTSH6Q6',
    name: 'Sweatshirts',
    description: '',
    handle: 'sweatshirts',
    is_active: true,
    is_internal: false,
    rank: 1,
    parent_category_id: null,
    created_at: '2025-04-14T13:42:14.414Z',
    updated_at: '2025-04-14T13:42:14.414Z',
    metadata: null,
    parent_category: null,
    category_children: [],
  };

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Flex vertical gap={8}>
          <CategoryInfo
            title={category.name}
            description={category.description}
            handle={category.handle}
          />
          <ProductTable data={[]} />
        </Flex>
      </Col>
      <Col span={8}>
        <CategoryOrganize
          path={category.name}
          children={category.category_children}
        />
      </Col>
    </Row>
  );
}
