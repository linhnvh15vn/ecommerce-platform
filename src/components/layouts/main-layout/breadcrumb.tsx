import { Breadcrumb as AntBreadcrumb, type BreadcrumbProps } from 'antd';
import { Link, useLocation } from 'react-router';

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);
  const items: BreadcrumbProps['items'] = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...paths.map((segment, index) => {
      const isLast = index === paths.length - 1;
      const url = '/' + paths.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);

      return {
        title: isLast ? label : <Link to={url}>{label}</Link>,
      };
    }),
  ];

  return <AntBreadcrumb items={items} separator=">" />;
}
