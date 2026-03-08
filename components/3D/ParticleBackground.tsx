'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000

    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10

      // Color gradient between blue and cyan
      const colorChoice = Math.random()
      if (colorChoice > 0.5) {
        colors[i] = 0.23 // Blue R
        colors[i + 1] = 0.51 // Blue G
        colors[i + 2] = 0.96 // Blue B
      } else {
        colors[i] = 0.02 // Cyan R
        colors[i + 1] = 0.71 // Cyan G
        colors[i + 2] = 0.83 // Cyan B
      }
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    )

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particles.rotation.x = elapsedTime * 0.05
      particles.rotation.y = elapsedTime * 0.075

      // Mouse interaction
      particles.rotation.x += mouseY * 0.05
      particles.rotation.y += mouseX * 0.05

      // Wave animation
      const positions = particlesGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        positions[i3 + 2] = Math.sin(elapsedTime + x) * 0.3 + Math.cos(elapsedTime + y) * 0.3
      }
      particlesGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      renderer.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ opacity: 0.6 }}
    />
  )
}
