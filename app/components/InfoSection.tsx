import Card from '@/app/components/Card';
import CurrentDate from '@/app/components/CurrentDate';
import FeatureHighlight from '@/app/components/FeatureContent';
import { scheduleItems } from '@/content/infoSection';
import dayjs from 'dayjs';

const styles = {
  infoSection: 'grid md:grid-cols-3 gap-6',
  featureCard: 'md:col-span-2',
  scheduleCard: 'md:col-span-1',
  currentDateContainer: '',
  scheduleList: '',
};

export default function InfoSection({
  communityName,
  headerImagePath,
  announcementMessage,
  schedule,
}: {
  communityName: string;
  headerImagePath: string;
  announcementMessage: string;
  schedule: object;
}) {
  const currentDate = dayjs().format('YYYY-MM-DD');
  const scheduleItems = schedule[currentDate as keyof typeof schedule] || [];

  return (
    <div className={styles.infoSection}>
      <Card className={styles.featureCard}>
        <FeatureHighlight
          communityName={communityName}
          headerImagePath={headerImagePath}
          announcementMessage={announcementMessage}
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
