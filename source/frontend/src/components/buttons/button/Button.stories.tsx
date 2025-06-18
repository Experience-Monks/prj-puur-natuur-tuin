import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

export default {
  component: Button,
};

export const Default = {
  render(): ReactElement {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation('general');
    return <Button>{t('title')}</Button>;
  },
};
