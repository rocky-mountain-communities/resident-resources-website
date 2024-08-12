import fs from 'fs/promises';
import path from 'path';
import { resourceCategories } from '@/content/resourcesCategories';

export async function getResources() {
  const resourcesDirectory = path.join(process.cwd(), 'content', 'resources');
  const categoriesWithFiles = [];

  for (const category of resourceCategories) {
    const dirPath = path.join(resourcesDirectory, category.id);

    try {
      const fileNames = await fs.readdir(dirPath);
      const resources = await Promise.all(
        fileNames
          .filter((fileName) => fileName.endsWith('.json'))
          .map(async (fileName) => {
            const filePath = path.join(dirPath, fileName);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const basePath = fileName.replace(/\.json$/, '');
            const name = basePath.replace(/-/g, ' ');
            const data = JSON.parse(fileContents);
            return {
              path: basePath,
              name: name,
              data: data,
            };
          })
      );

      categoriesWithFiles.push({
        ...category,
        slug: category.id,
        resources: resources,
      });
    } catch (err) {
      console.error(
        `Error reading directory for category ${category.id}: ${err}`
      );
      categoriesWithFiles.push({
        ...category,
        slug: category.id,
        resources: [],
      });
    }
  }

  return categoriesWithFiles;
}
