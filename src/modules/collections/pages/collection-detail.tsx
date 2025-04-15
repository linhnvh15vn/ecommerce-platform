import { Col, Row } from 'antd';

import { CollectionInfo } from '@/modules/collections/components';
import { ProductTable } from '@/modules/products';

export default function CollectionDetail() {
  const collection = {
    id: 'pcol_01JRW33XVV48RY8BCG28PHA309',
    title: 'Thu Đông',
    handle: 'thu-đông',
    created_at: '2025-04-15T06:45:20.889Z',
    updated_at: '2025-04-15T06:45:20.889Z',
    metadata: null,
  };

  const products = [
    {
      id: 'prod_01JRT8JJ4R37CAG0W336B3SE8X',
      title: 'Medusa Shorts',
      handle: 'shorts',
      status: 'published',
      thumbnail:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png',
      variants: [
        {
          id: 'variant_01JRT8JJ6AB6F0VM5DG5J2C058',
        },
        {
          id: 'variant_01JRT8JJ6A0WARE3NX25T958JM',
        },
        {
          id: 'variant_01JRT8JJ6AD3Y66GTJFF4MSZGA',
        },
        {
          id: 'variant_01JRT8JJ6A3BBEETHHVED7PMGH',
        },
      ],
      collection: {
        id: 'pcol_01JRW33XVV48RY8BCG28PHA309',
        title: 'Thu Đông',
        handle: 'thu-đông',
        metadata: null,
        created_at: '2025-04-15T06:45:20.889Z',
        updated_at: '2025-04-15T06:45:20.889Z',
        deleted_at: null,
      },
      sales_channels: [
        {
          id: 'sc_01JRT8JFMHWBZ0Q037BVSX64YF',
          name: 'Default Sales Channel',
          description: 'Created by Medusa',
          is_disabled: false,
          metadata: null,
          created_at: '2025-04-14T13:42:11.857Z',
          updated_at: '2025-04-14T13:42:11.857Z',
          deleted_at: null,
        },
      ],
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <CollectionInfo title={collection.title} handle={collection.handle} />
      </Col>
      <Col span={24}>
        <ProductTable data={products} />
      </Col>
    </Row>
  );
}
