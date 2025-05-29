import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => {
    return (
        <div className="info-box text-center">
            <p className="font-medium sm:text-xl text-center">{text}</p>
            <Link to={link} className="neo-brutalism-white neo-btn">
                {btnText}
                <img src={arrow} className="w-4 h-4 object-contain" />
            </Link>
        </div>
    )
}

const rederContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue p-4 px-8 text-white mx-5">
            Hi, I'm a <span className='font-semibold'>Software Engineer</span> 👋
            <br />
            I craft solutions, <span className="font-semibold">build possibilities</span>,  
            <br /> 
            and help ideas <span className='italic'>take flight</span>.
        </h1>
    ),
    2: (
        <InfoBox
            text="Since mid-2019, I've danced with HTML, tangoed with CSS, and orchestrated JavaScript symphonies in a delightful coding journey."
            link="/about"
            btnText="Learn More About Me"
        />
    ),
    3: (
        <InfoBox
            text="I have successfully developed numerous projects. Here are some of my finest accomplishments:"
            link="/projects"
            btnText="Visit my Portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Let's bring your vision into reality"
            link="/contact"
            btnText="Contact Me"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return rederContent[currentStage] || null
}

export default HomeInfo