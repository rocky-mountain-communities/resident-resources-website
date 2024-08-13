'use client';
import { redirect } from 'next/navigation';
import { getResources } from '@/app/utils/getResources';
import Link from 'next/link';
import ResourcesSection from '@/app/components/ResourcesSection';
import ResourcesSidebar from '@/app/components/ResourcesSideBar';
import englishTranslations from '@/public/locales/en/translation.json';
import { useTranslation } from 'react-i18next';
import { Resource, ResourceCategories } from '@/app/constants/interfaces';

export default function ResourcePage({ slug }: { slug: string }) {
  const { t } = useTranslation();

  const categories = englishTranslations.resources
    .categories as ResourceCategories;
  const category = categories[slug as string];

  if (!category) {
    redirect('/');
  }

  console.log(category.subcategories);

  return (
    <main className='text-white '>
      <Link href='/' className='hover:underline'>
        Back to Resources
      </Link>
      <section className='flex flex-row py-5'>
        <div id='sidebar' className='basis-5/12'>
          <h1 className='text-2xl font-bold'>
            {t(`resources.categories.${slug}.name`)}
          </h1>
          {/* <ResourcesSidebar resources={category.resources} /> */}
        </div>
        <div className='w-full'>
          {Object.keys(category.subcategories).map((key: string) => {
            const subcategory = category.subcategories[key] as Subcategory;
            return (
              <div key={subcategory.name}>
                <ResourcesSection
                  categoryKey={slug}
                  subcategoryKey={key}
                  title={t(
                    `resources.categories.${slug}.subcategories.${key}.name`
                  )}
                  resources={subcategory.entries}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
