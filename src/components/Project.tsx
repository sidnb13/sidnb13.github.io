interface ProjectProps {
  name: string;
  githubUrl: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ name, githubUrl, description }) => {
  return (
    <div className="mb-3">
      <div>
        <a
          href={githubUrl}
          className="font-mono bg-black/5 dark:bg-white/10 px-0.5 rounded text-sm hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
        >
          {name}
        </a>
      </div>
      <div className="text-xs">{description}</div>
    </div>
  );
};
export default Project;
