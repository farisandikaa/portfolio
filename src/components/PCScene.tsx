"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import PCModel from "./PCModel"
import CameraRig from "./CameraRig"

export default function PCScene() {
  const monitorRef = useRef<THREE.Mesh | null>(null)
  const [screenOn, setScreenOn] = useState(false)

  return (
    <Canvas camera={{ position: [0, 1.4, 3], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <PCModel
          onMonitorReady={(mesh) => (monitorRef.current = mesh)}
          screenOn={screenOn} // pass ke PCModel supaya layar nyala
        />
      </Suspense>

      <CameraRig
        monitorRef={monitorRef}
        onScreenOn={() => setScreenOn(true)} // trigger nyalain layar pas zoom
      />
    </Canvas>
  )
}
