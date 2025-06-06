import { DashboardOutlined, ProductOutlined } from '@ant-design/icons';

import CategoryDetail from '@/modules/categories/category-detail';
import CategoryList from '@/modules/categories/category-list';
import ProductTypeModule from '@/modules/product-types';
import CreateProduct from '@/modules/products/create-product';
import ProductDetail from '@/modules/products/product-detail';
import ProductList from '@/modules/products/product-list';
import TagModule from '@/modules/tags';

export const protectedRoutes = [
  {
    path: '/',
    label: 'Component 0',
    icon: <DashboardOutlined />,
    element: <div>COMPONENT 0</div>,
  },
  {
    path: '/orders',
    label: 'Component 1',
    icon: <DashboardOutlined />,
    element: <div>COMPONENT 1</div>,
  },
  {
    path: '/products',
    label: 'Products',
    icon: <ProductOutlined />,
    element: <ProductList />,
  },
  {
    path: '/products/create',
    element: <CreateProduct />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '/collections',
    label: 'Component 3',
    icon: <DashboardOutlined />,
    element: <div>COMPONENT 3</div>,
  },
  {
    path: '/categories',
    label: 'Categories',
    icon: <DashboardOutlined />,
    element: <CategoryList />,
  },
  {
    path: '/categories/:id',
    element: <CategoryDetail />,
  },
  {
    path: '/types',
    label: 'Product Types',
    icon: <DashboardOutlined />,
    element: <ProductTypeModule />,
  },
  {
    path: '/tags/*',
    label: 'Component 6',
    icon: <DashboardOutlined />,
    element: <TagModule />,
  },
  {
    path: '/customers',
    label: 'Component 7',
    icon: <DashboardOutlined />,
    element: <div>COMPONENT 7</div>,
  },
  {
    path: '/promotions',
    label: 'Component 8',
    icon: <DashboardOutlined />,
    element: <div>COMPONENT 8</div>,
  },
  {
    path: '/users',
    label: 'Component 9',
    icon: <DashboardOutlined />,
    element: <div>COMPONENT 9</div>,
  },
];
