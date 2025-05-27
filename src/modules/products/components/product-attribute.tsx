import { useState } from 'react';

import { type DescriptionsProps, Button, Card, Descriptions } from 'antd';

import UpdateProductAttributeDrawer from '@/modules/products/components/update-product-attribute-drawer';

type ProductAttributeProps = {
  weight: number;
  length: number;
  height: number;
  width: number;
  material: string;
};

export default function ProductAttribute({
  weight,
  length,
  height,
  width,
  material,
}: ProductAttributeProps) {
  const [open, setOpen] = useState(false);
  const items: DescriptionsProps['items'] = [
    {
      label: 'Weight',
      children: weight ?? '-',
    },
    {
      label: 'Length',
      children: length ?? '-',
    },
    {
      label: 'Height',
      children: height ?? '-',
    },
    {
      label: 'Width',
      children: width ?? '-',
    },
    {
      label: 'Material',
      children: material ?? '-',
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card title="Attributes" extra={<Button onClick={handleOpen}>Edit</Button>}>
      <Descriptions column={1} bordered items={items} />
      <UpdateProductAttributeDrawer
        open={open}
        data={{
          weight,
          length,
          height,
          width,
          material,
        }}
        onClose={handleClose}
      />
    </Card>
  );
}
