import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typewriter from 'typewriter-effect';

import { skills, experiences, meStuffs, projects } from '../constants'
import CTA from '../components/CTA';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text text-center leading-3 flex flex-col'>
        <span className='font-light'>Hello I'm a</span>

        <div className="blue-gradient_text font-semibold drop-shadow sm:py-0 py-8">
          <Typewriter
            // className='blue-gradient_text font-semibold drop-shadow sm:text-[11vh] text-[9vh] sm:py-0 py-8'
            style={{margin: 0, padding: 0}}
            options={{
              strings: ['Software Developer', 'Game Developer','Website Designer', 'WebDev', 'App Developer', 'Quick Learner'], 
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </h1>

      <div className='sm:h-[600px] h-[900px] my-[15%] sm:my-[5%] flex flex-col sm:flex-row-reverse text-center sm:text-left sm:gap-[10%] gap-[1%]'>
        <div className="sm:w-[50%] h-[100%] flex flex-col items-start justify-center">
          {/* TODO: change website */}
          <h3 className='font-light subhead-text'>All About <span className='blue-gradient_text font-semibold drop-shadow sm:py-0 py-8'>Drei</span></h3>

          <hr className="border-slate-200 h-[5px] w-full bg-slate-500" />
          <br />
          <p className='text-justify'>
          I'm a self-taught developer proficient in frontend and backend development. With 4 years of coding experience, I specialize in creating visually appealing interfaces, implementing dynamic features, and integrating databases. I am passionate about website development and constantly stay updated with industry trends. 
          </p> 
        </div>
        
        {meStuffs.map((meStuff, index) => (
          <div key={index} className="relative sm:w-[50%] h-[100%] flex items-center justify-center overflow-hidden bg-slate-300/20 rounded-3xl">
            <img src={meStuff.imageUrl} alt="Hello" className='h-full w-full sm:object-cover object-contain ' />
          </div>
        ))}
      </div>

      <div className="py-10 flex flex-col items-center">
        <h3 className='subhead-text'>My Skills</h3>

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
              
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
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

      <hr className="border-slate-200 h-[5px] bg-slate-500" />
      
      <CTA />

    </section>
  )
}

export default About