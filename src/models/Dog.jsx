import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from '../assets/3d/dog.glb'

const Dog = ( {currentAnimation, ...props} ) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);

    const { actions } = useAnimations(animations, group);

    console.log(actions)
    useEffect(() => {;
        
        Object.values(actions).forEach((action) => action.stop())

        if(actions[currentAnimation]){
            actions[currentAnimation].play()
        }
    }, [actions, currentAnimation])

    return (
        <group ref={group} {...props} dispose={null}>
        <group>
            <group
            name="RootNode_(gltf_orientation_matrix)"
            rotation={[-Math.PI / 2, 0, 0]}
            >
            <group name="RootNode_(model_correction_matrix)">
                <group
                name="d2a6bc8fe88e4cbca4db3d181738fe46fbx"
                rotation={[Math.PI / 2, 0, 0]}
                >
                <group>
                    <group name="RootNode">
                    <group
                        name="Light"
                        position={[407.625, 590.386, -100.545]}
                        rotation={[1.89, 0.881, -2.045]}
                        scale={100}
                    >
                        <group rotation={[Math.PI / 2, 0, 0]}>
                        <group />
                        </group>
                    </group>
                    <group
                        name="Camera"
                        position={[735.889, 495.831, 692.579]}
                        rotation={[Math.PI, 0.756, 2.68]}
                        scale={100}
                    >
                        <group />
                    </group>
                    <group name="RootNode0">
                        <group name="geo1" />
                        <group name="skeletal3">
                        <group name="0">
                            <group>
                            <primitive object={nodes._rootJoint} />
                            <skinnedMesh
                                name="mesh_0"
                                geometry={nodes.mesh_0.geometry}
                                material={nodes.mesh_0.material}
                                skeleton={nodes.mesh_0.skeleton}
                            />
                            <group />
                            </group>
                        </group>
                        </group>
                    </group>
                    <group name="shiba_inu2" />
                    </group>
                </group>
                </group>
            </group>
            </group>
        </group>
        </group>
    );
}

export default Dog

