import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import planeScene from '../assets/3d/bird_flying.glb';
import helicopterScence from '../assets/3d/helicopter.glb';
import { useFrame } from '@react-three/fiber';

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        // console.log(isRotating)
        if(isRotating) {
            actions['ArmatureAction'].play();
            // actions['Main'].play();
        }
        else{
            actions['ArmatureAction'].play();
            // actions['Main'].play();
        }
    }, [actions, isRotating])

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane