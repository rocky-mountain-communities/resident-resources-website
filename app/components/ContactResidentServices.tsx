'use client';
import contactServices from '@/content/contacts/resident-services.json';
import Card from '@/app/components/Card';
import { useTranslation } from 'react-i18next';

export default function ContactResidentServices() {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className='text-white text-xl pb-4'>
        {t('contactResidentServices.heading')}
      </h1>
      <Card className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-10'>
        {contactServices.map((contact) => (
          <div
            key={contact.name}
            className='justify-self-center text-center leading-loose'
          >
            <h2 className='font-semibold'>{contact.name}</h2>
            <p>{contact.title}</p>
            <p>{contact.number}</p>
            <a
              href={`mailto:${contact.email}`}
              className='text-blue-500 underline'
            >
              {contact.email}
            </a>
          </div>
        ))}
        <div className='lg:col-span-3 text-center'>
          <p className='font-semibold'>
            {t('contactResidentServices.residentServicesDropBox')}
          </p>
          <p className=''>{t('contactResidentServices.dropBoxLocations')}</p>
        </div>
      </Card>
    </section>
  );
}
