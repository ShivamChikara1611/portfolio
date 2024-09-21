import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.6}
        position={(() => {
          const width = window.innerWidth;
          if (width < 500) return [0, -110, -2.2];
          if (width < 768) return [0, -125, -2.2];
          if (width < 1024) return [0, -125, -2.2];
          if (width < 1280) return [0, -80, -2.2];
          return [0, -80, -2.2];
        })()}
        rotation={(() => {
          const [baseRotationX, baseRotationY, baseRotationZ] = [0.25, 0, 0];
          const time = Date.now() * 0.001; // Convert to seconds
          const verticalRotation = Math.sin(time) * 0.1; // Adjust the multiplier to control rotation speed
          const horizontalRotation = Math.cos(time) * 0.1; // Add horizontal rotation
          return [
            baseRotationX + verticalRotation,
            baseRotationY + horizontalRotation,
            baseRotationZ
          ];
        })()}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 0)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      className={`
        w-full h-[50vh]
        sm:w-[60vw] sm:h-[60vh] sm:absolute sm:right-0 sm:top-0
        md:w-[55vw] md:h-[70vh] md:absolute md:right-0 md:top-0
        lg:w-[50vw] lg:h-[80vh] lg:absolute lg:right-0 lg:top-0
        xl:w-[50vw] xl:h-[90vh] xl:absolute xl:right-0 xl:top-0
      `}
      dpr={[1, 2]}
      camera={{
        position: (() => {
          const getPosition = (width) => {
            if (width < 500) return [15, 2, 750];
            if (width < 768) return [10, 1, 750];
            if (width < 1024) return [5, 0, 900];
            if (width < 1280) return [0, -1, 900];
            return [-5, -2, 700];
          };
          const [position, setPosition] = useState(getPosition(window.innerWidth));
          
          useEffect(() => {
            const handleResize = () => {
              setPosition(getPosition(window.innerWidth));
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
          }, []);

          return position;
        })(),
        fov: (() => {
          const [fov, setFov] = useState(window.innerWidth < 500 ? 30 : 20);
          
          useEffect(() => {
            const handleResize = () => {
              setFov(window.innerWidth < 500 ? 30 : 20);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
          }, []);

          return fov;
        })()
      }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ 
        width: isMobile || window.innerWidth <= 1023 ? '100%' : '60vw', 
        height: isMobile ? '50vh' : '100%',
        position: 'absolute',
        right: 0,
        top: 0,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;