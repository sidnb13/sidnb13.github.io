interface ResearchProjectProps {
  title: string;
  authors?: string[]; // optional
  conference?: string; // optional
  pdfUrl?: string; // optional
  arxivUrl?: string; // optional
  boldAuthor?: string; // optional parameter to bold specific author
}

const ResearchProject: React.FC<ResearchProjectProps> = ({
  title,
  authors = [], // default to empty array if not provided
  conference,
  pdfUrl,
  arxivUrl,
  boldAuthor,
}) => {
  const formattedAuthors = authors.map((author, index) => (
    <span key={index}>
      {index > 0 && ", "}
      <span className={author === boldAuthor ? "font-bold" : ""}>{author}</span>
    </span>
  ));

  return (
    <div className="mb-4">
      <div>
        <span className="font-medium text-sm">{title}</span>
      </div>
      {authors.length > 0 && <div className="text-xs">{formattedAuthors}</div>}
      <div className="text-xs">
        {conference && <span className="italic">{conference}</span>}
        {(pdfUrl || arxivUrl) && (
          <span className="ml-1">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                className="font-mono mx-1 text-emerald-600 dark:text-emerald-400
                  hover:opacity-80 transition-opacity"
              >
                pdf
              </a>
            )}
            {arxivUrl && (
              <a
                href={arxivUrl}
                target="_blank"
                className="font-mono mx-1 text-emerald-600 dark:text-emerald-400
                  hover:opacity-80 transition-opacity"
              >
                arxiv
              </a>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default ResearchProject;
