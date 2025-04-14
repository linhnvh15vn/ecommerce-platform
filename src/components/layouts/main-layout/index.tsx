import { useState } from 'react';

import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router';

import MainLayoutHeader from '@/components/layouts/main-layout/main-layout-header';
import MainLayoutSider from '@/components/layouts/main-layout/main-layout-sider';
import { useAuth } from '@/contexts/auth.context';

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainLayoutSider collapsed={collapsed} />
      <Layout>
        <MainLayoutHeader
          collapsed={collapsed}
          toggleCollapsed={() => setCollapsed(!collapsed)}
        />
        <Layout.Content
          style={{
            margin: '24px 16px',
            minHeight: 280,
          }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
