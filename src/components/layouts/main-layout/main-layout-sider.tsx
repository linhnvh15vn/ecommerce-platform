import { protectedRoutes } from '@/routes';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router';

type MainLayoutSiderProps = {
  collapsed: boolean;
};

export default function MainLayoutSider({ collapsed }: MainLayoutSiderProps) {
  const location = useLocation();

  const items = protectedRoutes.map((route) => ({
    key: route.path,
    label: <Link to={route.path}>{route.label}</Link>,
  }));

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={items}
      />
    </Layout.Sider>
  );
}
