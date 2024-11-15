import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/island_mod.glb'

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const islandRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault()
        setIsRotating(true)

        const clientX = e.touches
            ? e.touches[0].clientX
            : e.clientX

        lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault()
        setIsRotating(false)
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault()

        if (isRotating) {
            const clientX = e.touches
                ? e.touches[0].clientX
                : e.clientX

            const delta = (clientX - lastX.current) / viewport.width;

            islandRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0525;
            console.log("left")
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0525;
        }
    }

    const handleKeyUP = (e) => {
        if (e.key === ' ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current
        } else {
            const rotation = islandRef.current.rotation.y;

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }

            // console.log(normalizedRotation)
        }
    })

    useEffect(() => {
        const canvas = gl.domElement;

        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUP);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);

            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUP);
        }

    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

    return (
        <a.group ref={islandRef} {...props}>
            <group >
                <group rotation={[0, -1.173, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_01_LP_Top_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_02_LP_Top_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_03_LP_Top_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_04_LP_Top_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_05_LP_Top_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top_06_LP_Top_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_01_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_02_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_03_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_04_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_05_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_06_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bottom_07_LP_Bottom_0.geometry}
                        material={materials.Bottom}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cloth_01_LP_DetailsCloth_0.geometry}
                        material={materials.DetailsCloth}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Details_01_LP_DetailsCloth_0.geometry}
                        material={materials.DetailsCloth}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass_01_OtherNature_0.geometry}
                    material={materials.OtherNature}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ground_OtherNature_0.geometry}
                    material={materials.OtherNature}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plant_01_LP_Leaves_0.geometry}
                    material={materials.Leaves}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leaf_01_LP_Leaves_0.geometry}
                    material={materials.Leaves}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leaf_01_LP_Leaves_0_1.geometry}
                    material={materials.Leaves}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leaf_01_LP_Leaves_0_2.geometry}
                    material={materials.Leaves}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sticks_01_OtherNature_0.geometry}
                    material={materials.OtherNature}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_01_LP_BigRocks_0.geometry}
                    material={materials.BigRocks}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rock_02_LP_BigRocks_0.geometry}
                    material={materials.BigRocks}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Tree_01_LP_BigTree_0.geometry}
                    material={materials.BigTree}
                />
            </group>
        </a.group>
    );
}

export default Island