import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

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

export type IHeaderProps = {
  title: string;
  description: string;
};

export type ISimpleProps = {
  title: string;
  content: string;
};

export type IIconProps = {
  title: string;
  rows: IContact[];
};

export type IDotsLvlProps = {
  title: string;
  rows: IAbilities[];
};

export type IBarsLvlProps = {
  title: string;
  rows: {
    content: string;
    percentage: number;
  }[];
};

export type IMainListProps = {
  title: string;
  rows: IInformation[];
};
