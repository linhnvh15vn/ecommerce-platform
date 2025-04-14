import { Button, Layout, theme } from 'antd';

import Breadcrumb from '@/components/breadcrumb';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

type MainLayoutHeaderProps = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

export default function MainLayoutHeader({
  collapsed,
  toggleCollapsed,
}: MainLayoutHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        padding: 0,
        background: colorBgContainer,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
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
