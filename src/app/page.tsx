import ResearchProject from "../components/ResearchProject";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 page-fade-in">
      <h1 className="text-2xl font-serif mb-8">Sidharth Baskaran</h1>

      <p className="mb-2 text-sm">
        Computer Science at Georgia Tech. Working on language model
        interpretability to build intelligent systems. Manual transmission &amp;
        running enthusiast.
      </p>
      <p className="mb-6 text-sm">
        <a
          href="mailto:sidnbaskaran@gmail.com"
          className="underline link-hover"
          aria-label="email"
        >
          email
        </a>
        {" · "}
        <a
          href="https://github.com/sidnb13"
          target="_blank"
          rel="noopener noreferrer"
          className="underline link-hover"
        >
          github
        </a>
        {" · "}
        <a
          href="https://linkedin.com/in/sidharth-baskaran"
          target="_blank"
          rel="noopener noreferrer"
          className="underline link-hover"
        >
          linkedin
        </a>
        {" · "}
        <a
          href="https://scholar.google.com/citations?user=OHjj7lcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline link-hover"
        >
          scholar
        </a>
      </p>

      <section className="mb-8">
        <h2 className="text-lg mb-2 font-serif">Research</h2>
        <ResearchProject
          title="HyperDAS: Towards Automating Mechanistic Interpretability with Hypernetworks"
          conference="in review"
        />
        <ResearchProject
          title="Brief Investigations of a Multi-layer Sparse Auto-Encoder"
          authors={["Sidharth Baskaran*", "Michael Sklar*"]}
          boldAuthor="Sidharth Baskaran*"
          conference="LessWrong 2025"
        />
        <ResearchProject
          title="Rebuilding ROME: Resolving Model Collapse during Sequential Model Editing"
          authors={[
            "Akshat Gupta",
            "Sidharth Baskaran",
            "Gopala Anumanchipalli",
          ]}
          boldAuthor="Sidharth Baskaran"
          conference="EMNLP 2024"
          arxivUrl="https://arxiv.org/abs/2403.07175"
          pdfUrl="https://arxiv.org/pdf/2403.07175.pdf"
        />
        {/* Add more ResearchProject components as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-lg mb-2 font-serif">Software</h2>
        <ul className="text-sm space-y-2">
          <Project
            name="hydra-ray-jobs-launcher"
            description="Ray Job Submission launcher plugin for the awesome Hydra library."
            githubUrl="https://github.com/sidnb13/hydra/tree/main/plugins/hydra_ray_jobs_launcher"
          />
          <Project
            name="mltoolbox"
            description="Simple orchestration of containers and workflows for research."
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
