import {  useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

function CameraAnimation() {
    const { mouse } = useThree()
    const ref = useRef()
    useFrame(() => {
      ref.current?.position.lerp(new THREE.Vector3(0 - (mouse.x * 2.4), 0, 5.5 + (mouse.y / 2)), 0.055)
      ref.current?.lookAt(0, 0, 1)
    })
    return (
      <PerspectiveCamera ref={ref} fov={60} position={[0, -40, 10]} makeDefault />
    )
  }
  export default CameraAnimation;