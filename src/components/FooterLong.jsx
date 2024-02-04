import { NavLink, Link } from "react-router-dom"
import { meStuffs, socialLinks } from '../constants'
import { useRef, useEffect, useState } from 'react'

import { useInView } from "react-intersection-observer"

const FooterLong = () => {
    const { ref: myRef, inView: myElementIsVisible } = useInView();

    if(!myElementIsVisible){
        document.querySelector('body').classList.remove('hideNav');
    }
    else{
        document.querySelector('body').classList.add('hideNav');
    }
    
    // const myRef = useRef();
    // const [ myElementIsVisible, setMyElementIsVisible ] = useState();
    // console.log('myElementIsVisible', myElementIsVisible);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((e) => {
    //         const entry = e[0];
    //         setMyElementIsVisible(entry.isIntersecting)
    //     })
    //     observer.observe(myRef.current)
    // }, [])

    return (
        <footer className='sm:h-[105vh] h-[180vh] relative rounded-t-[100px] overflow-hidden s-footer'>
            
            <div className="h-[100%] w-[100vw] bg-[#282726] py-[5%] px-[10%]">
                <nav className='w-full h-[15%] text-white' >
                    <ul className='flex justify-between items-center gap-9 h-full'>
                        <li className='sm:text-3xl text-[20px]'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='sm:text-3xl text-[20px]'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="w-full h-[70%] bg-grey sm:h-[75%] py-5 flex sm:flex-row-reverse flex-col-reverse justify-between sm:gap-[5%] gap-[5%]" ref={myRef} >
                    {meStuffs.map((meStuff, index) => (
                        <div key={index} className="h-full w-full flex justify-center items-center sm:flex-row flex-col text-white gap-[2%]">
                            <img src={meStuff.imageLogoLightUrl} alt="" className="w-[40%]" />
                            <br />
                            <div className='sm:w-[55%] w-full flex flex-col justify-between  sm:text-left text-center '>
                                <h1 className="text-[400%] font-bold leading-[100%]">{meStuff.allias}</h1>
                                <p className="">Made By {meStuff.name}</p>
                            </div>
                        </div>
                    ))}

                    <div className="h-2/5 sm:w-2/5 md:h-full md:w-2/5 text-white">
                        <h1 className='text-5xl tracking-tight'>
                            Hello I am <br />
                            <span className='blue-gradient_text font-semibold drop-shadow sm:py-0 py-8'>
                                Drei
                            </span>
                        </h1>
                        <hr className="border-slate-200 h-[5px] bg-white" />
                        <p className='my-6 text-justify'>
                            I'm a self-taught developer proficient in both front-end and back-end development.
                        </p>

                        <Link to="/about" className='btn'>About Me</Link>
                    </div>


                </div>

                <hr className="border-slate-200" />

                <div className="w-full h-[10%] flex sm:flex-row flex-col mt-3 justify-between items-center gap-7">
                    <nav className='sm:h-full sm:w-[20%] h-[20%] w-full'>
                        <ul className='flex flex-row h-full w-full gap-2 justify-between'>
                            {socialLinks.map((socialLink, index) => (
                                <li className='h-full' key={index}>
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
                        <p>PH</p>
                        <img className="h-[50%] border-r-4 pr-2" src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1f5-1f1ed.svg" alt="" />
                        <p>NOV 22, 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterLong