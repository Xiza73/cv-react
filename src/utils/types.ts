import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type IContact = {
  icon: IconDefinition | string;
  content: string;
  url: string | null;
};

export type IAbilities = {
  content: string;
  subcontent: string[];
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
  link: string | null;
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
