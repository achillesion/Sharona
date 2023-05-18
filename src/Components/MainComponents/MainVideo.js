import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei';
import { TextureLoader } from 'three';

export default function MainVideo() {

  function ExploreBtn() {
    const [playTexture, pauseTexture] = useLoader(TextureLoader, [
      'Play.png',
      'Pause.png',
    ]);
  
    return (
      <mesh scale={0.8} position={[0, -0.2, -1.65]}>
        <planeBufferGeometry args={[1, 1]} />
        <meshPhysicalMaterial transparent map={isPlaying ? pauseTexture : playTexture} />
      </mesh>
    );
  }

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "MainVideo.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.autoPlay = true;
    return vid;
  });

  const textureRef = useRef();

  useFrame(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      textureRef.current.needsUpdate = true;
    }
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <>
      <RoundedBox
        position={[0, -0.2, -1.8]}
        scale={[4.6, 2.6, 1]}
        args={[1, 1, 0.2]}
        radius={0}
        smoothness={5}
        creaseAngle={0.4}
        onClick={handlePlayPause}
        onPointerOver={() => setIsHovering(false)}
        onPointerOut={() => setIsHovering(true)}
      >
        <meshStandardMaterial toneMapped={false}>
          <videoTexture ref={textureRef} attach="map" args={[video]} />
        </meshStandardMaterial>
      </RoundedBox>
      {!isHovering && <ExploreBtn />}
    </>
  );
}