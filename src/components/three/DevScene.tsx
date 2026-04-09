"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Html,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { profile } from "@/lib/profile";

type OrbitItem = {
  label: string;
  radius: number;
  speed: number;
  yAmp: number;
  offset: number;
  tone: 0 | 1 | 2;
};

function createOrbitItems(labels: readonly string[]) {
  const items: OrbitItem[] = [];
  let cursor = 0;
  let ring = 0;
  let capacity = 8;

  while (cursor < labels.length) {
    const slice = labels.slice(cursor, cursor + capacity);
    for (let i = 0; i < slice.length; i += 1) {
      items.push({
        label: slice[i]!,
        radius: 1.5 + ring * 0.55,
        speed: 0.16 + ring * 0.03,
        yAmp: 0.22 + ring * 0.03,
        offset: (i / slice.length) * Math.PI * 2,
        tone: ((ring + i) % 3) as 0 | 1 | 2,
      });
    }
    cursor += slice.length;
    ring += 1;
    capacity += 4;
  }

  return { items, ringCount: ring };
}

function OrbitNode({
  item,
  selected,
  onSelect,
}: {
  item: OrbitItem;
  selected: string | null;
  onSelect: (label: string | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || selected === item.label;

  const color =
    item.tone === 0 ? "#3d54ff" : item.tone === 1 ? "#00e5ff" : "#a78bfa";

  return (
    <group>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onPointerDown={(e) => {
          e.stopPropagation();
          onSelect(selected === item.label ? null : item.label);
        }}
        scale={active ? 1.22 : 1}
      >
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 1 : 0.6}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      <Html
        center
        distanceFactor={20}
        style={{
          pointerEvents: "none",
          transform: "translate3d(0,0,0)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 2.2,
            padding: "1px 3px",
            borderRadius: 999,
            background: active ? "rgba(23,26,38,0.62)" : "rgba(23,26,38,0.46)",
            border: "0.5px solid rgba(238,242,255,0.08)",
            color: active ? "rgba(238,242,255,0.94)" : "rgba(238,242,255,0.78)",
            boxShadow: active ? "0 16px 50px rgba(0,0,0,0.35)" : "none",
            backdropFilter: "blur(10px)",
            whiteSpace: "nowrap",
          }}
        >
          {item.label}
        </div>
      </Html>
    </group>
  );
}

function OrbitalNodes({
  items,
  selected,
  onSelect,
}: {
  items: OrbitItem[];
  selected: string | null;
  onSelect: (label: string | null) => void;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.y = t * 0.12;
    group.current.children.forEach((child, index) => {
      const item = items[index];
      const a = t * item.speed + item.offset;
      const y = Math.sin(a * 0.9) * item.yAmp;
      child.position.set(Math.cos(a) * item.radius, y, Math.sin(a) * item.radius);
    });
  });

  return (
    <group ref={group}>
      {items.map((item) => (
        <group key={item.label}>
          <OrbitNode item={item} selected={selected} onSelect={onSelect} />
        </group>
      ))}
    </group>
  );
}

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!mesh.current) return;
    mesh.current.rotation.x = t * 0.25;
    mesh.current.rotation.y = t * 0.35;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[0.85, 2]} />
        <meshStandardMaterial
          color="#1b2140"
          emissive="#3d54ff"
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function Rings({ count }: { count: number }) {
  const rings = useMemo(() => {
    const out: { r: number; o: number }[] = [];
    const baseOpacity = 0.22;
    for (let i = 0; i < Math.max(4, count + 1); i += 1) {
      out.push({ r: 1.5 + i * 0.55, o: Math.max(0.06, baseOpacity - i * 0.03) });
    }
    return out;
  }, [count]);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {rings.map((ring) => (
        <mesh key={ring.r} position={[0, -0.02, 0]}>
          <ringGeometry args={[ring.r - 0.01, ring.r + 0.01, 128]} />
          <meshBasicMaterial
            color="#00e5ff"
            transparent
            opacity={ring.o}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function DevScene() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [interacting, setInteracting] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const { items, ringCount } = useMemo(
    () => createOrbitItems(profile.fortyTwoHighlights),
    [],
  );

  const zoom = (dir: "in" | "out") => {
    const controls = controlsRef.current;
    if (!controls) return;
    const object: THREE.Camera = controls.object;
    const target: THREE.Vector3 = controls.target;
    const current = object.position.distanceTo(target);
    const factor = dir === "in" ? 0.84 : 1.18;
    const next = THREE.MathUtils.clamp(current * factor, 2.2, 10.5);
    const v = new THREE.Vector3()
      .subVectors(object.position, target)
      .normalize()
      .multiplyScalar(next);
    object.position.copy(target).add(v);
    controls.update();
  };

  const reset = () => {
    const controls = controlsRef.current;
    if (!controls) return;
    controls.reset();
    setSelected(null);
  };

  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl sm:h-[500px] lg:h-[540px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-4">
        <div className="pointer-events-auto rounded-full border border-stroke bg-foreground/45 px-3 py-1 font-mono text-xs text-muted">
          drag para rodar · scroll para zoom
        </div>
        {selected ? (
          <div className="pointer-events-auto rounded-full border border-stroke bg-foreground/45 px-3 py-1 font-mono text-xs text-text/90">
            {selected}
          </div>
        ) : null}
      </div>

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onPointerMissed={() => setSelected(null)}
      >
        <color attach="background" args={["#0e111b"]} />
        <fog attach="fog" args={["#0e111b", 3.5, 10]} />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-2.5, -1.5, 2]} intensity={0.9} color="#3d54ff" />

        <Rings count={ringCount} />
        <Core />
        <OrbitalNodes items={items} selected={selected} onSelect={setSelected} />

        <Sparkles
          count={110}
          scale={[9, 4.2, 7]}
          size={1.8}
          speed={0.6}
          opacity={0.35}
          color="#c7d2fe"
        />

        <Environment preset="city" />
        <OrbitControls
          ref={controlsRef}
          enableZoom
          enablePan
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.75}
          zoomSpeed={0.8}
          minDistance={2.2}
          maxDistance={10.5}
          autoRotate={!interacting}
          autoRotateSpeed={0.75}
          onStart={() => setInteracting(true)}
          onEnd={() => setInteracting(false)}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/90 to-transparent" />
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          type="button"
          onClick={() => zoom("in")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-foreground/45 text-muted transition-colors hover:text-text"
          aria-label="Zoom in"
          title="Zoom in"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => zoom("out")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-foreground/45 text-muted transition-colors hover:text-text"
          aria-label="Zoom out"
          title="Zoom out"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-foreground/45 text-muted transition-colors hover:text-text"
          aria-label="Reset view"
          title="Reset view"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
