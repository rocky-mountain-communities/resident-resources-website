import { Category, Subcategory } from '@/app/constants/interfaces';

export const extractResourcesFromCategory = (category: {
  subcategories: Record<string, Subcategory>;
}): Category[] => {
  return Object.keys(category.subcategories).map((key) => {
    const subcategory = category.subcategories[key];
    return {
      name: subcategory.name,
      data: Object.values(subcategory.entries),
      subcategoryKey: key,
    };
  });
};
