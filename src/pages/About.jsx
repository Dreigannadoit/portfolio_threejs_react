import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences, meStuffs, projects } from '../constants'
import CTA from '../components/CTA';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutHeroSection from '../components/AboutHeroSection';

const About = () => {
  return (
    <div className='h-full w-full flex flex-row relative mt-[5em]'>
      <section className='my-10'>
        <AboutHeroSection />

        <div className="py-14 flex flex-col items-center px-[15%] bg-[#051E30] rounded-[50px] z-[10] relative">
          <h3 className='subhead-text text-white'>My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12 items-center justify-center">
            {skills.map((skill, index) => (
              <div key={index} className='block-container w-20 h-20 flex justify-center'>

                <div className="btn-back rounded-xl"></div>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={skill.imageUrl} 
                    alt={skill.name} 
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
                
                <p className='text-white'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 px-[15%]">
          <h3 className='subhead-text'>Project Timeline</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            I have gone through many projects since mid-2019, but here are the best ones so far. Many of them are open-sourced and if you'd like to see them, feel freet to go to my <Link to="https://github.com/Dreigannadoit" className="underline decoration-1 text-black-500 font-semibold">Github</Link> or <Link to="https://codepen.io/dreigannadoit" className="underline decoration-1 text-black-500 font-semibold">CodePen</Link> Pages. Feel free to contribute your ideas for further enhancements. Your feedback is highly valued!
            </p>
          </div>
          
          {/* returns a error, but works */}
          <div className="mt-12 flex">
              <VerticalTimeline>
                {projects.map((project) => (
                  <VerticalTimelineElement 
                    key={project.name}
                    date={project.date}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img src={project.iconUrl} alt={project.name} className='w-[65%] object-contain' />
                      </div>
                    }
                    iconStyle={{
                      background: project.iconBg
                    }}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: project.iconBg,
                      boxShadow: 'none'
                    }}
                  >

                    <div className='p-2 rounded-md'>
                      <img src={project.img} alt="" className='mb-2' />
                      <div className="leading-3">
                        <h3 className='text-black text-xl font-poppins font-semibold'>
                          {project.name}
                        </h3>
                        <hr />
                      </div>
                      <p>{project.description}</p>
                      <p>{project.responsive}</p>

                      <br />
                      <Link to={project.link} className='bg-[#2b77e7] p-3 mt-5 text-white'>Click To View</Link>
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200 h-[5px] bg-slate-500 mx-[15%]" />
        
        <CTA />

    </section>
      
    </div>
    
  )
}

export default About