import { Flex } from 'antd';

import { ProductFilter, ProductTable } from '@/modules/products/components';

export default function ProductList() {
  const data = [
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
      collection: null,
      category: null,
      type: null,
    },
    {
      id: 'prod_01JRT8JJ4RFMDH3JCQ44B6MGF3',
      title: 'Medusa T-Shirt',
      handle: 't-shirt',
      status: 'published',
      thumbnail:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png',
      variants: [
        {
          id: 'variant_01JRT8JJ68VGAFZAFAAFFXSV7H',
        },
        {
          id: 'variant_01JRT8JJ6815T62YV99P4XSGMZ',
        },
        {
          id: 'variant_01JRT8JJ68QFZSWYBH3DDGKB7V',
        },
        {
          id: 'variant_01JRT8JJ68C3BWZR7JMBEW6SFD',
        },
        {
          id: 'variant_01JRT8JJ69AM5NBM3HGPF2NJ4N',
        },
        {
          id: 'variant_01JRT8JJ695PWH10GH6K7RWSE8',
        },
        {
          id: 'variant_01JRT8JJ69ZPAW37JT9H1THCHV',
        },
        {
          id: 'variant_01JRT8JJ69F2TJ9230NNRJRTJK',
        },
      ],
      collection: null,
      category: null,
      type: null,
    },
    {
      id: 'prod_01JRT8JJ4RNMCTTN761394G2V8',
      title: 'Medusa Sweatshirt',
      handle: 'sweatshirt',
      status: 'published',
      thumbnail:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png',
      variants: [
        {
          id: 'variant_01JRT8JJ69823ER6GEMH4F8JE0',
        },
        {
          id: 'variant_01JRT8JJ69DW5NHFMMDZMD6BRJ',
        },
        {
          id: 'variant_01JRT8JJ691RAA7VWAY7JP1CHJ',
        },
        {
          id: 'variant_01JRT8JJ6AXVKP76RK58SM5GBC',
        },
      ],
      collection: null,
      category: null,
      type: null,
    },
    {
      id: 'prod_01JRT8JJ4RYXPY08F6861MCB3C',
      title: 'Medusa Sweatpants',
      handle: 'sweatpants',
      status: 'published',
      thumbnail:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png',
      variants: [
        {
          id: 'variant_01JRT8JJ6A7VYD39CEFQYG4DEG',
        },
        {
          id: 'variant_01JRT8JJ6AZRB5X08GDASXPX6F',
        },
        {
          id: 'variant_01JRT8JJ6AARREFSHP9M358TYB',
        },
        {
          id: 'variant_01JRT8JJ6AS3F8DFEAK1K7MNGP',
        },
      ],
      collection: null,
      category: null,
      type: null,
    },
  ];

  return (
    <Flex vertical gap={16}>
      <ProductFilter />
      <ProductTable data={data} />
    </Flex>
  );
}
