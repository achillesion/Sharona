import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';


function ExploreMobile(props) {
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
    <Plane name='Left_Image' args={[1.15, 2.2]} onPointerEnter={() => Hovered()} onPointerLeave={() => UnHovered()} ref={ref} toneMapped={false} position={[-4, 0, 0]} rotation={[0, Math.PI * 0.5, 0]} scale={[2.1, 0.75, 1]} url="artbasel.png" transparent opacity={1}>
      <meshPhysicalMaterial side={THREE.DoubleSide} color={'#43c1f3'} map={texture} />
    </Plane>
  )
}

export default ExploreMobile