'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function RotatingGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create sphere with wireframe
    const geometry = new THREE.SphereGeometry(1.5, 32, 32)
    
    // Solid sphere
    const material = new THREE.MeshPhongMaterial({
      color: 0x0a0a0a,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.8,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Wireframe
    const wireframeGeometry = new THREE.WireframeGeometry(geometry)
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
    })
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
    scene.add(wireframe)

    // Add glowing points
    const pointsGeometry = new THREE.BufferGeometry()
    const pointsCount = 100
    const positions = new Float32Array(pointsCount * 3)

    for (let i = 0; i < pointsCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 1.52

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(points)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x3b82f6, 2)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const animate = () => {
      // Auto rotation
      sphere.rotation.y += 0.002
      wireframe.rotation.y += 0.002
      points.rotation.y += 0.003

      // Mouse interaction
      sphere.rotation.x += (mouseY * 0.05 - sphere.rotation.x) * 0.05
      sphere.rotation.y += (mouseX * 0.05 - sphere.rotation.y) * 0.05

      wireframe.rotation.x = sphere.rotation.x
      wireframe.rotation.y = sphere.rotation.y

      points.rotation.x = sphere.rotation.x
      points.rotation.y = sphere.rotation.y

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
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
      geometry.dispose()
      material.dispose()
      wireframeGeometry.dispose()
      wireframeMaterial.dispose()
      pointsGeometry.dispose()
      pointsMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
