import { Layout, Menu, type MenuProps } from 'antd';

import { protectedRoutes } from '@/routes';
import { useGlobalStore } from '@/stores/use-global-store';
import { Link } from 'react-router';

export default function Sider() {
  const collapsed = useGlobalStore((state) => state.collapsed);
  const items: MenuProps['items'] = protectedRoutes.map((route) => ({
    key: route.path,
    label: <Link to={route.path}>{route.label}</Link>,
    icon: route.icon,
  }));

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Layout.Sider>
  );
}
