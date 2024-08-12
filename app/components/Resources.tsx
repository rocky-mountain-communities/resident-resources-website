import Card from '@/app/components/Card';
import { resourceCategories } from '@/content/resourcesCategories';
import Link from 'next/link';

type TopLinkType = {
  name: string;
  link: string;
};

type CategoryType = {
  id: string;
  name: string;
  topLinks: TopLinkType[];
};

type CategoriesCardProps = {
  category: CategoryType;
};

const CategoriesCard = ({ category }: CategoriesCardProps) => {
  const { id, name, topLinks } = category;

  return (
    <Card className='flex flex-col space-y-2 items-center p-8'>
      <h2 className='font-bold text-xl mb-4'> {name} </h2>
      {topLinks.map((link: TopLinkType) => (
        <Link
          key={`${name}-${link.name}`}
          href={link.link}
          className='p-3 w-full bg-[#feffff] border rounded-lg hover:underline text-center font-medium'
        >
          {' '}
          {link.name}{' '}
        </Link>
      ))}
      <Link
        href={`/resources/${id}`}
        className='w-full bg-[#FFB47F] rounded-lg p-2.5 hover:bg-[#FF9244] text-center font-medium'
      >
        {' '}
        VIEW MORE RESOURCES{' '}
      </Link>
    </Card>
  );
};

export default function Resources() {
  return (
    <section id='Resources'>
      <h1 className='text-white text-xl pb-4'>RESOURCES</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
        {resourceCategories.map((category) => (
          <div key={category.id}>
            <CategoriesCard category={category} />
          </div>
        ))}
      </div>
    </section>
  );
}
