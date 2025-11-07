import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingNode({ position, scale }: { position: [number, number, number]; scale: number }) {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
		meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
		meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
	});

	return (
		<mesh ref={meshRef} position={position} scale={scale}>
			<octahedronGeometry args={[1, 0]} />
			<meshStandardMaterial color="#38bdf8" transparent opacity={0.8} emissive="#38bdf8" emissiveIntensity={0.2} />
		</mesh>
	);
}

function AICore() {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
		meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
	});

	return (
		<mesh ref={meshRef} position={[0, 0, 0]}>
			<Sphere args={[1.5, 64, 64]}>
				<MeshDistortMaterial color="#6366f1" transparent opacity={0.7} distort={0.3} speed={2} emissive="#6366f1" emissiveIntensity={0.1} />
			</Sphere>
		</mesh>
	);
}

function ConnectionLines() {
	const nodes = useMemo(
		() => [
			{ position: [-3, 2, -2] as [number, number, number] },
			{ position: [3, -1, 1] as [number, number, number] },
			{ position: [-2, -2, 2] as [number, number, number] },
			{ position: [2, 3, -1] as [number, number, number] },
		],
		[]
	);

	return (
		<group>
			{nodes.map((node, index) => {
				const points = [
					new THREE.Vector3(0, 0, 0), // Center (AI Core)
					new THREE.Vector3(node.position[0], node.position[1], node.position[2]),
				];
				const geometry = new THREE.BufferGeometry().setFromPoints(points);

				return (
					<primitive
						key={`line-${index}`}
						object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#38bdf8", transparent: true, opacity: 0.6 }))}
					/>
				);
			})}
			{nodes.map((node, index) => (
				<FloatingNode key={index} position={node.position} scale={0.3} />
			))}
		</group>
	);
}

export default function HeroScene() {
	return (
		<>
			<OrbitControls
				enableZoom={false}
				enablePan={false}
				autoRotate
				autoRotateSpeed={0.5}
				maxPolarAngle={Math.PI / 1.6}
				minPolarAngle={Math.PI / 3}
			/>

			<ambientLight intensity={0.3} />
			<pointLight position={[10, 10, 10]} intensity={0.8} color="#38bdf8" />
			<pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

			<AICore />
			<ConnectionLines />

			{/* Effet de particules en arrière-plan */}
			<group>
				{Array.from({ length: 50 }, (_, i) => (
					<mesh
						key={i}
						position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]}
						scale={Math.random() * 0.1 + 0.05}
					>
						<sphereGeometry args={[1, 8, 8]} />
						<meshBasicMaterial color={Math.random() > 0.5 ? "#38bdf8" : "#6366f1"} transparent opacity={Math.random() * 0.3 + 0.1} />
					</mesh>
				))}
			</group>
		</>
	);
}
