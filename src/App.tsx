import { BrowserRouter, Route, Routes } from 'react-router';

import MainLayout from '@/components/layouts/main-layout';
import { AuthContextProvider } from '@/contexts/auth.context';
import { protectedRoutes } from '@/routes';

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {protectedRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
