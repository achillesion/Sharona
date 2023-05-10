//All imports
import { FAQ } from './Components/FAQ/FAQ';
import Explore from './Components/Explore';
import ExploreMobile from './Components/ExploreMobile';
import Mint from './Components/Mint';
import MintMobile from './Components/MintMobile';
import Logo from './Logo';
import LogoMobile from './LogoMobile';
import FooterIcon from './Components/FooterIcon';
import MainVideo from './Components/MainVideo';
import MainMobileVideo from './Components/MainMobileVideo';
import ExploreBtnMobile from './Components/ExploreBtnMobile';
import MintBtnMobile from './Components/MintBtnMobile';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, PerspectiveCamera, RoundedBox, Preload, CameraControls } from '@react-three/drei';
import { EffectComposer, HueSaturation, Bloom, Noise, SMAA } from '@react-three/postprocessing';
import { useRef, useState, useEffect } from 'react';
import { useSpring, animated, config, } from '@react-spring/three';
import * as THREE from 'three';

export default function Webgl() {

  const [device, setDevice] = useState('Desktop')

  useEffect(() => {
    if (window.innerWidth < 550) {
      setDevice('Mobile')
    }
    else {
      setDevice('Desktop')
    }

  })


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


  function CameraAnimationMobile() {
    const { mouse, scene } = useThree()
    const [looking, setlooking] = useState('center')
    const ref = useRef()
    document.querySelector('.swipe-right').addEventListener('click', () => {
      {
        looking == 'left' ?
          ref.current?.reset(true)
          : ref.current?.setLookAt(-1.3, 0, 0, 0, 0, 0, true)
      }
      setlooking('right')
    })

    document.querySelector('.swipe-left').addEventListener('click', () => {
      {
        looking == 'right' ?
          ref.current?.reset(true)
          : ref.current?.setLookAt(1.3, 0, 0, 0, 0, 0, true)
      }
      setlooking('left')
    })
    return (
      <CameraControls ref={ref} position={[0, -5, 0]} />
    )

  }

  function ExploreBtn() {
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

    const handleExploreClick = () => {
      window.open('https://www.google.com', '_blank');
    };

    return (
      <animated.group dispose={null} scale={scale}>
        <RoundedBox
          onPointerEnter={Btnhovered}
          onPointerLeave={BtnUnhovered}
          ref={ref}
          onClick={handleExploreClick}
          position={[-0.9, -1.88, -5]}
          args={[1.42, 0.5, 0.45]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.125} // Radius of the rounded corners. Default is 0.05
          smoothness={5} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshStandardMaterial ref={Btnmaterial} color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={0} />
          <Text font={'Audiowide-Regular.ttf'} scale={[0.18, 0.18, 0.18]} position={[0, 0, 0.25]} >
            EXPLORE
            <meshStandardMaterial color={'white'} toneMapped={false} emissive={'white'} emissiveIntensity={0.5} />
          </Text>
        </RoundedBox>
      </animated.group>
    )
  }

  function MintBtn() {
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
      Btnmaterial.current?.color.lerp(currentstate ? new THREE.Color('#1cbe70') : new THREE.Color('#1cbe70'), 0.07)
      ref.current.position.lerp(new THREE.Vector3(0.9, -2, -2), 0.04)
    })

    const handleMintClick = () => {
      window.open('https://www.google.com', '_blank');
    };

    return (
      <animated.group dispose={null} scale={scale}>
        <RoundedBox
          onPointerEnter={Btnhovered}
          onPointerLeave={BtnUnhovered}
          ref={ref}
          onClick={handleMintClick}
          position={[0.9, -1.88, -5]}
          args={[1.42, 0.5, 0.45]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.125} // Radius of the rounded corners. Default is 0.05
          smoothness={5} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshStandardMaterial ref={Btnmaterial} color={'#1cbe70'} toneMapped={false} emissive={'#1cbe70'} emissiveIntensity={0} />
          <Text font={'Audiowide-Regular.ttf'} scale={[0.18, 0.18, 0.18]} position={[0, 0, 0.25]} >
            MINT
            <meshStandardMaterial color={'white'} toneMapped={false} emissive={'white'} emissiveIntensity={0.5} />
          </Text>
        </RoundedBox>
      </animated.group>
    )
  }

  return (

    <>
      <i className="swipe-right bi bi-arrow-right-short"></i>
      <i className="swipe-left bi bi-arrow-left-short"></i>
      <div className='social-container'>
        <FAQ />
        <FooterIcon />
      </div>
      <Canvas dpr={1.5} gl={{ antialias: false, alpha: false, stencil: false }} camera={{ fov: 60, position: [0, 0, 8] }}>
        <ambientLight />
        {
          device === 'Mobile'
            ? <CameraAnimationMobile />
            : <CameraAnimation />
        }

        {
          device === 'Mobile'
            ? <MainMobileVideo />
            : <MainVideo />
        }

        {
          device === 'Mobile'
            ? <LogoMobile />
            : <Logo />
        }

        {
          device === 'Mobile'
            ? <ExploreBtnMobile />
            : <ExploreBtn />
        }

        {
          device === 'Mobile'
            ? <MintBtnMobile />
            : <MintBtn />
        }

        {
          device === 'Desktop'
            ? <Mint url={'mint.png'} />
            : <MintMobile url={'mint.png'} />
        }

        {device === 'Desktop'
          ? <Explore />
          : <ExploreMobile />
        }

        {device === 'Desktop'
          ? <Text font={'Audiowide-Regular.ttf'} scale={[0.5, 0.5, 0.5]} position={[-3.37, 1.8, 0.35]} rotation={[0, Math.PI * 0.45, 0]} >   {/*  This edits top text on images*/}
            EXPLORE
            <meshStandardMaterial color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={1} />
          </Text>
          : <Text font={'Audiowide-Regular.ttf'} scale={[0.26, 0.26, 0.26]} position={[-3.8, 1.07, 0]} rotation={[0, Math.PI * 0.5, 0]} >
            EXPLORE
            <meshStandardMaterial color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={1} />
          </Text>
        }

        {device === 'Desktop'
          ? <Text font={'Audiowide-Regular.ttf'} scale={[0.6, 0.6, 0.6]} position={[3.37, 1.8, 0.5]} rotation={[0, -Math.PI * 0.5, 0]} >   {/*  This edits top text on images*/}
            MINT
            <meshStandardMaterial color={'#1cbe70'} toneMapped={false} emissive={'#1cbe70'} emissiveIntensity={2} />
          </Text>
          : <Text font={'Audiowide-Regular.ttf'} scale={[0.4, 0.4, 0.4]} position={[3.9, 1.1, 0.07]} rotation={[0, -Math.PI * 0.5, 0]} >
            MINT
            <meshStandardMaterial color={'#1cbe70'} toneMapped={false} emissive={'#1cbe70'} emissiveIntensity={2} />
          </Text>
        }

        <EffectComposer disableNormalPass>
          <Bloom mipmapBlur radius={0.8} intensity={0.1} luminanceThreshold={0} luminanceSmoothing={0.0} />
          <Noise opacity={0.02} />
          <SMAA />
          <HueSaturation hue={0} saturation={0} />
        </EffectComposer>
        <Preload all />
      </Canvas>
    </>
  );
}