import React, {useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Plane } from "@react-three/drei";
import * as THREE from "three";
import ControlsPanel from "./ControlsPanel.jsx";

const CanvasScene = () => {
  const [curve, setCurve] = useState(10);
  const [distance, setDistance] = useState(5);
  const [yHeight, setYHeight] = useState(0);
  const [showGrid, setShowGrid] = useState(true);
  const [ambientLight, setAmbientLight] = useState(true);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 2, 10] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        {ambientLight && <ambientLight intensity={0.5} />}
        <directionalLight position={[2, 5, 3]} intensity={0.8} />
        <OrbitControls />

        {showGrid && <Grid args={[10, 10]} />}

        <mesh position={[0, yHeight, -distance]}>
          <Plane args={[8, 4]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="lightblue"
              side={THREE.DoubleSide}
              wireframe
            />
          </Plane>
        </mesh>
      </Canvas>

      <ControlsPanel
        curve={curve}
        setCurve={setCurve}
        distance={distance}
        setDistance={setDistance}
        yHeight={yHeight}
        setYHeight={setYHeight}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        ambientLight={ambientLight}
        setAmbientLight={setAmbientLight}
      />
      
      <button className="ar-button">Enter AR Mode</button>
    </div>
  );
};

export default CanvasScene;
