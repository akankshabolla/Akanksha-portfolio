import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";

function Planet() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1.8,64,64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={1}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function InteractiveHeroObject() {
  return (
    <div className="hero-3d">
      <Canvas camera={{position:[0,0,5]}}>
        <ambientLight intensity={2}/>
        <pointLight position={[5,5,5]}/>
        
        <Stars
          radius={80}
          depth={50}
          count={3000}
          factor={4}
        />

        <Planet/>

        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}