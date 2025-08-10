import React from "react";
import { BounceLeft } from "../../Components/Button/Animated";

const ProjectCard = ({ project, onClick }) => {
  return (
    <BounceLeft style={{ animationDuration: "0.8s" }}>
      <div
        className="card h-100 justify-between cursor-pointer rounded-br-3xl rounded-bl-3xl border-none bg-white shadow-lg backdrop-blur-md shadow-gray-300"
        onClick={onClick}
      >
        <img src={require("../../Constants/Images/placeholder.png")} alt={project.name} />
        <div className="card-body">
          <h3 className=" font-weight-medium mb-2 title">
            {project.name.length > 15
              ? `${project.name.substring(0, 15)}...`
              : project.name}
          </h3>
          <p className="card-text mb-3">{project.description}</p>
          <div className="d-flex flex-wrap">
            {project.technology.split(",").map((technology) => (
              <div
                key={technology}
                className="badge font-mono text-white bg-red-400 font-weight-bold mr-2 mb-2"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BounceLeft>
  );
};

export default ProjectCard;
