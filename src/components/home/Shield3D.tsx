import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, RoundedBox } from '@react-three/drei'
import type { Group } from 'three'
import { canvasDefaults } from '@/lib/three/config'

function ShieldMesh() {
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <RoundedBox args={[2.2, 2.6, 0.35]} radius={0.15} smoothness={4}>
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.4}
            chromaticAberration={0.08}
            anisotropy={0.25}
            distortion={0.15}
            distortionScale={0.25}
            temporalDistortion={0.1}
            iridescence={0.4}
            iridescenceIOR={1.2}
            color="#16a9f6"
            attenuationColor="#0d47a1"
            attenuationDistance={0.8}
          />
        </RoundedBox>
      </Float>

      <mesh position={[0, 0, 0.22]}>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial
          color="#f58220"
          emissive="#f58220"
          emissiveIntensity={0.35}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

function ShieldScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, 2, 4]} intensity={0.8} color="#16a9f6" />
      <pointLight position={[4, -2, 2]} intensity={0.5} color="#f58220" />
      <ShieldMesh />
    </>
  )
}

type Shield3DProps = {
  className?: string
}

export function Shield3D({ className }: Shield3DProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={canvasDefaults.dpr}
        gl={canvasDefaults.gl}
        camera={{
          fov: canvasDefaults.camera.fov,
          near: canvasDefaults.camera.near,
          far: canvasDefaults.camera.far,
          position: canvasDefaults.camera.position,
        }}
      >
        <Suspense fallback={null}>
          <ShieldScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
