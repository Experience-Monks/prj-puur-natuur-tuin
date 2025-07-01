'use client';

import type { ReactElement } from 'react';
import { PrimaryButton } from '../../buttons/primary-button/PrimaryButton';
import Heading from '../../general/heading/Heading';
import { NewsCard } from '../../news-card/NewsCard';
import styles from './NewsSection.module.scss';
import type { NewsSectionTemplateProps } from './NewsSection.types';

export function NewsSectionTemplate({
  title,
  news,
  link,
  refs,
}: NewsSectionTemplateProps): ReactElement {
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
      {link && (
        <div className={styles.ctaWrapper}>
          <PrimaryButton {...link}>{link.children}</PrimaryButton>
        </div>
      )}
    </div>
  );
}
