import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container s-project" id="projects">
      <div className="flex flex-wrap gap-20 pb-[10%] justify-center">
        {projects.map((project, index) => (
          <div className="block h-[480px] w-[400px]">
            <div key={index} className="h-full w-full">
              <div className="relative top h-[255px] w-full">
                <div className="pdate absolute h-[52px] w-[194px] flex justify-start z-40 right-5 top-5 items-start">
                  <p className="text-center bg-black-500 w-full ml-5 text-l py-2 rounded-full text-white">
                    {project.date}
                  </p>
                </div>

                <div className="img maskp h-full w-full">
                  <img
                    src={project.img}
                    className="h-full object-cover"
                    alt=""
                  />
                </div>

                <a 
                  className="plink absolute z-40 right-0 bottom-0 h-[67px] w-[67px] p-5 bg-white rounded-full overflow-hidden"
                  
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={arrow} alt="" className="curr z-40 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
                  
                  <img src={project.iconUrl} alt="" className="userhover h-1/2 w-1/2 z-40 absolute top-1/2 left-[-100%] translate-x-[-50%] translate-y-[-50%]" />
                </a>
              </div>

              <div className="py-3 h-[275px] w-full">
                <h1 className="text-2xl">{project.name}</h1>
                <hr />
                <br />
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 h-[5px] bg-slate-500" />

      <CTA />
    </section>
  );
};

export default Projects;
