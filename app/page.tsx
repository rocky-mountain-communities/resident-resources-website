import CommunitiesGrid from '@/app/components/CommunitiesGrid';
import ContactResidentServices from '@/app/components/ContactResidentServices';

export default function Home() {
  return (
    <main className='space-y-6'>
      <h1 className='font-bold text-[#FFB47F] text-3xl tracking-wide leading-9'>
        WELCOME TO THE RMC RESIDENT RESOURCE CENTER
      </h1>
      <CommunitiesGrid />
      <ContactResidentServices />
    </main>
  );
}
