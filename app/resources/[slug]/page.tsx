import { getResources } from '@/app/utils/getResources';
import ResourcePage from '@/app/components/ResourcePage';

export async function generateStaticParams() {
  const categories = await getResources();

  const paths = categories
    .filter((category) => category.slug !== undefined)
    .map((category) => ({ slug: category.slug }));
  return paths;
}

export default async function CategoriesPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ResourcePage slug={params.slug} />;
}
