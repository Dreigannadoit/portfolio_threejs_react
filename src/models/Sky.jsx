import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef();
  let rotationSpeed = isRotating ? 0.08 : 0.009; 

  useFrame((_, delta) => {
    skyRef.current.rotation.y += rotationSpeed * delta;

    if (!isRotating && rotationSpeed > 0.009) {
      rotationSpeed -= 0.0001 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;