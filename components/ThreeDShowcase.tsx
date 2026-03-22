'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, MeshDistortMaterial } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

function HouseModel() {
  return (
    <group>
      {/* Base / Land */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </mesh>
      
      {/* House Structure */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, 0.5, 0]}>
          {/* Main Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2, 1.5, 2]} />
            <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.1} />
          </mesh>
          
          {/* Roof */}
          <mesh position={[0, 1.25, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
            <coneGeometry args={[2, 1, 4]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
          </mesh>
          
          {/* Windows / Details */}
          <mesh position={[0.5, 0.2, 1.01]} castShadow>
            <planeGeometry args={[0.4, 0.6]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>
          
          <mesh position={[-0.5, 0.2, 1.01]} castShadow>
            <planeGeometry args={[0.4, 0.6]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </Float>
      
      <Environment preset="city" />
      <ContactShadows opacity={0.4} scale={20} blur={2.4} far={4.5} />
    </group>
  )
}

export default function ThreeDShowcase() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section ref={containerRef} className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-900/5 rounded-full blur-[100px]" 
        />
        
        {/* Floating Glass Elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/3 left-10 w-24 h-24 glass rounded-2xl border border-white/5 rotate-12 opacity-20"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/3 right-10 w-32 h-32 glass rounded-full border border-white/5 -rotate-12 opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-4 font-bold"
          >
            Interactive Experience
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight mb-8"
          >
            EXPLORE YOUR <br /> <span className="italic text-accent">FUTURE SPACE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-md text-lg leading-relaxed mb-12"
          >
            Our interactive 3D models allow you to visualize every detail of your future investment. 
            Rotate, zoom, and experience the layout from every angle.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {['HDR Environment', 'Soft Shadows', 'Realistic Lighting'].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
                <span className="text-sm uppercase tracking-widest font-bold text-white/60">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[600px] w-full rounded-3xl glass overflow-hidden cursor-grab active:cursor-grabbing">
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <HouseModel />
            <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          
          {/* Interaction Guide */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/40 pointer-events-none">
            Drag to Rotate • Scroll to Zoom
          </div>
        </div>
      </div>
    </section>
  )
}
