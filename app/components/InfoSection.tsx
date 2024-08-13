'use client';
import { useTranslation } from 'react-i18next';
import Card from '@/app/components/Card';
import CurrentDate from '@/app/components/CurrentDate';
import FeatureHighlight from '@/app/components/FeatureContent';

const styles = {
  infoSection: 'grid md:grid-cols-3 gap-6 mx-auto',
  featureCard: 'md:col-span-2',
  scheduleCard: 'md:col-span-1',
  currentDateContainer: '',
  scheduleList: '',
};

interface ScheduleItem {
  type: string;
  eventTitle?: string;
  startTime: string;
  endTime?: string;
}

export function TranslationForScheduleItem({ item }: { item: ScheduleItem }) {
  const { t } = useTranslation();

  switch (item.type) {
    case 'event':
      return (
        <div className='mb-2'>
          <b>{item.eventTitle}</b>:
          <div>
            {item.startTime} {item.endTime ? `- ${item.endTime}` : ''}
          </div>
        </div>
      );
    case 'computer-lab':
      return (
        <div className='mb-2'>
          <b>{t(`common.schedules.${item.type}`)}</b>:
          <div>
            {item.startTime} {item.endTime ? `- ${item.endTime}` : ''}
          </div>
        </div>
      );
    default:
      return (
        <div className='mb-2'>
          <b>{item.eventTitle}</b>:
          <div>
            {item.startTime} {item.endTime ? `- ${item.endTime}` : ''}
          </div>
        </div>
      );
  }
}

export function ScheduleItemRow({ item }: { item: ScheduleItem }) {
  return (
    <div className='mb-2'>
      <TranslationForScheduleItem item={item} />
    </div>
  );
}

export default function InfoSection({
  communityId,
  scheduleItems,
}: {
  communityId: string;
  scheduleItems: ScheduleItem[];
}) {
  const { t } = useTranslation();

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
            {scheduleItems.map((item) => (
              <li key={`${item.startTime}-${item.type}`}>
                <ScheduleItemRow item={item} />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
