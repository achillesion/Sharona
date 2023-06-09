import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { useRef, useState, } from 'react';
import { useSpring, animated, config, } from '@react-spring/three';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import "./explorebtnmobile.css";

export default function ExploreBtnMobile() {
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
      ref.current.position.lerp(new THREE.Vector3(-0.9, -2.5, -2), 0.04)
    })

    /*const handleExploreClick = () => {
      window.open('https://www.google.com', '_blank');
    };*/

    const [isOpen, setIsOpen] = useState(false);
    function togglePopUp() {
      setIsOpen(!isOpen);
    }

    return (
      <animated.group dispose={null} scale={scale}>
        <RoundedBox
          onPointerEnter={Btnhovered}
          onPointerLeave={BtnUnhovered}
          ref={ref}
          onClick={togglePopUp}
          position={[-0.9, -1.88, -5]}
          args={[1.42, 0.5, 0.45]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.125} // Radius of the rounded corners. Default is 0.05
          smoothness={5} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshStandardMaterial ref={Btnmaterial} color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={0} />
          <Text font={'Audiowide-Regular.ttf'} scale={[0.2, 0.2, 0.2]} position={[0, 0, 0.25]} >
            EXPLORE

            <Html position={[+4.5, 5, 0]}>
      {isOpen
        ?  ( <div className="m-explore-popup">
          
          <div className='m-pop-text'>
          <div className='m-explore-paragraph'>
          You are about to enter the Sharona 
            decentralized application, currently in 
            beta-testing mode. <br/> <br/>
            Thank you in advance for participating!
            Please share your feedback with chatbot.
          </div>
          {/* <a href='www.google.com' className='link' target='_blank'>staging.sharona.io</a> */}
          <div className='m-explore-link'>
            <a href='https://staging.sharona.io' target="_blank" rel="noreferrer" className='m-explore-a'><i className="bi bi-link-45deg"></i>staging.sharona.io</a>
            <button className="m-mint-close-btn" onClick={togglePopUp}>
            <i className="bi bi-x-circle"></i> close
          </button>
          </div>
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
