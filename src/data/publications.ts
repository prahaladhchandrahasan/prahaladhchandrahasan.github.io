export interface Publication {
  id: number;
  authors: string;
  title: string;
  venue: string;
  venueShort: string;
  links: Array<{ label: string; url: string }>;
}

export const publications: Publication[] = [
  {
    id: 1,
    authors:
      "Prahaladh Chandrahasan, Jiahe Jin, Zhihan Zhang, Tevin Wang, Andy Tang, Lucy Mo, Morteza Ziyadi, Leonardo F.R. Ribeiro, Zimeng Qiu, Markus Dreyer, Akari Asai, Chenyan Xiong",
    title:
      "Deep Research Comparator: A Platform For Fine-grained Human Annotations of Deep Research Agents",
    venue: "arXiv preprint arXiv:2507.05495, Jul. 2025.",
    venueShort: "arXiv",
    links: [
      { label: "Link", url: "https://arxiv.org/abs/2507.05495" },
      {
        label: "Github",
        url: "https://github.com/cxcscmu/Deep-Research-Comparator",
      },
      {
        label: "Demo",
        url: "https://www.youtube.com/watch?v=g4d2dnbdseg",
      },
    ],
  },
  {
    id: 2,
    authors: "Yash Maurya, Prahaladh Chandrahasan, and Poornalatha G",
    title: "Federated Learning for Colorectal Cancer Prediction",
    venue:
      "2022 IEEE 3rd Global Conference for Advancement in Technology (GCAT), vol. abs 2110 9910, pp. 1\u20135, Oct. 2022, doi: https://doi.org/10.1109/gcat55367.2022.9972224.",
    venueShort: "IEEE",
    links: [
      {
        label: "Link",
        url: "https://ieeexplore.ieee.org/document/9972224",
      },
    ],
  },
  {
    id: 3,
    authors:
      "A. K. Pai, Prahaladh Chandrahasan, U. Raghavendra, and A. K. Karunakar",
    title:
      "Motion pattern-based crowd scene classification using histogram of angular deviations of trajectories",
    venue:
      "The Visual Computer, vol. 39, no. 2, pp. 557\u2013567, Jan. 2022, doi: https://doi.org/10.1007/s00371-021-02356-3.",
    venueShort: "Springer",
    links: [
      {
        label: "Link",
        url: "https://link.springer.com/article/10.1007/s00371-021-02356-3",
      },
    ],
  },
];
