import { redirect } from 'next/navigation';
import { getResources } from '@/app/utils/getResources';
import Link from 'next/link';
import ResourcesSection from '@/app/components/ResourcesSection';
import ResourcesSidebar from '@/app/components/ResourcesSideBar';

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
  const categories = await getResources();
  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    redirect('/');
  }

  return (
    <main className='text-white '>
      <Link href='/' className='hover:underline'>
        Back to Resources
      </Link>
      <section className='flex flex-row py-5'>
        <div id='sidebar' className='basis-5/12'>
          <h1 className='text-2xl font-bold'>{category.name}</h1>
          <ResourcesSidebar resources={category.resources} />
        </div>
        <div className='w-full'>
          {category.resources.map((resource) => (
            <div key={resource.name}>
              <ResourcesSection
                path={resource.path}
                title={resource.name}
                resources={resource.data}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
