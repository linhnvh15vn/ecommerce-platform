import { Layout, Menu, MenuProps, theme } from 'antd';
import { Link, useLocation } from 'react-router';

import { protectedRoutes } from '@/routes';

type MainLayoutSiderProps = {
  collapsed: boolean;
};

export default function MainLayoutSider({ collapsed }: MainLayoutSiderProps) {
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps['items'] = protectedRoutes.map((route) =>
    route.label
      ? {
          key: route.path,
          icon: route.icon,
          label: <Link to={route.path}>{route.label}</Link>,
        }
      : null,
  );

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        top: 0,
        bottom: 0,
        background: colorBgContainer,
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={items}
      />
    </Layout.Sider>
  );
}
