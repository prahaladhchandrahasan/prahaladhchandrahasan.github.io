export interface PresenceGroup {
  title: string;
  links: Array<{ label: string; url: string }>;
}

export const onlinePresence: PresenceGroup[] = [
  {
    title: "Circle Founding Engineer Announcement",
    links: [
      {
        label: "Isaiah Hall",
        url: "https://www.linkedin.com/posts/isaiah-hall-694102210_meet-prahaladh-chandrahasan-our-second-founding-share-7424325404359958528-PIte",
      },
      {
        label: "JJ Hennessy",
        url: "https://www.linkedin.com/posts/jj-hennessy_meet-prahaladh-chandrahasan-our-second-founding-share-7424325692303142913-bT5t",
      },
    ],
  },
  {
    title: "MMU-RAG: Massive Multi-Modal User-Centric RAG Benchmark",
    links: [
      {
        label: "NeurIPS 2025 Competition",
        url: "https://neurips.cc/virtual/2025/loc/san-diego/competition/127730",
      },
      {
        label: "NeurIPS Announcement",
        url: "https://blog.neurips.cc/2025/06/27/neurips-2025-competitions-announced/",
      },
      {
        label: "CMU LTI News",
        url: "https://www.lti.cs.cmu.edu/news-and-events/news/2025-07-30-mmurag.html",
      },
    ],
  },
  {
    title: "UsersFirst Framework",
    links: [
      {
        label: "USENIX PEPR 2025 Talk",
        url: "https://www.usenix.org/conference/pepr25/presentation/sadeh",
      },
    ],
  },
];
