import { Col, Flex, Row } from 'antd';
import { useParams } from 'react-router';

import { useGetCategoryById } from '@/modules/categories/api/use-get-category-by-id';
import CategoryOrganize from '@/modules/categories/components/category-organize';
import CategoryOverview from '@/modules/categories/components/category-overview';
import ProductTable from '@/modules/products/components/product-table';

export default function CategoryDetail() {
  const params = useParams();
  const { data, isLoading } = useGetCategoryById(params.id!);

  if (isLoading) return;

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Flex vertical gap={16}>
          <CategoryOverview category={data!} />
          <ProductTable data={[]} />
        </Flex>
      </Col>
      <Col span={8}>
        <CategoryOrganize path={data?.mpath || ''} />
      </Col>
    </Row>
  );
}
