import React from "react";
import ProjectCard from "../Project/components/ProjectCard";

const SavedProjects = () => {
  const savedProjects = JSON.parse(localStorage.getItem("savedProjects")) || [];

  return (
    <div className="w-full mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] px-4 py-16 min-h-screen">
      <h1 className="text-5xl font-medium mb-8">Saved Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {savedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SavedProjects;
