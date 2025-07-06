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
          src="/AIMS 2.0.png"
          title="AIMS 2.0"
          description="A full-stack educational platform designed to manage academic resources with secure, role-based access."
          link="https://aims-2-0-deployment.vercel.app/"
        />
        <ProjectCard
          src="/PragatiPath.png"
          title="PRAGATI PATH" 
          description="An AI-powered agricultural education platform designed to support Indian farmers with personalized learning, crop guidance, and disease detection."
          link="https://pragatipath.onrender.com/public/LandingPage/index.html"
        />
        <ProjectCard
          src="/Codigo.png"
          title="Codigo"
          description="An AI-supported competitive programming platform inspired by HackerRank, designed for beginner training and real-time duels."
          link="https://codigo-94nz.onrender.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
