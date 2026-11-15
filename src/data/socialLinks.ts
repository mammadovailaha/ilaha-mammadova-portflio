export type SocialLink = { label: string; href: string };

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ilaha-mammadova" },
  { label: "GitHub", href: "https://github.com/mammadovailaha" },
  { label: "Instagram", href: "https://www.instagram.com/ilahahub/" },
  { label: "Email", href: "mailto:mammadovailah03@gmail.com" },
];

export const contactDetails = {
  email: "mammadovailah03@gmail.com",
  phone: "+994 51 848 71 14",
  phoneHref: "tel:+994518487114",
  locationKey: "location" as const,
};
