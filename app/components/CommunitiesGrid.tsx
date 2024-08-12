import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function CommunitiesGrid() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className='text-white text-xl pb-4'>
        {t('communitiesGrid.heading')}
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 text-center'>
        <Link
          href='/arroyo-village'
          className='bg-white p-4 py-10 rounded-lg shadow-md hover:bg-slate-200'
        >
          <h2 className='text-lg font-semibold'>ARROYO VILLAGE</h2>
        </Link>
        <Link
          href='/garden-court'
          className='bg-white p-4 py-10 rounded-lg shadow-md hover:bg-slate-200'
        >
          <h2 className='text-lg font-semibold'>GARDEN COURT</h2>
        </Link>
        <Link
          href='/mountain-terrace'
          className='bg-white p-4 py-10 rounded-lg shadow-md hover:bg-slate-200'
        >
          <h2 className='text-lg font-semibold'>MOUNTAIN TERRACE</h2>
        </Link>
      </div>
    </div>
  );
}
