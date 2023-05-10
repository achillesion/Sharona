// export default Logo

import React from 'react'
import { Text3D, useTexture } from '@react-three/drei'

const Logo = () => {

  const texture = useTexture('/logo.png');
  return (
    <>
      <mesh position={[0, 2, -2.1]} scale={[4, 1, 2]}>
        <planeGeometry />
        < meshPhysicalMaterial map={texture} />
      </mesh>
      <Text3D position={[-2.25, 2.5, -1]} rotation={[1.8,0,0]} scale={[0.4,0.4,0.125]} font={'Audiowide_Regular.json'}>
        TIME IS TOKEN
        <meshStandardMaterial color={'#2BCA00'} emissiveIntensity={0} />
      </Text3D>
      <Text3D position={[2.45, 2.45, -0.80]} rotation={[1.8,0,0]} scale={[0.15,0.15,0.05]} font={'Audiowide_Regular.json'}>
        ™
        <meshStandardMaterial color={'#2BCA00'} emissiveIntensity={0} />
      </Text3D>
    </>
  )
}

export default Logo