import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import UserGuide from '../components/UserGuide'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4 
  audioRef.current.loop = true
  const [ isRotating, setIsRotating ] = useState(false);
  const [ currentStage, setCurrentStage ] = useState(1)
  const [ isPlayingMusic, setiIsPlayingMusic ] = useState(false)

  useEffect(() =>{
    if(isPlayingMusic) {
      audioRef.current.play()
    }

    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1 , 4.7, 0]

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; 
    } else {
      screenScale = [1, 1, 1]; 
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition, rotation;
    let rotationy = 0.1

    if(window.innerWidth < 768) {
      screenScale = [1.7, 1.75, 1.7];
      // screenScale = [0.21, 0.21, 0.21];  
      screenPosition = [0, -2.5, -10]
    } else {
      screenScale = [2.5, 2.5, 2.5];
      // screenScale = [0.3, 0.3, 0.3]; 
      screenPosition = [0, -2.5, -10]
    }

    if(isRotating) {
      rotation = [0, 1.5, 0.1]
      // rotation = [0, 16.1, 0.2]

    } else if(!isRotating) {
      rotation = [0, 1.5, 0.1]
      // rotation = [0, 16.1, 0.1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition, rotation] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative hide-footer" id='home'>
      <UserGuide />

      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[7, 10, 1]}
            intensity={2}
           />
          <ambientLight intensity={0.5} />
          {/* <pointLight  /> */}
          {/* <spotLight /> */}
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />

          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          
          <Plane
            isRotating = {isRotating}
            scale = {planeScale}
            position = {planePosition}
            rotation = {rotation}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon} 
          alt="sound" 
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setiIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      
    </section>
  )
}

export default Home