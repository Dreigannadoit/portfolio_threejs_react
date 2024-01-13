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
            Hi I am a <span className='font-semibold'>Software Engineer</span>👋
            <br />
            Who brings Ideas to life!
        </h1>
    ),
    2: (
        <InfoBox
            text="I have worked on many programming languages with 5 years worth of experience..."
            link="/about"
            btnText="Learn More About Me"
        />
    ),
    3: (
        <InfoBox
            text="I have developed many projects. Here are my best!"
            link="/projects"
            btnText="Visit my Portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Let's bring your vission into reality"
            link="/contact"
            btnText="Contact Me"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return rederContent[currentStage] || null
}

export default HomeInfo