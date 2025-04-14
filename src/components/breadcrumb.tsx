import { Breadcrumb as AntBreadcrumb } from 'antd';
import { Link, useLocation } from 'react-router';

const formatPath = (path: string) =>
  path.charAt(0).toUpperCase() + path.slice(1);

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);
  const items = [
    { title: <Link to="/">Home</Link> },
    ...paths.map((path, index) => {
      const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
      const isLast = index === paths.length - 1;
      return {
        title: isLast ? (
          formatPath(decodeURIComponent(path))
        ) : (
          <Link to={fullPath}>{formatPath(decodeURIComponent(path))}</Link>
        ),
      };
    }),
  ];

  return <AntBreadcrumb separator=">" items={items} />;
}
