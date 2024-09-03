'use client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ResourcesSection from '@/app/components/ResourcesSection';
import ResourcesSidebar from '@/app/components/ResourcesSideBar';
import translations from '@/public/locales/en.json';
import { useTranslation } from 'react-i18next';
import { extractResourcesFromCategory } from '@/app/utils/extractResources';
import {
  ResourceCategories,
  Subcategory,
  Resources,
} from '@/app/constants/interfaces';

export default function ResourcePage({ slug }: { slug: string }) {
  const { t } = useTranslation();

  const categories = translations.resources
    .categories as unknown as ResourceCategories;

  const category = categories[slug];

  if (!category) {
    redirect('/');
  }

  const extractedResources = extractResourcesFromCategory(category);

  return (
    <main className='text-white '>
      <Link href='/' className='hover:underline'>
        {t('resources.backToResources')}
      </Link>
      <section className='flex flex-row py-5'>
        <div id='sidebar' className='basis-5/12'>
          <h1 className='text-2xl font-bold'>
            {t(`resources.categories.${slug}.name`)}
          </h1>
          <ResourcesSidebar resources={extractedResources} />
        </div>
        <div className='w-full'>
          {Object.keys(category.subcategories).map((key: string) => {
            const subcategory = category.subcategories[key] as Subcategory;
            const titleKey = `resources.categories.${slug}.subcategories.${key}.name`;
            return (
              <div key={subcategory.name}>
                <ResourcesSection
                  categoryKey={slug}
                  resources={subcategory.entries as Resources}
                  subcategoryKey={key}
                  title={t(titleKey)}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
