import { Route, Routes } from 'react-router';

import ProductTypeDetail from './pages/product-type-detail';
import ProductTypeList from './pages/product-type-list';

export default function ProductTypeModule() {
  return (
    <Routes>
      <Route index element={<ProductTypeList />} />
      <Route path=":id" element={<ProductTypeDetail />} />
    </Routes>
  );
}
