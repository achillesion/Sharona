import {  useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { useRef, useState } from 'react';

function CameraAnimationMobile() {
    useThree()
    const [looking, setlooking] = useState('center')
    const ref = useRef()
    document.querySelector('.swipe-right').addEventListener('click', () => {
        looking === 'left' ?
          ref.current?.reset(true)
          : ref.current?.setLookAt(-1.3, 0, 0, 0, 0, 0, true)
      setlooking('right')
    })

    document.querySelector('.swipe-left').addEventListener('click', () => {
        looking === 'right' ?
          ref.current?.reset(true)
          : ref.current?.setLookAt(1.3, 0, 0, 0, 0, 0, true)
      setlooking('left')
    })
    return (
      <CameraControls ref={ref} position={[0, -5, 0]} />
    )

  }

export default CameraAnimationMobile;