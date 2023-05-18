import React, { useRef, useState, useEffect } from 'react'
import { RoundedBox } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three';

export default function MainMobileVideo() {

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
    vid.src = 'MainVideo.mp4';
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.autoPlay = true;
    return vid;
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const textureref = useRef();

  useEffect(() => {
    video.paused ? setIsPlaying(false) : setIsPlaying(true);
  }, [video]);

  const handlePlay = () => {
    setShowControls(true);
    setTimeout(() => {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }, 0);
    setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  return (
    <>
      <RoundedBox
        position={[0, -0.2, -1.8]}
        scale={[4.6, 2.6, 1]}
        args={[1, 1, 0.2]}
        radius={0.035}
        smoothness={5}
        creaseAngle={0.4}
        onClick={handlePlay}
      >
        <meshPhysicalMaterial toneMapped={false}>
          <videoTexture ref={textureref} attach="map" args={[video]} />
        </meshPhysicalMaterial>
      </RoundedBox>
      {showControls && <ExploreBtn />}
    </>
  );
}