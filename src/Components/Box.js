import {useSpring, animated } from '@react-spring/three'
import { useRef } from 'react'

export default function Box() {
    const meshRef = useRef()

    const STEP_DURATION = 500;

    const { carouselRotation,color } = useSpring({
        from: {
          carouselRotation: 0,
        },
        to: [
          {
            carouselRotation: -Math.PI / 2,
            delay: STEP_DURATION,
          },
          {
            carouselRotation: -Math.PI,
            delay: STEP_DURATION,
          },
          {
            carouselRotation: -1.5 * Math.PI,
            delay: STEP_DURATION,
          },
          {
            carouselRotation: -2 * Math.PI,
            delay: STEP_DURATION,
          },
        ],
       
        config: {
          mass: 5,
          tension: 800,
          friction: 50,
        },
        loop: true,
        immediate: true,
      });
    
  
    return (
        <animated.group ref={meshRef} rotation-y={carouselRotation} rotation-z={carouselRotation}>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={'red'} />
      </mesh>
      </animated.group>
    )
  }