import Card from '@/app/components/Card';

interface ResourceCardProps {
  resource: {
    title: string;
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
  linkTitle: 'font-bold hover:underline',
  grid: 'grid grid-cols-5 gap-x-10 leading-loose p-1',
  description: 'col-span-3',
  flex: 'col-span-2 flex flex-col',
  boldText: 'font-bold',
  phoneMargin: 'mb-4',
  button:
    'w-full self-center bg-[#FFB47F] hover:bg-[#FF9244] text-center font-medium py-2 px-10 rounded',
};

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className={styles.card}>
      <a
        href={resource.button.link}
        className={styles.linkTitle}
        target='_blank'
        rel='noopener noreferrer'
      >
        {resource.title}
      </a>
      <div className={styles.grid}>
        <p className={styles.description}>{resource.description}</p>
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
    </Card>
  );
};

export default ResourceCard;
