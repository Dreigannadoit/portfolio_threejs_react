import Typewriter from 'typewriter-effect';

import { meStuffs } from '../constants'
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const AboutHeroSection = () => {
  return (
    <div className='relative h-[80vh] z-0'> 
        <h1 className='text-center leading-3 absolute w-full z-10 '>
            <span className='font-light text-base px-9 py-2 border-2 border-[#051E30] rounded-full'>Looking for a</span>

            <div className="blue-gradient_text uppercase 2xl:text-9xl lg:text-8xl text-5xl font-bold drop-shadow sm:py-0 py-8 my-6">
                <Typewriter
                    // className='blue-gradient_text font-semibold drop-shadow sm:text-[11vh] text-[9vh] sm:py-0 py-8'
                    style={{margin: 0, padding: 0}}
                    options={{
                    strings: ['Software Developer', 'Game Developer','Website Designer', 'Web Developer', 'App Developer', 'Quick Learner'], 
                    autoStart: true,
                    loop: true,
                    }}
                />
            </div>
        </h1>

        <div className='h-[100%] relative z-20 lg:visible invisible'>   
            <div className='absolute bg-[#00C2FF] 2xl:h-[850px] 2xl:w-[900px] 2xl:bottom-[-50%] lg:h-[700px] lg:w-[700px] lg:bottom-[-70%] rounded-tr-full rounded-full ' ></div>    {/* Circle */}
            {meStuffs.map((meStuff, index) => (
                <div key={index} className="h-[90%] absolute left-24 bottom-0">
                    <img src={meStuff.imageUrl} alt="Hello" className='h-full w-full object-contain ' />
                </div>
            ))}
        </div>

        <div className="info absolute bottom-14 2xl:bottom-32 right-0 w-[50%] z-50 px-5 2xl:pe-20 text-[#051E30]">
            <h1 className='text-4xl 2xl:text-6xl antialiased font-bold my-5'>Who, <span className='text-[#00C2FF]'>Me?</span></h1>
            <p className='mb-14 2xl:text-lg'>I'm a self-taught developer proficient in frontend and backend development. With more than 5 years of coding experience, I specialize in creating visually appealing interfaces, implementing dynamic features, and integrating databases. I am  passionate about website  development and constantly stay updated  with industry trends.</p>

            <div className='flex flex-row gap-5'>

                <NavLink to="/contact" className="bg-[#092b44] p-5 text-white 2xl:text-lg">
                    Let’s work together
                </NavLink>

                {meStuffs.map((meStuff, index) => (
                    <a key={index} href={meStuff.cv} className="bg-[aliceblue] p-5 text-[#051E30] 2xl:text-lg">
                        View CV
                    </a>
                ))}
            </div>
        
        </div>
    </div>
  )
}

export default AboutHeroSection