import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences, meStuffs, projects } from "../constants";
import CTA from "../components/CTA";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AboutHeroSection from "../components/AboutHeroSection";
import { arrow } from "../assets/icons";

const About = () => {
  return (
    <div className="h-full w-full flex flex-row relative mt-[5em]">
      <section className="my-10">
        <AboutHeroSection />

        <div className="py-14 flex flex-col items-center px-[15%] bg-[#051E30] rounded-[50px] z-[10] relative">
          <h3 className="subhead-text text-white">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12 items-center justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="block-container w-20 h-20 flex justify-center"
              >
                <div className="btn-back rounded-xl"></div>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>

                <p className="text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <br />
        <br />
        <br />
        <div className="py-16 px-[15%] s-project">
          <div className="w-full flex justify-between">
            <h3 className="subhead-text w-3/4">Project Timeline</h3>

            <a href="/projects" className="w-1/4 text-center bg-black-500 w-full ml-5 text-l py-2 rounded-full text-white">
              See More
            </a>
          </div>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I have gone through many projects since mid-2019, but here are the
              best ones so far. Many of them are open-sourced and if you'd like
              to see them, feel freet to go to my{" "}
              <Link
                to="https://github.com/Dreigannadoit"
                className="underline decoration-1 text-black-500 font-semibold"
              >
                Github
              </Link>{" "}
              or{" "}
              <Link
                to="https://codepen.io/dreigannadoit"
                className="underline decoration-1 text-black-500 font-semibold"
              >
                CodePen
              </Link>{" "}
              Pages. Feel free to contribute your ideas for further
              enhancements. Your feedback is highly valued!
            </p>
          </div>
          <br />
          <br />
          <br />
          {/* returns a error, but works */}
          <ProjectCard />
        </div>

        <hr className="border-slate-200 h-[5px] bg-slate-500 mx-[15%]" />

        <CTA />
      </section>
    </div>
  );
};

const ProjectCard = () => {
  const cardRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When card comes into view
            entry.target.classList.add('animate-fadeInUp');
            entry.target.classList.remove('opacity-0');
          } else {
            // When card leaves view (optional)
            entry.target.classList.remove('animate-fadeInUp');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Cleanup observer
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-20 pb-[5%] justify-center">
      {projects.slice(0, 4).map((project, index) => (
        <div 
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="CARD-BLOCK block w-[400px] opacity-0 transition-opacity duration-300"
        >
          <div className="h-full w-full">
            <div className="relative top h-[255px] w-full">
              <div className="pdate absolute h-[52px] w-[194px] flex justify-start z-40 right-0 items-start">
                <p className="text-center bg-black-500 w-full ml-5 text-l py-2 rounded-full text-white">
                  {project.date}
                </p>
              </div>

              <div className="img maskp h-full w-full overflow-hidden">
                <img
                  src={project.img}
                  className="h-full object-cover"
                  alt=""
                />
              </div>

              <div className="plink absolute z-40 right-0 bottom-0 h-[67px] w-[67px] p-5 bg-white rounded-full ">
                <a
                  className="h-full w-full flex justify-center items-center"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={arrow} alt="" className="z-40" />
                </a>
              </div>
            </div>

            <div className="py-8 w-full">
              <h1 className="text-2xl">{project.name}</h1>
              <hr />
              <br />
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;