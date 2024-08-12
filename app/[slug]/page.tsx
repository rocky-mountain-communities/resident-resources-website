import InfoSection from '@/app/components/InfoSection';
import Resources from '@/app/components/Resources';
import ContactResidentServices from '@/app/components/ContactResidentServices';

export async function generateStaticParams() {
  const community_paths = ['arroyo-village', 'garden-court'];

  return community_paths.map((slug) => ({ slug }));
}

export default function CommunityPage() {
  return (
    <main className='space-y-6'>
      <InfoSection />
      <Resources />
      <ContactResidentServices />
    </main>
  );
}
