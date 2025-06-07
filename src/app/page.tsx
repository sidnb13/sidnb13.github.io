import ResearchProject from "../components/ResearchProject";
import Project from "../components/Project";
import { FadeInStagger, FadeInItem } from "../components/FadeInStagger";

export default function Home() {
  const researchProjects = [
    {
      title: "HyperSteer: Activation Steering at Scale with Hypernetworks",
      boldAuthor: "Sidharth Baskaran*",
      conference: "in review",
      authors: ["Jiuding Sun*", "Sidharth Baskaran*", "Zhengxuan Wu", "Michael Sklar", "Christopher Potts", "Atticus Geiger"],
      arxivUrl: "https://arxiv.org/abs/2506.03292",
      pdfUrl: "https://arxiv.org/pdf/2506.03292.pdf",
    },
    {
      title:
        "HyperDAS: Towards Automating Mechanistic Interpretability with Hypernetworks",
      boldAuthor: "Sidharth Baskaran",
      conference: "ICLR 2025",
      authors: ["Jiuding Sun", "Jing Huang", "Sidharth Baskaran", "Karel D'Oosterlinck", "Christopher Potts", "Michael Sklar*", "Atticus Geiger*"],
      arxivUrl: "https://arxiv.org/abs/2503.10894",
      pdfUrl: "https://openreview.net/pdf?id=6fDjUoEQvm",
    },
    {
      title:
        "Rebuilding ROME: Resolving Model Collapse during Sequential Model Editing",
      authors: ["Akshat Gupta", "Sidharth Baskaran", "Gopala Anumanchipalli"],
      boldAuthor: "Sidharth Baskaran",
      conference: "EMNLP 2024",
      arxivUrl: "https://arxiv.org/abs/2403.07175",
      pdfUrl: "https://arxiv.org/pdf/2403.07175.pdf",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 animate-fade-in">
      <h1 className="font-lora text-pretty scroll-mt-24 text-h0 text-accent-blue dark:text-blue-300 font-normal text-center mb-4">
        Sidharth Baskaran
      </h1>

      <p className="mb-6 text-sm text-center">
        <a
          href="mailto:sidnbaskaran@gmail.com"
          className="animated-underline"
          aria-label="email"
        >
          email
        </a>
        {" · "}
        <a
          href="https://github.com/sidnb13"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-underline"
        >
          github
        </a>
        {" · "}
        <a
          href="https://linkedin.com/in/sidharth-baskaran"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-underline"
        >
          linkedin
        </a>
        {" · "}
        <a
          href="https://twitter.com/sidnbaskaran"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-underline"
        >
          𝕏
        </a>
        {" · "}
        <a
          href="https://scholar.google.com/citations?user=OHjj7lcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-underline"
        >
          scholar
        </a>
      </p>
      <p className="m-8 text-sm">
        I am interested in building systems and novel methods to understand and improve language model capabilities.
      </p>

      <section className="m-8">
        <h2 className="text-lg mb-2 font-serif text-primary-heading dark:text-dark-heading hover:translate-x-1 transition-transform duration-200">
          Research
        </h2>
        <FadeInStagger>
          {researchProjects.map((project) => (
            <FadeInItem key={project.title}>
              <ResearchProject {...project} />
            </FadeInItem>
          ))}
        </FadeInStagger>
        <p className="text-[11px] text-gray-400 dark:text-gray-500">
          * denotes equal contribution
        </p>
      </section>

      <section className="m-8">
        <h2 className="text-lg mb-2 font-serif text-primary-heading dark:text-dark-heading hover:translate-x-1 transition-transform duration-200">
          Software
        </h2>
        <ul className="text-sm space-y-2">
          <Project
            name="hydra-ray-jobs-launcher"
            description="Ray Job Submission launcher plugin for the Hydra library."
            githubUrl="https://github.com/sidnb13/hydra/tree/main/plugins/hydra_ray_jobs_launcher"
          />
          <Project
            name="mltoolbox"
            description="Simple orchestration of containers and remote workflows for research."
            githubUrl="https://github.com/sidnb13/toolbox"
          />
        </ul>
      </section>

      <footer className="py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sidharth Baskaran
      </footer>
    </div>
  );
}
