import { useMemo } from 'react';

import { Col, Flex, Row } from 'antd';
import { useParams } from 'react-router';

import {
  ProductAttributes,
  ProductInfo,
  ProductMedia,
  ProductOptions,
  ProductOrganize,
  ProductVariantsTable,
} from '@/modules/products/components';

export default function ProductDetail() {
  const params = useParams();
  const product = {
    id: 'prod_01JRT8JJ4R37CAG0W336B3SE8X',
    title: 'Medusa Shorts',
    status: 'published',
    description:
      'Reimagine the feeling of classic shorts. With our cotton shorts, everyday essentials no longer have to be ordinary.',
    handle: 'shorts',
    thumbnail:
      'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png',
    collection_id: null,
    type_id: null,
    weight: '400',
    length: null,
    height: null,
    width: null,
    hs_code: null,
    origin_country: null,
    mid_code: null,
    material: null,
    created_at: '2025-04-14T13:42:14.430Z',
    updated_at: '2025-04-14T13:42:14.430Z',
    deleted_at: null,
    metadata: null,
    type: undefined,
    collection: undefined,
    options: [
      {
        id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
        title: 'Size',
        metadata: null,
        product_id: 'prod_01JRT8JJ4R37CAG0W336B3SE8X',
        created_at: '2025-04-14T13:42:14.430Z',
        updated_at: '2025-04-14T13:42:14.430Z',
        deleted_at: null,
        values: [
          {
            id: 'optval_01JRT8JJ4XJ39YXNKC30VJ082P',
            value: 'L',
            metadata: null,
            option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
            created_at: '2025-04-14T13:42:14.430Z',
            updated_at: '2025-04-14T13:42:14.430Z',
            deleted_at: null,
          },
          {
            id: 'optval_01JRT8JJ4XWAS19JM7PDH796G4',
            value: 'M',
            metadata: null,
            option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
            created_at: '2025-04-14T13:42:14.430Z',
            updated_at: '2025-04-14T13:42:14.430Z',
            deleted_at: null,
          },
          {
            id: 'optval_01JRT8JJ4WBZ16N05T81EWE0KP',
            value: 'S',
            metadata: null,
            option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
            created_at: '2025-04-14T13:42:14.430Z',
            updated_at: '2025-04-14T13:42:14.430Z',
            deleted_at: null,
          },
          {
            id: 'optval_01JRT8JJ4XHHAR5W2KNVT27ATG',
            value: 'XL',
            metadata: null,
            option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
            created_at: '2025-04-14T13:42:14.430Z',
            updated_at: '2025-04-14T13:42:14.430Z',
            deleted_at: null,
          },
        ],
      },
    ],
    tags: [],
    images: [
      {
        id: 'img_01JRT8JJ4X78ZZQ3PVXT85BR21',
        url: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png',
        metadata: null,
        rank: 0,
        product_id: 'prod_01JRT8JJ4R37CAG0W336B3SE8X',
        created_at: '2025-04-14T13:42:14.430Z',
        updated_at: '2025-04-14T13:42:14.430Z',
        deleted_at: null,
      },
      {
        id: 'img_01JRT8JJ4XX4X6MF0MBDZTSTWG',
        url: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-back.png',
        metadata: null,
        rank: 1,
        product_id: 'prod_01JRT8JJ4R37CAG0W336B3SE8X',
        created_at: '2025-04-14T13:42:14.430Z',
        updated_at: '2025-04-14T13:42:14.430Z',
        deleted_at: null,
      },
    ],
    categories: [
      {
        id: 'pcat_01JRT8JJ4DDSTH7PHN5WWSYBCV',
        name: 'Merch',
        description: '',
        handle: 'merch',
        mpath: 'pcat_01JRT8JJ4DDSTH7PHN5WWSYBCV',
        is_active: true,
        is_internal: false,
        rank: 3,
        metadata: null,
        parent_category_id: null,
        parent_category: null,
        created_at: '2025-04-14T13:42:14.414Z',
        updated_at: '2025-04-14T13:42:14.414Z',
        deleted_at: null,
      },
    ],
  };
  const variants = [
    {
      title: 'S',
      sku: 'SHORTS-S',
      created_at: '2025-04-14T13:42:14.475Z',
      updated_at: '2025-04-14T13:42:14.475Z',
      manage_inventory: true,
      id: 'variant_01JRT8JJ6AB6F0VM5DG5J2C058',
      options: [
        {
          id: 'optval_01JRT8JJ4WBZ16N05T81EWE0KP',
          value: 'S',
          metadata: null,
          option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          option: {
            id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          },
          created_at: '2025-04-14T13:42:14.430Z',
          updated_at: '2025-04-14T13:42:14.430Z',
          deleted_at: null,
        },
      ],
      inventory_quantity: 1000000,
    },
    {
      title: 'M',
      sku: 'SHORTS-M',
      created_at: '2025-04-14T13:42:14.475Z',
      updated_at: '2025-04-14T13:42:14.475Z',
      manage_inventory: true,
      id: 'variant_01JRT8JJ6A0WARE3NX25T958JM',
      options: [
        {
          id: 'optval_01JRT8JJ4XWAS19JM7PDH796G4',
          value: 'M',
          metadata: null,
          option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          option: {
            id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          },
          created_at: '2025-04-14T13:42:14.430Z',
          updated_at: '2025-04-14T13:42:14.430Z',
          deleted_at: null,
        },
      ],
      inventory_quantity: 1000000,
    },
    {
      title: 'L',
      sku: 'SHORTS-L',
      created_at: '2025-04-14T13:42:14.475Z',
      updated_at: '2025-04-14T13:42:14.475Z',
      manage_inventory: true,
      id: 'variant_01JRT8JJ6AD3Y66GTJFF4MSZGA',
      options: [
        {
          id: 'optval_01JRT8JJ4XJ39YXNKC30VJ082P',
          value: 'L',
          metadata: null,
          option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          option: {
            id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          },
          created_at: '2025-04-14T13:42:14.430Z',
          updated_at: '2025-04-14T13:42:14.430Z',
          deleted_at: null,
        },
      ],
      inventory_quantity: 1000000,
    },
    {
      title: 'XL',
      sku: 'SHORTS-XL',
      created_at: '2025-04-14T13:42:14.475Z',
      updated_at: '2025-04-14T13:42:14.475Z',
      manage_inventory: true,
      id: 'variant_01JRT8JJ6A3BBEETHHVED7PMGH',
      options: [
        {
          id: 'optval_01JRT8JJ4XHHAR5W2KNVT27ATG',
          value: 'XL',
          metadata: null,
          option_id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          option: {
            id: 'opt_01JRT8JJ4X0FN5SEE8M4A2JGSS',
          },
          created_at: '2025-04-14T13:42:14.430Z',
          updated_at: '2025-04-14T13:42:14.430Z',
          deleted_at: null,
        },
      ],
      inventory_quantity: 1000000,
    },
  ];

  const externalColumns = useMemo(() => {
    if (!product?.options) return [];
    return product.options.map((option) => ({
      title: option.title,
      render: (_, record) => {
        const optionValue = record.options?.find(
          (ov) => ov.option_id === option.id,
        );

        return optionValue?.value || '-';
      },
    }));
  }, [product]);

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Flex vertical gap={8}>
          <ProductInfo
            title={product.title}
            description={product.description}
            handle={product.handle}
            status={product.status}
          />
          <ProductMedia images={product.images} />
          <ProductOptions options={product.options} />
          <ProductVariantsTable
            data={variants}
            externalColumns={externalColumns}
          />
        </Flex>
      </Col>
      <Col span={8}>
        <Flex vertical gap={8}>
          <ProductOrganize
            tags={product.tags}
            type={product.type}
            collection={product.collection}
            category={product.categories[0].name}
          />
          <ProductAttributes
            height={product.height}
            width={product.width}
            length={product.length}
            weight={product.weight}
            material={product.material}
          />
        </Flex>
      </Col>
    </Row>
  );
}
