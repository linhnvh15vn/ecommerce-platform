import { Flex } from 'antd';

import PromotionFilter from '@/modules/promotions/components/promotion-filter';
import PromotionTable from '@/modules/promotions/components/promotion-table';

export default function PromotionList() {
  const promotions = [
    {
      id: 'promo_01JRYSDJC97R7MQD9DRY5ZAJ3K',
      code: 'SUMMER15',
      status: 'active',
    },
  ];

  return (
    <Flex vertical gap={16}>
      <PromotionFilter />
      <PromotionTable data={promotions} />
    </Flex>
  );
}
