'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import RMCLogoWhite from '@/public/RMCLogoWhite.png';
import i18n from '@/app/i18n';
import { useTranslation } from 'react-i18next';

const styles = {
  container: 'flex justify-between items-center text-white text-lg ',
  logo: 'flex flex-col gap-2 justify-self-center md:items-left font-semibold hover:underline w-2/3',
  desktopLanguageContainer: 'ml-[15px]',
  mobileLanguageContainer: '',
};

const Navbar = () => {
  const { t } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState('en');
  const handleLanguageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const selectedLocale = e.currentTarget.getAttribute('data-locale') || 'en';
    i18n.changeLanguage(selectedLocale);
    setCurrentLocale(selectedLocale);
  };

  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src={RMCLogoWhite} alt='RMCLogoWhite' width={300} height={80} />
      </Link>
      <div className={styles.desktopLanguageContainer}>
        <button
          id='1'
          className={`mr-3 ${currentLocale === 'en' ? 'underline' : ''}`}
          data-locale='en'
          onClick={handleLanguageChange}
        >
          <span className='hidden md:block'>{t('common.english')}</span>
          <span className='block md:hidden'>
            {t('common.englishAbbreviation')}
          </span>
        </button>
        /{' '}
        <button
          id='1'
          className={`mr-3 ${currentLocale === 'es' ? 'underline' : ''}`}
          data-locale='es'
          onClick={handleLanguageChange}
        >
          <span className='hidden md:block'>{t('common.spanish')}</span>
          <span className='block md:hidden'>
            {t('common.spanishAbbreviation')}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
