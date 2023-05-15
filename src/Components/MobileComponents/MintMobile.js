import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

function MintMobile(props) {
  const ref = useRef()
  const texture = useVideoTexture("video-left.mp4")

  const [defaultcolor, setcolor] = useState('#1cbe70')

  function Hovered() {
    setcolor('#1cbe70')

  }

  function UnHovered() {
    setcolor('#06F984')

  }

  useFrame(() => {
    //  ref.current?.material.color.set('#1cbe70')
    ref.current?.material.color.lerp(new THREE.Color(defaultcolor), 0.04)

  })

  return (
    //  <Image ref={ref} onPointerEnter={() => video.pause()} onPointerLeave={() => video.play()} toneMapped={false}  position={[3.5,-0.15,0.5]} rotation={[0,-Math.PI * 0.45,0]} scale={[4.5,2.8,1]} url={props.url} tranparent opacity={1} />
    <Plane name='Right_Image' ref={ref} args={[1.15, 2.2]} onPointerEnter={() => Hovered()} onPointerLeave={() => UnHovered()} toneMapped={false} position={[4, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]} scale={[2.69, 1.69, 1]} url={props.url} tranparent opacity={1}>
      <meshPhysicalMaterial side={THREE.DoubleSide} color={'#1cbe70'} map={texture} />
    </Plane>
  )

}


export default MintMobile