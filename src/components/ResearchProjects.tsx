import Image from 'next/image';
import React from 'react';

interface Project {
    title: string;
    authors: string;
    description: string;
    thumbnail: string;
}

const ProjectCard: React.FC<Project> = ({ title, authors, description, thumbnail }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/3">
            <Image
                src={thumbnail}
                alt={title}
                width={300}
                height={200}
                objectFit="cover"
                className="w-full h-full"
            />
        </div>
        <div className="p-6 md:w-2/3">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{authors}</p>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
);

const ResearchProjects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Interpretable Circuits in Language Models",
            authors: "John Doe, Jane Smith",
            description: "Exploring the internal mechanisms of large language models to improve interpretability and control.",
            thumbnail: "/images/project1.jpg",
        },
        {
            title: "Steerable Knowledge in LLMs",
            authors: "Alice Johnson, Bob Williams",
            description: "Investigating methods to steer and control the knowledge output of language models for specific tasks.",
            thumbnail: "/images/project2.jpg",
        },
        // Add more projects as needed
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Ongoing Research Projects & Preprints</h1>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ResearchProjects;