import Card from '@/app/components/Card';
import { useTranslation } from 'react-i18next';

interface ResourceCardProps {
  translationPath: string;
  resource: {
    name: string;
    description: string;
    phone?: string;
    location?: string;
    button: {
      link: string;
      text: string;
    };
  };
}

const styles = {
  card: 'p-5 text-black space-y-3',
  linkTitle: 'text-[#EB9A60] md:text-black text-base font-bold hover:underline',
  grid: 'grid md:grid-cols-5 gap-x-10 leading-loose p-1',
  description: 'col-span-3',
  flex: 'col-span-2 flex flex-col',
  boldText: 'font-bold',
  phoneMargin: 'mb-4',
  button:
    'hidden md:block w-full self-center bg-[#FFB47F] hover:bg-[#FF9244] text-center font-medium py-2 px-10 rounded',
  mobileButton:
    'block mx-auto bg-[#FFB47F] hover:bg-[#FF9244] text-center font-medium py-2 px-4 rounded',
  mobileBtnBlock: 'block md:hidden w-full h-fit',
};

const ResourceCard = ({ resource, translationPath }: ResourceCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className={styles.card}>
      <a
        href={resource.button.link}
        className={styles.linkTitle}
        target='_blank'
        rel='noopener noreferrer'
      >
        {t(`${translationPath}.name`)}
      </a>
      <div className={styles.grid}>
        <p className={styles.description}>
          {t(`${translationPath}.description`)}
        </p>
        <div className={styles.flex}>
          {resource.location && (
            <p id='location' className={styles.boldText}>
              Location: {resource.location}
            </p>
          )}
          {resource.phone && (
            <p
              id='phone'
              className={`${styles.boldText} ${styles.phoneMargin}`}
            >
              Phone: {resource.phone}
            </p>
          )}
          <a
            id='link'
            href={resource.button.link}
            target='_blank'
            className={styles.button}
          >
            {resource.button.text}
          </a>
        </div>
      </div>
      <div className={styles.mobileBtnBlock}>
        <a
          id='link'
          href={resource.button.link}
          target='_blank'
          className={styles.mobileButton}
        >
          {resource.button.text}
        </a>
      </div>
    </Card>
  );
};

export default ResourceCard;
