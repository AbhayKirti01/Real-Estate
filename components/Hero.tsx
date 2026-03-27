'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Sphere, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'motion/react'
import { useRef } from 'react'
import * as THREE from 'three'

function Scene() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.1
    groupRef.current.rotation.z = t * 0.05
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#C5A059"
            speed={3}
            distort={0.4}
            radius={1}
            roughness={0.1}
            metalness={0.8}
            emissive="#C5A059"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
      
      {/* Floating geometric "plots" */}
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={2} position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5 - 5
        ]}>
          <mesh rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>
      ))}
      
      <Environment preset="city" />
      <ContactShadows opacity={0.4} scale={20} blur={2.4} far={4.5} />
    </group>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-6 font-bold"
          >
            Luxury Digital Real Estate
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
            FIND YOUR <br />
            <span className="italic">DREAM</span> PROPERTY
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
          >
            Premium Lands, Homes & Smart Investments. <br />
            Crafted for those who seek the extraordinary.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="group relative px-10 py-4 overflow-hidden rounded-full bg-accent text-white transition-all duration-500 hover:scale-105 shadow-2xl shadow-accent/20">
              <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Explore Properties</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-500 border border-white/10"
            >
              Contact Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}
