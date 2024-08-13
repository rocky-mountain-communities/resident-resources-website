import InfoSection from '@/app/components/InfoSection';
import Resources from '@/app/components/Resources';
import ContactResidentServices from '@/app/components/ContactResidentServices';
import translations from '@/public/locales/en.json';
import dayjs from 'dayjs';

export async function generateStaticParams() {
  const community_paths = Object.keys(translations.communities);

  return community_paths.map((slug) => ({ slug }));
}

async function loadSchedule(slug: string) {
  try {
    const result = await import(`@/content/schedules/${slug}.json`, {
      assert: { type: 'json' },
    });
    return result.default;
  } catch (error) {
    console.error('Error loading JSON file:', error);
    return null;
  }
}

export default async function CommunityPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentDate = dayjs().format('YYYY-MM-DD');
  const schedule = await loadSchedule(params.slug);
  const scheduleItems = schedule[currentDate] || [];
  return (
    <main className='space-y-6'>
      <InfoSection communityId={params.slug} scheduleItems={scheduleItems} />
      <Resources />
      <ContactResidentServices />
    </main>
  );
}
