import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { useRef, useState, } from 'react';
import { useSpring, animated, config, } from '@react-spring/three';
import * as THREE from 'three';


export default function MintBtnMobile() {
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
      ref.current.position.lerp(new THREE.Vector3(0.9, -2.5, -2), 0.04)
    })

    const handleMintClick = () => {
      window.open('https://staging.sharona.io', '_blank');
    };

    return (
      <animated.group dispose={null} scale={scale}>
        <RoundedBox
          onPointerEnter={Btnhovered}
          onPointerLeave={BtnUnhovered}
          ref={ref}
          onClick={handleMintClick}
          position={[0.9, -1.88, -5]}
          args={[1.3, 0.5, 0.45]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.125} // Radius of the rounded corners. Default is 0.05
          smoothness={5} // The number of curve segments. Default is 4
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        >
          <meshStandardMaterial ref={Btnmaterial} color={'#1cbe70'} toneMapped={false} emissive={'#1cbe70'} emissiveIntensity={0} />
          <Text font={'Audiowide-Regular.ttf'} scale={[0.24, 0.24, 0.24]} position={[0, 0, 0.25]} >
            MINT
            <meshStandardMaterial color={'white'} toneMapped={false} emissive={'white'} emissiveIntensity={0.5} />
          </Text>
        </RoundedBox>
      </animated.group>
    )
}
