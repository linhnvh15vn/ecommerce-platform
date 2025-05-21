import { Col, Flex, Row } from 'antd';
import { useParams } from 'react-router';

import { useGetProductById } from '@/modules/products/api/use-get-product-by-id';
import { useGetProductOptions } from '@/modules/products/api/use-get-product-options';
import { useGetProductVariants } from '@/modules/products/api/use-get-product-variants';
import ProductAttribute from '@/modules/products/components/product-attribute';
import ProductMedia from '@/modules/products/components/product-media';
import ProductOption from '@/modules/products/components/product-option';
import ProductOrganize from '@/modules/products/components/product-organize';
import ProductOverview from '@/modules/products/components/product-overview';
import ProductVariantTable from '@/modules/products/components/product-variant-table';

export default function ProductDetail() {
  const params = useParams();
  const { data: productData, isLoading: isProductLoading } = useGetProductById(
    params.id!,
  );
  const { data: variantData, isLoading: isVariantLoading } =
    useGetProductVariants(params.id!);
  const { data: optionData, isLoading: isOptionLoading } = useGetProductOptions(
    params.id!,
  );
  if (isProductLoading || isVariantLoading || isOptionLoading) return;

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Flex vertical gap={16}>
          <ProductOverview
            title={productData.title}
            description={productData.description}
            handle={productData.handle}
            status={productData.status}
          />
          <ProductMedia images={productData.images} />
          <ProductOption options={optionData?.items || []} />
          <ProductVariantTable
            variants={variantData?.items || []}
            options={optionData?.items || []}
          />
        </Flex>
      </Col>
      <Col span={8}>
        <Flex vertical gap={16}>
          <ProductOrganize
            tags={productData.product_tags}
            type={productData.type}
            collection={productData.collection}
            category={productData.category}
          />
          <ProductAttribute
            weight={productData.weight}
            length={productData.length}
            height={productData.height}
            width={productData.width}
            material={productData.material}
          />
        </Flex>
      </Col>
    </Row>
  );
}
