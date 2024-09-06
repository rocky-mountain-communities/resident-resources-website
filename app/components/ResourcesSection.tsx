import { capitalizeWords, formatTitleToId } from '@/app/utils/wordFormat';
import ResourceCard from '@/app/components/ResourceCard';
import { Resources } from '@/app/constants/interfaces';
export interface ResourcesSectionProps {
  title: string;
  categoryKey: string;
  subcategoryKey: string;
  resources: Resources;
}

export default function ResourcesSection({
  title,
  categoryKey,
  subcategoryKey,
  resources,
}: ResourcesSectionProps) {
  return (
    <div>
      <h2 id={`${formatTitleToId(title)}`} className='font-bold text-xl my-4'>
        {capitalizeWords(title)}
      </h2>
      <div>
        {Object.keys(resources).map((resourceKey: string) => {
          const resource = resources[resourceKey];
          return (
            <div
              id={formatTitleToId(resource.name)}
              key={resource.name}
              className='my-6 pt-2'
            >
              <ResourceCard
                translationPath={`resources.categories.${categoryKey}.subcategories.${subcategoryKey}.entries.${resourceKey}`}
                resource={resource}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
