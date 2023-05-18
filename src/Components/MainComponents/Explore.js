import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Explore = () => {

  const ref = useRef()
  const texture = useTexture("left.jpg")

  const [defaultcolor, setcolor] = useState('#43c1f3')

  useFrame(() => {
    texture.needsUpdate = true
  })

  function Hovered() {
    setcolor('#0180D3')

  }

  function UnHovered() {
    setcolor('#43c1f3')

  }

  useFrame(() => {
    ref.current?.material.color.lerp(new THREE.Color(defaultcolor), 0.04)
  })

  return (
    //  <Image onPointerEnter={() => setcolor('#FF84F4')} onPointerLeave={() => setcolor('#FF37ED')} ref={ref} toneMapped={false} position={[-3.5,-0.25,0]} rotation={[0,Math.PI * 0.45,0]} scale={[5,5,5]} url="artbasel.png" transparent opacity={1} />
    <Plane name='Left_Image' args={[1.15, 1.3]} onPointerEnter={() => Hovered()} onPointerLeave={() => UnHovered()} ref={ref} toneMapped={false} position={[-3.25, -0.2, 0.5]} rotation={[0, Math.PI * 0.45, 0]} scale={[3, 2, 2.5]} url="artbasel.png" transparent opacity={1}>
      <meshPhysicalMaterial side={THREE.DoubleSide} color={'#43c1f3'} map={texture} />
    </Plane>
  )
}

export default Explore;