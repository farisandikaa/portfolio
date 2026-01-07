"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import { useRouter } from "next/navigation"

export default function CameraRig({
  monitorRef,
  onScreenOn, // callback untuk nyalain layar
}: {
  monitorRef: React.MutableRefObject<THREE.Mesh | null>
  onScreenOn?: () => void
}) {
  const { camera, clock } = useThree()
  const router = useRouter()

  const startTime = useRef<number | null>(null)
  const zoomStart = useRef(new THREE.Vector3())

  const box = useRef(new THREE.Box3())
  const center = useRef(new THREE.Vector3())
  const size = useRef(new THREE.Vector3())

  const [phase, setPhase] = useState<"rotate" | "pause" | "zoom">("rotate")

  const ROTATE_DURATION = 4
  const PAUSE_DURATION = 0.8
  const ZOOM_DURATION = 2.8
  const radius = 3
  const fallbackTarget = new THREE.Vector3(0, 0.8, 0)

  useFrame(() => {
    const time = clock.getElapsedTime()
    const target =
      monitorRef.current?.getWorldPosition(new THREE.Vector3()) ?? fallbackTarget

    // ===== ROTATE =====
    if (phase === "rotate") {
      if (startTime.current === null) startTime.current = time

      const t = Math.min((time - startTime.current) / ROTATE_DURATION, 1)
      const angle = Math.PI + t * Math.PI * 2 

      camera.position.set(
        target.x + Math.sin(angle) * radius,
        target.y + 1.2,
        target.z + Math.cos(angle) * radius
      )
      camera.lookAt(target)

      if (t === 1) {
        zoomStart.current.copy(camera.position)
        startTime.current = time
        setPhase("pause")
      }
    }

    // ===== PAUSE =====
    if (phase === "pause") {
      camera.lookAt(target)
      if (time - startTime.current! >= PAUSE_DURATION) {
        startTime.current = time
        setPhase("zoom")
        onScreenOn?.() // nyalain layar pas zoom
      }
    }

    // ===== ZOOM CINEMATIC =====
    // ===== ZOOM CINEMATIC =====
    if (phase === "zoom" && monitorRef.current) {
      const tRaw = Math.min((time - startTime.current!) / ZOOM_DURATION, 1)
      const t = THREE.MathUtils.smoothstep(tRaw, 0, 1)

      // bounding box monitor
      box.current.setFromObject(monitorRef.current)
      box.current.getCenter(center.current)

      const cam = camera as THREE.PerspectiveCamera

      // hitung vector dari kamera ke center monitor
      const direction = new THREE.Vector3()
        .subVectors(center.current, zoomStart.current)
        .normalize()

      // posisi akhir: 0.5 unit dari center monitor
      const zoomEnd = new THREE.Vector3()
        .copy(center.current)
        .sub(direction.multiplyScalar(0.5))

      // lerp posisi kamera dengan easing
      camera.position.lerpVectors(zoomStart.current, zoomEnd, t)
      camera.lookAt(center.current)

      // lerp FOV untuk efek cinematic zoom
      cam.fov = THREE.MathUtils.lerp(45, 20, t)
      cam.updateProjectionMatrix()

      if (t === 1) {
        router.push("/")
      }
    }
  })

  return null
}