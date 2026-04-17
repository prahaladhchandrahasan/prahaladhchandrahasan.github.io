export interface ProjectItem {
  title: string;
  description: string;
  url: string;
}

export const projects: ProjectItem[] = [
  {
    title: "RefusalBench Studio",
    description:
      "An interactive platform for generative evaluation of LLM selective refusal with agentic evaluation workflows, revealing that self-correction systematically degrades refusal accuracy across frontier models.",
    url: "https://github.com/aashiqmuhamed/refusalbench-studio",
  },
  {
    title: "MMU-RAGent Video Eval Platform",
    description:
      "Video evaluation platform for the MMU-RAG NeurIPS competition.",
    url: "https://github.com/AGI-LTI/MMU_RAGent_Video_eval_Platform",
  },
  {
    title: "T2T CMU Submission",
    description:
      "CMU's deep research model for the NeurIPS competition.",
    url: "https://github.com/AGI-LTI/t2t_cmu_submission",
  },
  {
    title: "ML Unlearning",
    description:
      "Machine unlearning project for 10-617 (Intermediate Deep Learning).",
    url: "https://github.com/prahaladhchandrahasan/ML_Unlearning",
  },
  {
    title: "CIFAR MIA",
    description:
      "Membership inference attacks on the CIFAR-10 dataset.",
    url: "https://github.com/prahaladhchandrahasan/CIFAR_MIA",
  },
];

export const projectBacklog: ProjectItem[] = [
  {
    title: "LLM Interpretability",
    description:
      "Go through the lectures and implement the homework questions from the LLM Interpretability course.",
    url: "https://github.com/mega002/llm-interp-tau",
  },
  {
    title: "Adversarial Attacks and Defenses",
    description:
      "Adversarial Attacks and Defenses HW from the Trustworthy AI course from CMU.",
    url: "https://www.cs.cmu.edu/~aditirag/teaching/15-783F25.html",
  },
];
