'use client';
import CommunitiesGrid from '@/app/components/CommunitiesGrid';
import ContactResidentServices from '@/app/components/ContactResidentServices';
import '@/app/i18n';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className='space-y-6'>
      <h1 className='font-bold text-[#FFB47F] text-xl md:text-3xl tracking-wide leading-9'>
        {t('landingPage.heading')}
      </h1>
      <CommunitiesGrid />
      <ContactResidentServices />
    </main>
  );
}
