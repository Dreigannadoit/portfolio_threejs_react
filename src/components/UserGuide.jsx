import React from 'react'
import arrow from '../assets/icons/keyArrow.svg'

const UserGuide = () => {
    const [counter, setCounter] = React.useState(10);

    React.useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const exitManually = (e) => {
        e.currentTarget.classList.remove('s-auto');
        e.currentTarget.classList.add('s-manual');
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-screen s-guide s-auto" onClick={exitManually}>
            <div className="flex flex-col h-full w-full px-[10%] py-[5%]">
                <div className='h-1/4 w-full flex flex-col justify-center items-center text-white'>
                    <h4 className='font-normal text-3xl'>-- Guide --</h4>
                    <h1 className='font-semibold text-5xl text-center flex gap-4'>&darr; To Navigate Use <span className='sm:block hidden'>Either</span> &darr;</h1>
                </div>

                <div className="flex flex-row h-3/4 w-full justify-between">
                    <div className='h-full sm:w-[48%] w-full flex flex-col items-center justify-center gap-5'>
                        <div className='relative h-1/2 w-full flex justify-center items-center px-[15%]'>
                            <div className="absolute h-[90px] w-[90px] cursor-anim z-10"></div>
                            <div className="absolute h-[110px] w-[110px] cursor-effect bg-slate-500  z-0"></div>
                        </div>
                        <p className='text-center text-2xl text-white font-medium'>
                            HOLD AND RELEASE
                        </p>
                    </div>

                    <div className='h-full sm:w-[1%] sm:block hidden bg-white'></div>

                    <div className='h-full sm:w-[48%] sm:block hidden sm:flex flex-col items-center justify-center gap-5'>
                        <div className='h-1/2 w-full flex flex-col gap-[10px]'>
                            <div className='w-full h-[80px] flex justify-center'>
                                <div className='h-full w-[80px] bg-[#595959] flex justify-center p-3 rounded-[10px] arrow-key-up'>
                                    <img src={arrow} alt="arrow" className='h-[26px]' style={{transform:'rotate(180deg)'}} />
                                </div>
                            </div>

                            <div className='w-full h-[80px] flex flex-row justify-center gap-[10px]'>
                                <div className='h-full w-[80px] bg-[#323232] rounded-[10px] flex justify-center p-3 arrow-key-left'>
                                    <img src={arrow} alt="arrow" className='h-[26px]' style={{transform:'rotate(90deg)'}} />
                                </div>

                                <div className='h-full w-[80px] bg-[#595959] rounded-[10px] flex justify-center p-3 arrow-key-down'>
                                    <img src={arrow} alt="arrow" className='h-[26px]' style={{transform:'rotate(0)'}} />
                                </div>

                                <div className='h-full w-[80px] bg-[#323232] rounded-[10px] flex justify-center p-3 arrow-key-right'>
                                    <img src={arrow} alt="arrow" className='h-[26px]' style={{transform:'rotate(270deg)'}} />
                                </div>
                            </div>
                        </div>

                        <p className='text-center text-2xl text-white font-medium'>
                            THE LEFT OR RIGHT 
                            <br />
                            ARROW KEYS
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute text-white bottom-5 right-5 flex flex-row justify-center items-center gap-5">
                <p>Click Anywhere to Exit or wait </p>
                <div className='h-[70px] w-[70px]  rounded-full border-solid border-4 flex justify-center items-center'>
                    <p className='text-[2.4rem] font-semibold'>{counter}</p>
                </div>
            </div>
        </div>
    )
}

export default UserGuide