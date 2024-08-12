'use client';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import Card from '@/app/components/Card';
import CurrentDate from '@/app/components/CurrentDate';
import FeatureHighlight from '@/app/components/FeatureContent';

const styles = {
  infoSection: 'grid md:grid-cols-3 gap-6',
  featureCard: 'md:col-span-2',
  scheduleCard: 'md:col-span-1',
  currentDateContainer: '',
  scheduleList: '',
};

interface Schedule {
  [key: string]: string[];
}

export default function InfoSection({
  communityId,
  schedule,
}: {
  communityId: string;
  schedule: Schedule;
}) {
  const { t } = useTranslation();
  const currentDate = dayjs().format('YYYY-MM-DD');
  const scheduleItems = schedule[currentDate as keyof typeof schedule] || [];

  return (
    <div className={styles.infoSection}>
      <Card className={styles.featureCard}>
        <FeatureHighlight
          communityName={t(`communities.${communityId}.name`)}
          announcementMessage={t(
            `communities.${communityId}.defaultAnnouncement`
          )}
          headerImagePath={`/images/${communityId}.png`}
        />
      </Card>
      <Card className={styles.scheduleCard}>
        <div className='p-6'>
          <div className={styles.currentDateContainer}>
            <CurrentDate />
          </div>
          <div className='w-full py-1'>
            <div className='h-0.5 bg-black mx-auto'></div>
          </div>
          <ul className={styles.scheduleList}>
            {scheduleItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
