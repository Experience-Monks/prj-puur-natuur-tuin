import { ensuredForwardRef, useRefs } from '@mediamonks/react-kit';
import type { ReactElement } from 'react';
import { useEnabledAnimation } from '../../../hooks/useEnabledAnimation';
import { useEnabledBeforeUnmount } from '../../../hooks/useEnabledBeforeUnmount';
import { createInAnimation, createOutAnimation } from './HeroSection.animations';
import { HeroSectionTemplate } from './HeroSection.template';
import type { HeroSectionProps, HeroSectionRefs } from './HeroSection.types';

export const HeroSection = ensuredForwardRef<HTMLDivElement, Omit<HeroSectionProps, 'refs'>>(
  (props, ref): ReactElement => {
    const refs = useRefs<HeroSectionRefs>({
      self: ref,
    });

    useEnabledAnimation(() => createInAnimation(refs), [refs]);
    useEnabledBeforeUnmount(async () => createOutAnimation(refs));

    return <HeroSectionTemplate {...props} refs={refs} />;
  },
);
