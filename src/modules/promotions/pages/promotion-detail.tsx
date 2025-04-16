import { Col, Row } from 'antd';

import PromotionInfo from '@/modules/promotions/components/promotion-info';

export default function PromotionDetail() {
  const promotion = {
    id: 'promo_01JRYSDJC97R7MQD9DRY5ZAJ3K',
    code: 'SUMMER15',
    is_automatic: false,
    type: 'standard',
    status: 'active',
    created_at: '2025-04-16T07:53:34.347Z',
    updated_at: '2025-04-16T07:53:34.347Z',
    deleted_at: null,
    campaign_id: null,
    application_method: {
      id: 'proappmet_01JRYSDJCAQ3HDMTFRYY1AX983',
      currency_code: 'eur',
      max_quantity: 1,
      apply_to_quantity: null,
      buy_rules_min_quantity: null,
      type: 'fixed',
      target_type: 'items',
      allocation: 'each',
      raw_value: {
        value: '15',
        precision: 20,
      },
      created_at: '2025-04-16T07:53:34.347Z',
      updated_at: '2025-04-16T07:53:34.347Z',
      deleted_at: null,
      promotion_id: 'promo_01JRYSDJC97R7MQD9DRY5ZAJ3K',
      target_rules: [],
      buy_rules: [],
      value: 15,
    },
    rules: [],
    campaign: null,
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        <PromotionInfo
          code={promotion.code}
          type={promotion.type}
          value={promotion.application_method.value}
        />
      </Col>
    </Row>
  );
}
