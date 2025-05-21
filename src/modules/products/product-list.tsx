import { useGetProducts } from '@/modules/products/api/use-get-products';
import ProductTable from '@/modules/products/components/product-table';

export default function ProductList() {
  const { data, isLoading } = useGetProducts();
  if (isLoading) return;

  return <ProductTable data={data?.items || []} />;
}
