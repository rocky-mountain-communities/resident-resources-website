import Link from 'next/link';
// communities grid component renders a hardcoded three column layout of community names
// the grid is implemented using tailwind CSS and should stack on mobile devices

export default function CommunitiesGrid() {
  return (
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
  );
}
