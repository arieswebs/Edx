"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile or reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || 240;
    const height = container.clientHeight || 240;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Group for mouse reaction & rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Low-Poly Core Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x0c1a30,
      metalness: 0.35,
      roughness: 0.45,
      wireframe: false,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // 2. Wireframe / Longitude Grid Sphere
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6484aa,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireSphere = new THREE.Mesh(sphereGeo, wireMat);
    wireSphere.scale.setScalar(1.02);
    group.add(wireSphere);

    // 3. Floating Golden Orbital Ring
    const ringGeo = new THREE.TorusGeometry(1.65, 0.028, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf5b324,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xeaa412,
      emissiveIntensity: 0.15,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3.2;
    ring.rotation.y = Math.PI / 6;
    group.add(ring);

    // 4. Subtle Floating Golden Satellite Particle
    const satelliteGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0xf5b324 });
    const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
    satellite.position.set(1.65, 0, 0);
    ring.add(satellite);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x6484aa, 1.5);
    dirLight2.position.set(-4, -4, -2);
    scene.add(dirLight2);

    // Mouse movement reaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetRotationY = x * 0.7;
      targetRotationX = y * 0.7;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Render loop
    let animationFrameId: number;
    const animateLoop = () => {
      animationFrameId = requestAnimationFrame(animateLoop);

      if (!isVisible) return;

      // Base idle rotation
      group.rotation.y += 0.005;
      ring.rotation.z += 0.008;

      // Smooth mouse follow interpolation
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
      group.rotation.y += (targetRotationY * 0.5 - (group.rotation.y % (Math.PI * 2))) * 0.02;

      renderer.render(scene, camera);
    };

    animateLoop();

    // Clean resize handling
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 240;
      const newH = container.clientHeight || 240;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none relative ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
