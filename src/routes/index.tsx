import {
  DashboardOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';

const ProductList = lazy(() => import('@/modules/products/pages/product-list'));
const ProductDetail = lazy(
  () => import('@/modules/products/pages/product-detail'),
);

export const publicRoutes = [
  {
    path: '/',
    element: <div>DASHBOARD</div>,
  },
];

export const protectedRoutes = [
  {
    path: '/',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
    element: <div>DASHBOARD</div>,
  },
  {
    path: '/orders',
    label: 'Orders',
    icon: <ShoppingCartOutlined />,
    element: <div>ORDERS</div>,
  },
  {
    path: '/products',
    label: 'Products',
    icon: <ProductOutlined />,
    element: <ProductList />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '/categories',
    label: 'Categories',
    icon: <ShoppingCartOutlined />,
    element: <div>CATEGORIES</div>,
  },
  {
    path: '/collections',
    label: 'Collections',
    element: <div>COLLECTIONS</div>,
  },
  {
    path: '/types',
    label: 'Types',
    element: <div>TYPES</div>,
  },
  {
    path: '/customers',
    label: 'Customers',
    icon: <UserOutlined />,
    element: <div>CUSTOMERS</div>,
  },
  {
    path: '/promotions',
    label: 'Promotions',
    icon: <TagOutlined />,
    element: <div>PROMOTIONS</div>,
  },
];
