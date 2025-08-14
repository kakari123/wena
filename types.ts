
export enum Language {
  EN = 'en',
  KU = 'ku',
}

export interface LocaleStrings {
  title: string;
  promptLabel: string;
  placeholder: string;
  buttonText: string;
  generatingText: string;
  errorPrefix: string;
  initialMessage: string;
  languageName: string;
}

export type Locales = {
  [key in Language]: LocaleStrings;
};
