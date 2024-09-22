import React from 'react';

interface ResearchProjectProps {
  title: string;
  authors: string[];
  publisher: string;
  url: string;
}

const ResearchProject: React.FC<ResearchProjectProps> = ({
  title,
  authors,
  publisher,
  url,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-3">
      <h2 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
        {authors.join(', ')}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
        {publisher}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
      >
        View Publication
      </a>
    </div>
  );
};

export default ResearchProject;