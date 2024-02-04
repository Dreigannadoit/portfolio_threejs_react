import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader'

import Fox from '../models/Fox'
import Dog from '../models/Dog'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import { OrbitControls } from '@react-three/drei'
import Sky from '../models/Sky'

const Contact = () => {
  const formRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [ form, setForm ] = useState(
    { 
      name: '', 
      email: '', 
      message: '' 
    }
  )
  const [ currentAnimation, setCurrentAnimation ] = useState('0|standing_0')
  const [dogPosition, setDogPosition] = useState([0.7, -2.25, 0]);
  const [dogRotation, setRotation] = useState([12.7, -0.8, 0]);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  } 

  const handleFocus = (e) => {
    setCurrentAnimation("0|rollover_0")
  }

  const handleBlur = () => {
    setCurrentAnimation("0|standing_0")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    
    setCurrentAnimation("0|play_dead_0")
    setDogPosition([0.7, -2.25, 0]);
    setRotation([13.2, -0, 0]);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Robert Andrei N. Bamba',
        from_email: form.email,
        to_email: 'dreiabmab@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ). then(() => {
      setIsLoading(false);

      showAlert({
        show: true,
        text: 'Message sent Succssfully.',
        type: 'success'
      })

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("0|standing_0")

        setForm({ 
          name: '', 
          email: '', 
          message: '' 
        })
      }, [3000])

    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
      
      setCurrentAnimation("0|standing_0")

      showAlert({
        show: true,
        text: "Something went wrong, I didn't recieve your message",
        type: 'danger'
      })
    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container gap-7" id='contact'>
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <hr className='bg-black text-black-500 h-[5px] border-none' />
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John Doe'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='john.doe@example.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name='message'
              rows={4}
              className='input'
              placeholder='Your Vision Is My Mission'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...': 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] overflow-hidden rounded-3xl">
        <Canvas
          camera={{
            position: [0, 0, 8],
            fov: 80,
            near: 0.1,
            far: 1000
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight
              position={[0, 0, 1]}
              intensity={4.5}
            />
            <ambientLight intensity={0.7} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={4} />
            
            <Sky />

            <Dog
              currentAnimation={currentAnimation}

              position={dogPosition}
              rotation={dogRotation}
              scale={[0.05, 0.05, 0.05]}
            />
            
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact