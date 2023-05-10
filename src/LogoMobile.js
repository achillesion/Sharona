// export default Logo

import React from 'react'
import { Text3D, useTexture } from '@react-three/drei'

const LogoMobile = () => {

  const texture = useTexture('/logo.png');
  return (
    <>
      <mesh position={[0, 2, -2.1]} scale={[4, 1, 2]}>
        <planeGeometry />
        < meshPhysicalMaterial map={texture} />
      </mesh>
      <Text3D position={[-2.4, 4, -2]} rotation={[1.8,0,0]} scale={[0.4,0.4,0.2]} font={'Audiowide_Regular.json'}>
        TIME IS TOKEN™
        <meshStandardMaterial color={'#2BCA00'} emissiveIntensity={0} />
      </Text3D>
    </>
  )
}

export default LogoMobile