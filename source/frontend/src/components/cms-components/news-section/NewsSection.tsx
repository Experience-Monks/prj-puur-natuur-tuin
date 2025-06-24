'use client';

import { ensuredForwardRef, useRefs } from '@mediamonks/react-kit';
import type { ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { createInAnimation, createOutAnimation } from './NewsSection.animations';
import { NewsSectionTemplate } from './NewsSection.template';
import type { NewsSectionProps, NewsSectionRefs } from './NewsSection.types';

export const NewsSection = ensuredForwardRef<HTMLDivElement, Omit<NewsSectionProps, 'refs'>>(
  (props, ref): ReactElement => {
    const refs = useRefs<NewsSectionRefs>({ self: ref });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return <NewsSectionTemplate {...props} refs={refs} />;
  },
);
