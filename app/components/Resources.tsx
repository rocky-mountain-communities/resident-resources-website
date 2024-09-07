'use client';
import Card from '@/app/components/Card';
import Link from 'next/link';
import translations from '@/public/locales/en.json';
import { useTranslation } from 'react-i18next';

type Subcategory = {
  name: string;
  link: string;
};

interface Subcategories {
  [key: string]: Subcategory;
}

type CategoryType = {
  path: string;
  name: string;
  subcategories: Subcategories;
};

type CategoriesCardProps = {
  category: CategoryType;
};

const CategoriesCard = ({ category }: CategoriesCardProps) => {
  const { t } = useTranslation();
  const { name, path, subcategories } = category;

  const firstThreeSubcategories = Object.fromEntries(
    Object.entries(subcategories).slice(0, 3)
  );

  return (
    <Card className='flex flex-col space-y-2 items-center p-8'>
      <h2 className='font-bold text-xl mb-4'>
        {t(`resources.categories.${path}.name`)}
      </h2>
      {Object.keys(firstThreeSubcategories).map((key: string) => {
        const subcategory = subcategories[key as keyof typeof subcategories];
        return (
          <Link
            key={`${name}-${subcategory.name}`}
            href={subcategory.link}
            className='p-3 w-full bg-[#feffff] border rounded-lg hover:underline text-center font-medium truncate'
          >
            {' '}
            {t(`resources.categories.${path}.subcategories.${key}.name`)}{' '}
          </Link>
        );
      })}
      <Link
        href={`/resources/${path}`}
        className='w-full bg-[#FFB47F] rounded-lg p-2.5 hover:bg-[#FF9244] text-center font-medium'
      >
        {t('resources.viewMoreResources')}
      </Link>
    </Card>
  );
};

export default function Resources() {
  return (
    <section id='Resources'>
      <h1 className='text-white text-xl pb-4'>RESOURCES</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
        {Object.keys(translations.resources.categories).map((key) => {
          const category =
            translations.resources.categories[
              key as keyof typeof translations.resources.categories
            ];
          return (
            <div key={category.name}>
              <CategoriesCard category={{ path: key, ...category }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
