import { useRef , useEffect } from 'react'

import bridScene from '../assets/3d/bird_flock.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(bridScene)

    const { actions } = useAnimations(animations, birdRef)

    useEffect(() => {
        actions['Scene'].play()
    }, [])

    let rotationY = Math.PI + 210; 

    useFrame(({ clock, camera }) => {
        // update y position of bird this a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.3 + 3
        
        // TODO: bird do not rotate back, fix that later
        // check the birds 
        if(birdRef.current.position.x > camera.position.x + 10) {
            rotationY;
        } else if(birdRef.current.position.x < camera.position.x - 10) {
            rotationY = 0;
        }

        // Apply rotation
        birdRef.current.rotation.y = rotationY;
        
        if(birdRef.current.rotation.y === 0) {
            birdRef.current.position.x -= 0.005;
            birdRef.current.position.z += 0.005;
        } else {
            birdRef.current.position.x += 0.005;
            birdRef.current.position.z -= 0.005;

        }
    })

    return (
        <mesh 
            position={[-5, 2, 1]} 
            scale={[3, 3, 3] } 
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird