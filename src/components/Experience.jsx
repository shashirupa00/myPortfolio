import { allExperience } from "../allExperience";

import Video from "./Video";
import Navbar from "./Navbar";
import ResumeCard from "./ResumeCard";

import "../App.css";
import Education from "./Education";

function Experience() {
  return (
    <>
      <div className="relative">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <Video className="fixed top-0 left-0 w-full" />
        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center text-4xl md:text-5xl text-white font-bold pt-32">
              Work Experience
            </div>
            <div>
              {allExperience.map((exp, index) => (
                <ResumeCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center -mt-20 pb-20">
          <div>
            <div className="flex justify-center text-4xl md:text-5xl text-white font-bold pt-32">
              Education
            </div>
            <div>
              <Education />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
