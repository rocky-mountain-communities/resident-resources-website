'use client';
import Image from 'next/image';

import { FeatureHighlightContent } from '@/content/infoSection';

const styles = {
  section: 'grid grid-cols-1 md:grid-cols-2 gap-x-6 px-6 py-12',
  imageContainer: 'hidden md:block',
  contentContainer: 'grid grid-rows-1',
  title: 'text-center text-2xl font-bold',
  description: '',
};

export default function FeatureHighlight({
  headerImagePath,
  communityName,
  announcementMessage,
}: {
  headerImagePath: string;
  communityName: string;
  announcementMessage: string;
}) {
  return (
    <section className={styles.section}>
      <div className=''>
        <Image
          src={headerImagePath}
          alt={FeatureHighlightContent.imageAlt}
          width={500}
          height={500}
          className={styles.imageContainer}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{communityName}</h2>
        <p className={styles.description}>{announcementMessage}</p>
      </div>
    </section>
  );
}
