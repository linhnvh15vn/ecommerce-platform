import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';

import Breadcrumb from '@/components/layouts/main-layout/breadcrumb';
import { useGlobalStore } from '@/stores/use-global-store';

export default function Header() {
  const { token } = theme.useToken();
  const collapsed = useGlobalStore((state) => state.collapsed);
  const setCollapsed = useGlobalStore((state) => state.setCollapsed);

  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        padding: 0,
        background: token.colorBgContainer,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={setCollapsed}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <Breadcrumb />
    </Layout.Header>
  );
}
