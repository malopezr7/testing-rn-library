import i18n from 'i18next';
import {string} from 'yup';

export const validateFirstName = string().required(
  i18n.t('yup.required.firstName'),
);
