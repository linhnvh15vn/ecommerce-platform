import { Route, Routes } from 'react-router';

import AuthLayout from '@/components/layouts/auth-layout';
import MainLayout from '@/components/layouts/main-layout';
import { protectedRoutes } from '@/routes';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<AuthLayout />}></Route>
    </Routes>
  );
}
