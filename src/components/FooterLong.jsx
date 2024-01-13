import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { meStuffs, socialLinks } from '../constants'

const FooterLong = () => {
    return (
        <footer className='sm:h-[105vh] h-[180vh] relative rounded-t-[100px] overflow-hidden s-footer'>
            
            <div className="h-[100%] w-[100vw] bg-[#282726] py-[5%] px-[10%]">
                <nav className='w-full h-[15%] text-white'>
                    <ul className='flex justify-between items-center gap-9 h-full'>
                        <li className='sm:text-3xl text-[20px]'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='sm:text-3xl text-[20px]'>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className='sm:text-3xl text-[20px]'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="w-full h-[70%] bg-grey sm:h-[75%] py-5 flex sm:flex-row-reverse flex-col-reverse sm:gap-[5%] gap-[5%]">
                    {meStuffs.map((meStuff) => (
                        <div className="flex flex-row h-3/5 w-full sm:h-full sm:w-3/5 justify-center items-center gap-5">
                            <img src={meStuff.imageLogoLightUrl} alt="" className="sm:h-[90%] w-[80%] object-fit" />
                            <div className="h-full sm:flex-row flex-col gap-0 justify-center items-start sm:block hidden" style={{lineHeight:'80px'}}>
                                <h1 className="sm:text-[6rem] font-bold font-poppins text-white">{meStuff.allias}</h1>
                                <p className='text-white'>Made By {meStuff.name}</p>
                            </div>
                        </div>
                    ))}

                    <div className="h-2/5 w-full md:h-full md:w-2/5 text-white">
                        <h1 className='text-5xl tracking-tight'>Hello I am <span className='blue-gradient_text font-semibold drop-shadow sm:py-0 py-8'>Drei</span></h1>
                        
                        <hr className="border-slate-200 h-[5px] bg-white" />

                        <p className='my-6 '>
                            I'm a self-taught developer proficient in frontend and backend development. 
                        </p>

                        <Link to="/about" className='btn'>About Me</Link>
                    </div>


                </div>

                <hr className="border-slate-200" />

                <div className="w-full h-[10%] flex sm:flex-row flex-col mt-3 justify-between items-center gap-7">
                    <nav className='sm:h-full sm:w-[20%] h-[20%] w-full'>
                        <ul className='flex flex-row h-full w-full gap-2 justify-between'>
                            {socialLinks.map((socialLink) => (
                                <li className='h-full'>
                                    <Link to={socialLink.link} className='h-full flex justify-center items-center'>
                                        <img src={socialLink.iconUrl} alt="" className='h-[30px]' />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='sm:h-full sm:w-[45%] h-[45%] w-full flex items-center justify-center'>
                        <p className='text-white text-center'>&copy;2023 ROBERT ANDREI N. BAMBA || ALL RIGHTS RESERVED</p>
                    </div>

                    <div className='sm:h-full sm:w-[30%] h-[30%] w-full flex flex-row justify-end items-center gap-2 text-white'>
                        <p className='border-r-4 pr-2'>Lanao Del Norte, PH</p>
                        <p>NOV 22, 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterLong