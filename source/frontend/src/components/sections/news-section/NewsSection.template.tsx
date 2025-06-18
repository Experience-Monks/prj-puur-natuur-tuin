import type { ReactElement } from 'react';
import Heading from '../../general/heading/Heading';
import { NewsCard } from '../../news-card/NewsCard';
import styles from './NewsSection.module.scss';
import type { NewsSectionProps } from './NewsSection.types';

export function NewsSectionTemplate({ title, news, refs }: NewsSectionProps): ReactElement {
  return (
    <div className={styles.newsSection} ref={refs.self}>
      <Heading as="h2" className={styles.heading}>
        {title}
      </Heading>
      <ul className={styles.newsList}>
        {news.map((newsItem) => (
          <li key={newsItem.id} className={styles.newsCard}>
            <NewsCard {...newsItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
