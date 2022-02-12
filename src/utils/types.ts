import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export type IContact = {
  key: string;
  icon: IconDefinition | string;
  content: string;
  url?: string;
};

export type IAbilities = {
  key: string;
  content: string;
  icons: (IconDefinition | string)[] | null;
  dots: number;
};

export type IInformation = {
  title?: string;
  detail?: string;
  date?: string;
  paragraph?: string;
  achievements?: string[];
};
