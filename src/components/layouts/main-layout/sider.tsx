import { useEffect, useState } from 'react';

import { type MenuProps, Layout, Menu, theme } from 'antd';
import { Link, useLocation } from 'react-router';

import { protectedRoutes } from '@/routes';
import { useGlobalStore } from '@/stores/use-global-store';

export default function Sider() {
  const { pathname } = useLocation();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState('');
  const collapsed = useGlobalStore((state) => state.collapsed);
  const items: MenuProps['items'] = protectedRoutes.map((route) =>
    route.label
      ? {
          key: route.path,
          label: <Link to={route.path}>{route.label}</Link>,
          icon: route.icon,
        }
      : null
  );

  useEffect(() => {
    const paths = pathname.split('/').filter(Boolean);
    setCurrent(`/${paths[0]}`);
  }, [pathname]);

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        background: token.colorBgContainer,
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu mode="inline" selectedKeys={[current]} items={items} />
    </Layout.Sider>
  );
}
