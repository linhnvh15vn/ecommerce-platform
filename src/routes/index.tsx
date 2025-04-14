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
    element: <div>DASHBOARD</div>,
  },
  {
    path: '/orders',
    label: 'Orders',
    element: <div>ORDERS</div>,
  },
  {
    path: '/products',
    label: 'Products',
    element: <div>PRODUCTS</div>,
  },
  {
    path: '/categories',
    label: 'Categories',
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
    element: <div>CUSTOMERS</div>,
  },
  {
    path: '/promotions',
    label: 'Promotions',
    element: <div>PROMOTIONS</div>,
  },
];
