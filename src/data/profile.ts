import type { TranslationKey } from "../context/Preferences";

export type Profile = {
  name: string;
  roleKey: TranslationKey;
  aboutKey: TranslationKey;
};

export const profile: Profile = {
  name: "İlaha Mammadova",
  roleKey: "role",
  aboutKey: "aboutBody",
};
