//React & R3F Components
import { Canvas } from '@react-three/fiber';
import { Text, Preload } from '@react-three/drei';
import { EffectComposer, HueSaturation, Bloom, Noise, SMAA } from '@react-three/postprocessing';
import { useState, useEffect } from 'react';

//Main Components
import { FAQ } from './Components/FAQ/FAQ';
import { MintBtn } from './Components/MintBtn/MintBtn';
import { ExploreBtn } from './Components/ExploreBtn/ExploreBtn';
import Explore from './Components/MainComponents/Explore';
import Mint from './Components/MainComponents/Mint';
import Logo from './Components/MainComponents/Logo';
import FooterIcon from './Components/MainComponents/FooterIcon';
import MainVideo from './Components/MainComponents/MainVideo';
import CameraAnimation from './Components/MainComponents/CameraAnimation';

//Mobile Components
import ExploreMobile from './Components/MobileComponents/ExploreMobile';
import MintMobile from './Components/MobileComponents/MintMobile';
import LogoMobile from './Components/MobileComponents/LogoMobile';
import MainMobileVideo from './Components/MobileComponents/MainMobileVideo';
import ExploreBtnMobile from './Components/ExploreBtn/ExploreBtnMobile';
import MintBtnMobile from './Components/MintBtn/MintBtnMobile';
import CameraAnimationMobile from './Components/MobileComponents/CameraAnimationMobile';

export default function Webgl() {

  const [device, setDevice] = useState('Desktop')

  useEffect(() => {
    if (window.innerWidth < 800) {
      setDevice('Mobile')
    }
    else {
      setDevice('Desktop')
    }

  }, [])



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
          ? <Text font={'Audiowide-Regular.ttf'} scale={[0.5, 0.5, 0.5]} position={[-3.25, 1.5, 0.7]} rotation={[0, Math.PI * 0.45, 0]} >   {/*  This edits top text on images*/}
            EXPLORE
            <meshStandardMaterial color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={1} />
          </Text>
          : <Text font={'Audiowide-Regular.ttf'} scale={[0.3, 0.3, 0.3]} position={[-4, 1.15, 0]} rotation={[0, Math.PI * 0.5, 0]} >
            EXPLORE
            <meshStandardMaterial color={'#43c1f3'} toneMapped={false} emissive={'#43c1f3'} emissiveIntensity={1} />
          </Text>
        }

        {device === 'Desktop'
          ? <Text font={'Audiowide-Regular.ttf'} scale={[0.5, 0.5, 0.5]} position={[3.3, 1.6, 0.5]} rotation={[0, -Math.PI * 0.5, 0]} >   {/*  This edits top text on images*/}
            MINT
            <meshStandardMaterial color={'#1cbe70'} toneMapped={false} emissive={'#1cbe70'} emissiveIntensity={2} />
          </Text>
          : <Text font={'Audiowide-Regular.ttf'} scale={[0.3, 0.3, 0.3]} position={[4.1, 1.2, 0.07]} rotation={[0, -Math.PI * 0.5, 0]} >
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
