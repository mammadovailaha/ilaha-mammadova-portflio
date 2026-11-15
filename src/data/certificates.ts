import type { TranslationKey } from "../context/Preferences";

export type Certificate = { titleKey: TranslationKey; providerKey: TranslationKey; dateKey: TranslationKey };

const certificateTitleKeys = [
  "certificateMeta",
  "certificateNode",
  "certificateTypescript",
  "certificateVersion",
  "certificateUx",
  "certificateBuild",
  "certificateNext",
] as const satisfies readonly TranslationKey[];

export const certificates: Certificate[] = certificateTitleKeys.map((titleKey) => ({ titleKey, providerKey: "certificateProvider", dateKey: "certificateDate" }));
