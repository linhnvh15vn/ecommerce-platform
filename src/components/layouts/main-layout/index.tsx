import { Layout } from 'antd';
import { Outlet } from 'react-router';

import Header from '@/components/layouts/main-layout/header';
import Sider from '@/components/layouts/main-layout/sider';

export default function MainLayout() {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Layout.Content
          style={{
            padding: '24px 48px',
            minHeight: 280,
          }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
