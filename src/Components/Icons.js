import { useGLTF } from "@react-three/drei"
import * as THREE from 'three';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Icons(props){

   const {nodes} = useGLTF('icons.glb')
   const ref = useRef()

   useFrame(() =>{
     
     ref.current?.position.lerp(new THREE.Vector3(0,0,-1.6),0.045)

   })
     
    return(
        <group ref={ref} scale={[0.6,0.6,0.6]} position={[0,-8,5]} rotation={[Math.PI * 0.5,0,0]} dispose={null}>

    
        <primitive object={props.player ? nodes.play_icon : nodes.pause_icon}/>
        </group>
    )
}