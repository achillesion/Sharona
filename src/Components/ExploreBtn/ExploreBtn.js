import { useFrame} from '@react-three/fiber';
import { Text, RoundedBox,} from '@react-three/drei';
import { useRef, useState } from 'react';
import { useSpring, animated, config, } from '@react-spring/three';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import "./explorebtn.css";

export function ExploreBtn() {
    const Btnmaterial = useRef()
    const [currentstate, setstate] = useState(false)
    const { scale } = useSpring({
      scale: currentstate ? 1.05 : 1,
      config: config.wobbly
    })

    function Btnhovered(e) {
      setstate(true)
      document.body.style.cursor = 'pointer'
      Btnmaterial.current.emissiveIntensity = 0.8
    }

    function BtnUnhovered(e) {
      setstate(false)
      document.body.style.cursor = 'default'
      Btnmaterial.current.emissiveIntensity = 0
    }

    const ref = useRef()
    useFrame(() => {
      Btnmaterial.current?.color.lerp(currentstate ? new THREE.Color('#43c1f3') : new THREE.Color('#43c1f3'), 0.07)
      ref.current.position.lerp(new THREE.Vector3(-0.9, -2, -2), 0.04)
    })


    const [isOpen, setIsOpen] = useState(false);

  function togglePopUp() {
    setIsOpen(!isOpen);
  }

    return (
      <animated.group dispose={null} scale={scale}>
        <RoundedBox
          onPointerEnter={Btnhovered}
          onPointerLeave={BtnUnhovered}
          onClick={togglePopUp}
          ref={ref}
          position={[-0.9, -1.88, -5]}
          args={[1.42, 0.5, 0.45]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.125} // Radius of the rounded corners. Default is 0.05
          smoothness={5} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshStandardMaterial ref={Btnmaterial} color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={0} />
          <Text font={'Audiowide-Regular.ttf'} scale={[0.18, 0.18, 0.18]} position={[0, 0, 0.25]}>
            Explore
            <Html>
      {isOpen
        ?  ( <div className="explore-popup">
          <button className="close-btn" onClick={togglePopUp}>
            X
          </button>
          <div className='pop-text'>
          <div className='paragraph'>
            you are about to enter the sharona 
            decentralized application, currently in 
            beta-testing mode. <br/> <br/>
            Thank you in advance for participating!
            Please share your feedback with chatbot.
          </div>
          {/* <a href='www.google.com' className='link' target='_blank'>staging.sharona.io</a> */}
          <div className='link'><a href='https://www.google.com' target="_blank" rel="noreferrer">staging.sharona.io</a></div>
          </div>
          </div>)
        : null}
    </Html>

            <meshStandardMaterial color={'white'} toneMapped={false} emissive={'white'} emissiveIntensity={0.5} />
          </Text>
        </RoundedBox>
      </animated.group>
    )
  }
