import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/AIMS 1.0.png"
          title="Online Tuition Learning Platform"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://vikashgupta16.github.io/aims/"
        />
        <ProjectCard
          src="/PragatiPath.png"
          title="Farming Learning Platform With Custom AI Toolkit" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://pragatipath.onrender.com/public/LandingPage/index.html"
        />
        <ProjectCard
          src="/Codigo.png"
          title="Competeitive Programming Platform With AI Help Generator"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://github.com/Dealer-09/CodeBattle-Arena"
        />
      </div>
    </div>
  );
};

export default Projects;
