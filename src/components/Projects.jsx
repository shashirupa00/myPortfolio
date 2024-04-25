import { useEffect } from "react";
import { allProjects } from "../allProjects.jsx";
import Navbar from "./Navbar";
import Video from "./Video";
import ProjectCard from "./ProjectCard.jsx";
import "../App.css";

function Projects() {
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="relative">
        <Video className="absolute inset-0 h-full w-full object-cover" />

        <div className="flex flex-col items-center justify-center text-center relative z-20 ">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 mt-32">
            Here are some of the projects I've worked on...
          </h1>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl px-6 py-8">
              {allProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  logo={project.logo}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
