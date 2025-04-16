import { lazy } from 'react';

import {
  DashboardOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';

const ProductList = lazy(() => import('@/modules/products/pages/product-list'));
const ProductDetail = lazy(
  () => import('@/modules/products/pages/product-detail'),
);
const CategoryList = lazy(
  () => import('@/modules/categories/pages/category-list'),
);
const CategoryDetail = lazy(
  () => import('@/modules/categories/pages/category-detail'),
);
const CollectionList = lazy(
  () => import('@/modules/collections/pages/collection-list'),
);
const CollectionDetail = lazy(
  () => import('@/modules/collections/pages/collection-detail'),
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
    element: <CategoryList />,
  },
  {
    path: '/categories/:id',
    element: <CategoryDetail />,
  },
  {
    path: '/collections',
    label: 'Collections',
    icon: <ShoppingCartOutlined />,
    element: <CollectionList />,
  },
  {
    path: '/collections/:id',
    element: <CollectionDetail />,
  },
  {
    path: '/types',
    label: 'Types',
    icon: <ShoppingCartOutlined />,
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
