export interface NewsItem {
  date: string;
  text: string;
  links?: Array<{ label: string; url: string }>;
}

export const newsItems: NewsItem[] = [
  {
    date: "Feb, 2026",
    text: "RefusalBench Studio: An Interactive Platform for Generative Evaluation of LLM Selective Refusal",
    links: [
      {
        label: "Github",
        url: "https://github.com/aashiqmuhamed/refusalbench-studio",
      },
      {
        label: "Demo",
        url: "https://www.youtube.com/watch?v=-3B2aLRTa-k",
      },
    ],
  },
  {
    date: "Jan, 2026",
    text: "Joined Circle as Founding Forward Deployed Engineer.",
    links: [{ label: "Circle", url: "https://www.usecircle.com/" }],
  },
  {
    date: "Jan, 2026",
    text: "Our Deep-Research-Comparator paper got accepted as demo paper in The Web Conference",
    links: [
      { label: "WWW", url: "https://www2026.thewebconf.org/calls/demos.html" },
    ],
  },
  {
    date: "Dec, 2025",
    text: "Graduated from CMU with a Master's in Privacy Engineering from the School of Computer Science, with an overall GPA of 3.92/4.33",
  },
  {
    date: "Sept, 2025",
    text: 'Started my Capstone Project with Meta on "Enhancing Transparency in AI Voice Assistants".',
  },
  {
    date: "Aug, 2025",
    text: 'I am organizing a NeurIPS competition "MMU-RAG: the Massive Multi-Modal User-Centric Retrieval-Augmented Generation Benchmark".',
    links: [
      {
        label: "Competition Website",
        url: "https://agi-lti.github.io/MMU-RAGent/",
      },
    ],
  },
  {
    date: "Jul, 2025",
    text: 'Published a Pre-Print "Deep Research Comparator: A Platform For Fine-grained Human Annotations of Deep Research Agents."',
    links: [
      { label: "Arxiv", url: "https://arxiv.org/abs/2507.05495" },
    ],
  },
  {
    date: "Jan, 2025",
    text: "Started as a Machine Learning Engineer building software tools that aid in Multimodal RAG and agentic evaluation as a collaboration between CMU LTI and Amazon AGI.",
  },
  {
    date: "Jan, 2025",
    text: "Started my independent study in Privacy threat modelling under Prof. Norman Sadeh, Lorrie Cranor and Hana Habib.",
    links: [
      { label: "Framework Website", url: "https://www.usersfirst.io/" },
    ],
  },
  {
    date: "Sept, 2024",
    text: "Began my master's in Privacy Engineering from CMU.",
    links: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/prahaladh-chandrahasan_newbeginnings-privacyengineering-cmu-activity-7232158927264571393-Is7t?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    date: "Sept, 2023",
    text: "Received the Arpit Jain Best Researcher Scholarship for our FL paper.",
    links: [
      {
        label: "Website",
        url: "https://arpitjain2811.github.io/AJBRS-Website/",
      },
    ],
  },
  {
    date: "Aug, 2023",
    text: "Filed my first patent through Bank Of America.",
    links: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/prahaladh-chandrahasan_paymentsfrauddetection-innovation-patentfiling-activity-7103602932167688192-z-1R?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    date: "Sept, 2022",
    text: "Joined Bank of America as Software Engineer in their APAC Payments team.",
  },
  {
    date: "Jul, 2022",
    text: 'Published the Paper "Federated Learning for Colorectal Cancer Prediction."',
    links: [
      {
        label: "IEEE Link",
        url: "https://ieeexplore.ieee.org/document/9972224",
      },
    ],
  },
  {
    date: "Jan, 2022",
    text: 'Published the paper "Motion Pattern-based Crowd Scene Classification Using Histogram of Angular Deviations of Trajectories."',
    links: [
      {
        label: "Journal Link",
        url: "https://link.springer.com/article/10.1007/s00371-021-02356-3",
      },
    ],
  },
  {
    date: "Jan, 2022",
    text: "Joined RedHat as Software Engineer intern in their middleware engineering division.",
  },
  {
    date: "Oct, 2021",
    text: "Joined a stealth startup as Federated Learning Engineer intern.",
  },
  {
    date: "Mar, 2021",
    text: "Joined Cloudanix (YC, 21) as a Software Engineer intern.",
    links: [{ label: "Cloudanix", url: "https://www.cloudanix.com/" }],
  },
  {
    date: "Nov, 2020",
    text: "2nd Place (National) in BRICS Future Skills Aerial Robotics competition, organised by WorldSkills Russia and the Moscow Regional Coordination Centre.",
  },
  {
    date: "Jun, 2019 - Dec 2020",
    text: "Won various aeromodelling and Drone racing competitions as a part of AeroMIT.",
  },
  {
    date: "Jun, 2019",
    text: "Joined the Advanced Drone Research (now Autonomous Drone Research Subsystem) Subsystem in AeroMIT.",
    links: [{ label: "AeroMIT", url: "https://www.aeromit.in/" }],
  },
];
