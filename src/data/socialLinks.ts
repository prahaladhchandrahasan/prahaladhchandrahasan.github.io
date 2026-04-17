export interface SocialLink {
  label: string;
  url: string;
  icon: "cv" | "github" | "linkedin" | "scholar" | "x";
}

export const socialLinks: SocialLink[] = [
  { label: "CV", url: "/data/Prahaladh_resume_20260325.pdf", icon: "cv" },
  {
    label: "Github",
    url: "https://github.com/prahaladhchandrahasan",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/prahaladh-chandrahasan/",
    icon: "linkedin",
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=2tXIWX4AAAAJ&hl=en&authuser=1",
    icon: "scholar",
  },
  { label: "X", url: "https://x.com/pralichan", icon: "x" },
];
