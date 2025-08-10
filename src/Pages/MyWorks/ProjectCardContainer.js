import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectCardContainer = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 project-card-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project.id)} />
      ))}
    </div>
  );
};

export default ProjectCardContainer;