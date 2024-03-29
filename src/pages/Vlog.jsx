import React from 'react'
import { vlogEvents } from '../constants'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Vlog = () => {
  return (
    <section className='max-container'>
        <div className="head-text text-center h-2/5 flex flex-col justify-center items-center mb-7">
            <h1  className='blue-gradient_text font-semibold drop-shadow sm:text-[11vh] text-[9vh] sm:py-0 py-8 leading-relaxed' >Updates on Me</h1>
            
            <p className='text-base font-light'>basically, where i update my progress in development proficiency.</p>
        </div>
        
        <div>
            {vlogEvents.map((vlogEvent, index) => (
                <div key={index} className={`md:h-[500px] h-[800px] w-full ${vlogEvent.bg_color} mt-[5%] md:p-11 p-7 flex flex-col md:flex-row gap-5 rounded-lg shadow-2xl`}>

                    <div className="md:h-full h-[50%] md:w-1/2 w-full flex justify-center flex-col">
                        <h1 className='text-4xl font-semibold'>{vlogEvent.headline}</h1>

                        <hr className='bg-stone-950 h-[5px] border-0' />

                        <h2>{vlogEvent.date} - <em>{vlogEvent.time_entry}</em></h2>
                        <br />
                        <p>{vlogEvent.discription}</p>
                    </div>

                    <div className="md:h-full h-[50%] md:w-1/2 w-full rounded-lg overflow-hidden">
                        <LazyLoadImage 
                            src={vlogEvent.img} 
                            width={400} height={400}
                            alt="Image Alt"
                            className='object-cover h-full w-full '
                        />
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Vlog