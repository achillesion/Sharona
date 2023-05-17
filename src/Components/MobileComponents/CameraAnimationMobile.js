import {  useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { useRef, useState } from 'react';

function CameraAnimationMobile() {
    useThree()
    const [looking, setLooking] = useState('center')
    const ref = useRef()
    document.querySelector('.swipe-right').addEventListener('click', () => {
      if (looking === 'left') {
        ref.current?.reset(true);
        document.querySelector('.swipe-left').style.display = 'block';
        document.querySelector('.swipe-right').style.display = 'block';
      } else {
        ref.current?.setLookAt(-1.3, 0, 0, 0, 0, 0, true);
        document.querySelector('.swipe-left').style.display = 'block';
        document.querySelector('.swipe-right').style.display = 'none';
      }
      setLooking('right');
    });

    document.querySelector('.swipe-left').addEventListener('click', () => {
      if (looking === 'right') {
        ref.current?.reset(true);
        document.querySelector('.swipe-left').style.display = 'block';
        document.querySelector('.swipe-right').style.display = 'block';
      } else {
        
        ref.current?.setLookAt(1.3, 0, 0, 0, 0, 0, true);
        document.querySelector('.swipe-left').style.display = 'none';
      
      }
      setLooking('left');
    });
    
    return (
      <CameraControls ref={ref} position={[0, -5, 0]} />
    )

  }

export default CameraAnimationMobile;