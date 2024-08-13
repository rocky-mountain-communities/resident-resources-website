import { redirect } from 'next/navigation';
import { getResources } from '@/app/utils/getResources';
import Link from 'next/link';
import ResourcesSection from '@/app/components/ResourcesSection';
import ResourcesSidebar from '@/app/components/ResourcesSideBar';
import englishTranslations from '@/public/locales/en/translation.json';
import { useTranslation } from 'react-i18next';
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
