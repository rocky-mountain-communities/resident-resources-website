import InfoSection from '@/app/components/InfoSection';
import Resources from '@/app/components/Resources';
import ContactResidentServices from '@/app/components/ContactResidentServices';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const community_paths = [
    'arroyo-village',
    'garden-court',
    'mountain-terrace',
  ];

  return community_paths.map((slug) => ({ slug }));
}

export default function CommunityPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    `content/communities/${params.slug}.json`
  );
  const pageData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return (
    <main className='space-y-6'>
      <InfoSection
        headerImagePath={pageData.headerImagePath}
        communityName={pageData.name}
        announcementMessage={pageData.defaultAnnouncement}
      />
      <Resources />
      <ContactResidentServices />
    </main>
  );
}
