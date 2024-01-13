import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = () => {
  return (
    <section className='max-container s-project' id="projects">
      <h1 className='head-text text-center'>
        My <br />
        <span className='blue-gradient_text font-semibold drop-shadow text-[11vh]'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I have gone through many projects over my 4 years of coding, but here are the best ones so far. Many of them are open-sourced and if you'd like to see them, feel freet to go to my Github or CodePen Pages. Feel free to contribute your ideas for further enhancements. Your feedback is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full rounded-md py-[5%] px-8 flex items-center flex-col justify-center c-shad" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="Project icon" className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                  Live To Project
                </Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 h-[5px] bg-slate-500" />
      
      <CTA />
    </section>


  )
}

export default Projects