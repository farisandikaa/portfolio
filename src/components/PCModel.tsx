"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useGLTF } from "@react-three/drei"

type Props = {
  onMonitorReady: (mesh: THREE.Mesh) => void
  screenOn: boolean
}

export default function PCModel({ onMonitorReady, screenOn }: Props) {
  const { scene } = useGLTF("/pc.glb")
  const monitorMesh = useRef<THREE.Mesh | null>(null)

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.name.toLowerCase().includes("monitor")) {
        monitorMesh.current = obj
        onMonitorReady(obj)
      }
    })
  }, [scene, onMonitorReady])

  useEffect(() => {
    if (!monitorMesh.current) return

    const mat = monitorMesh.current.material as THREE.MeshStandardMaterial
    mat.emissive.set(screenOn ? "#00ffcc" : "#000000")
    mat.emissiveIntensity = screenOn ? 2.5 : 0
  }, [screenOn])

  return <primitive object={scene} />
}