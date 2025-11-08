import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere, Text, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Composant pour les paquets de données qui circulent
function DataPacket({ startPos, endPos, delay }: { startPos: [number, number, number]; endPos: [number, number, number]; delay: number }) {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		if (!meshRef.current) return;

		const t = ((state.clock.elapsedTime + delay) % 4) / 4; // Cycle de 4 secondes
		const pos = new THREE.Vector3().lerpVectors(new THREE.Vector3(...startPos), new THREE.Vector3(...endPos), t);

		meshRef.current.position.copy(pos);
		meshRef.current.rotation.x = state.clock.elapsedTime * 2;
		meshRef.current.rotation.y = state.clock.elapsedTime * 1.5;

		// Fade in/out aux extrémités
		const material = meshRef.current.material as THREE.MeshStandardMaterial;
		material.opacity = Math.sin(t * Math.PI);
	});

	return (
		<mesh ref={meshRef}>
			<tetrahedronGeometry args={[0.1]} />
			<meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} transparent />
		</mesh>
	);
}

// Hologramme de code qui flotte
function CodeHologram() {
	const groupRef = useRef<THREE.Group>(null);

	useFrame((state) => {
		if (!groupRef.current) return;
		groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
		groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
	});

	return (
		<group ref={groupRef} position={[6, 0, -3]}>
			<Text fontSize={0.15} color="#10b981" anchorX="left" anchorY="top" position={[0, 1, 0]}>
				{`const portfolio = {\n  name: "Joachim",\n  skills: ["Cloud", "AI"],\n  passion: "Innovation"\n};`}
			</Text>
			<mesh position={[0, 0, -0.1]}>
				<planeGeometry args={[3, 2]} />
				<meshStandardMaterial color="#0f172a" transparent opacity={0.3} emissive="#10b981" emissiveIntensity={0.05} />
			</mesh>
		</group>
	);
}

function FloatingNode({ position, scale, nodeType }: { position: [number, number, number]; scale: number; nodeType: string }) {
	const meshRef = useRef<THREE.Mesh>(null);
	const [hovered, setHovered] = useState(false);

	useFrame((state) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x = state.clock.elapsedTime * (0.5 + Math.sin(state.clock.elapsedTime) * 0.1);
		meshRef.current.rotation.y = state.clock.elapsedTime * (0.3 + Math.cos(state.clock.elapsedTime) * 0.1);
		meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.4;

		// Effet de pulsation
		const pulseFactor = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
		meshRef.current.scale.setScalar(scale * pulseFactor * (hovered ? 1.3 : 1));
	});

	const nodeColors = {
		cloud: "#38bdf8", // Cyan pour Cloud
		ai: "#6366f1", // Purple pour AI
		code: "#10b981", // Green pour Code
		data: "#f59e0b", // Orange pour Data
	};

	const shapes = {
		cloud: <octahedronGeometry args={[1, 0]} />,
		ai: <icosahedronGeometry args={[1, 0]} />,
		code: <boxGeometry args={[1.2, 1.2, 1.2]} />,
		data: <dodecahedronGeometry args={[1, 0]} />,
	};

	return (
		<Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
			<mesh ref={meshRef} position={position} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
				{shapes[nodeType as keyof typeof shapes] || shapes.cloud}
				<meshStandardMaterial
					color={nodeColors[nodeType as keyof typeof nodeColors] || nodeColors.cloud}
					transparent
					opacity={hovered ? 1.0 : 0.8}
					emissive={nodeColors[nodeType as keyof typeof nodeColors] || nodeColors.cloud}
					emissiveIntensity={hovered ? 0.4 : 0.2}
					wireframe={hovered}
				/>
			</mesh>

			{/* Étiquette du node */}
			<Text
				position={[position[0], position[1] - 1.5, position[2]]}
				fontSize={0.3}
				color="#38bdf8"
				anchorX="center"
				anchorY="middle"
				visible={hovered}
			>
				{nodeType.toUpperCase()}
			</Text>
		</Float>
	);
}

function AICore() {
	const meshRef = useRef<THREE.Mesh>(null);
	const ringRef1 = useRef<THREE.Mesh>(null);
	const ringRef2 = useRef<THREE.Mesh>(null);
	const ringRef3 = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
		meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;

		// Rotation des anneaux orbitaux
		if (ringRef1.current) {
			ringRef1.current.rotation.x = state.clock.elapsedTime * 0.5;
			ringRef1.current.rotation.z = state.clock.elapsedTime * 0.3;
		}
		if (ringRef2.current) {
			ringRef2.current.rotation.y = state.clock.elapsedTime * -0.4;
			ringRef2.current.rotation.z = state.clock.elapsedTime * 0.2;
		}
		if (ringRef3.current) {
			ringRef3.current.rotation.x = state.clock.elapsedTime * -0.3;
			ringRef3.current.rotation.y = state.clock.elapsedTime * 0.6;
		}
	});

	return (
		<Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
			{/* Cœur IA principal */}
			<mesh ref={meshRef} position={[0, 0, 0]}>
				<Sphere args={[1.5, 64, 64]}>
					<MeshDistortMaterial color="#6366f1" transparent opacity={0.8} distort={0.4} speed={3} emissive="#6366f1" emissiveIntensity={0.2} />
				</Sphere>
			</mesh>

			{/* Anneaux orbitaux */}
			<mesh ref={ringRef1} position={[0, 0, 0]}>
				<torusGeometry args={[2.5, 0.05, 16, 100]} />
				<meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} transparent opacity={0.8} />
			</mesh>

			<mesh ref={ringRef2} position={[0, 0, 0]}>
				<torusGeometry args={[3.2, 0.03, 16, 100]} />
				<meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.4} transparent opacity={0.6} />
			</mesh>

			<mesh ref={ringRef3} position={[0, 0, 0]}>
				<torusGeometry args={[3.8, 0.02, 16, 100]} />
				<meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} transparent opacity={0.5} />
			</mesh>

			{/* Particules autour du cœur */}
			<Sparkles count={100} scale={6} size={3} speed={0.4} color="#38bdf8" />
		</Float>
	);
}

function ConnectionLines() {
	const nodes = useMemo(
		() => [
			{ position: [-4, 2, -2] as [number, number, number], type: "cloud" },
			{ position: [4, -1, 1] as [number, number, number], type: "code" },
			{ position: [-2, -3, 2] as [number, number, number], type: "data" },
			{ position: [2, 3, -1] as [number, number, number], type: "ai" },
		],
		[]
	);

	const lineRef = useRef<THREE.Group>(null);

	useFrame((state) => {
		if (!lineRef.current) return;
		// Animation subtile des lignes
		lineRef.current.children.forEach((line, index) => {
			if (line instanceof THREE.Line) {
				const material = line.material as THREE.LineBasicMaterial;
				material.opacity = 0.4 + Math.sin(state.clock.elapsedTime + index) * 0.3;
			}
		});
	});

	return (
		<group ref={lineRef}>
			{/* Lignes de connexion animées */}
			{nodes.map((node, index) => {
				const points = [
					new THREE.Vector3(0, 0, 0), // Center (AI Core)
					new THREE.Vector3(node.position[0], node.position[1], node.position[2]),
				];
				const geometry = new THREE.BufferGeometry().setFromPoints(points);

				// Couleurs différentes selon le type de node
				const colors = { cloud: "#38bdf8", ai: "#6366f1", code: "#10b981", data: "#f59e0b" };
				const color = colors[node.type as keyof typeof colors];

				return (
					<primitive
						key={`line-${index}`}
						object={
							new THREE.Line(
								geometry,
								new THREE.LineBasicMaterial({
									color,
									transparent: true,
									opacity: 0.6,
									linewidth: 2,
								})
							)
						}
					/>
				);
			})}

			{/* Nodes flottants avec types spécifiques */}
			{nodes.map((node, index) => (
				<FloatingNode key={index} position={node.position} scale={0.4} nodeType={node.type} />
			))}

			{/* Données qui circulent le long des lignes */}
			{nodes.map((node, index) => (
				<DataPacket key={`data-${index}`} startPos={[0, 0, 0]} endPos={node.position} delay={index * 0.5} />
			))}
		</group>
	);
}

export default function HeroScene({ isBackground = false }: { isBackground?: boolean }) {
	const sceneRef = useRef<THREE.Group>(null);

	useFrame((state) => {
		if (!sceneRef.current) return;
		// Rotation très subtile de toute la scène
		sceneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
	});

	// Opacité réduite pour le mode arrière-plan
	const opacity = isBackground ? 0.3 : 1;
	const intensity = isBackground ? 0.5 : 1;

	return (
		<group ref={sceneRef}>
			<OrbitControls
				enableZoom={false}
				enablePan={false}
				autoRotate
				autoRotateSpeed={isBackground ? 0.1 : 0.3}
				maxPolarAngle={Math.PI / 1.4}
				minPolarAngle={Math.PI / 4}
				enabled={!isBackground}
			/>

			{/* Éclairage amélioré */}
			<ambientLight intensity={0.2 * intensity} />
			<pointLight position={[10, 10, 10]} intensity={1.2 * intensity} color="#38bdf8" />
			<pointLight position={[-10, -10, -10]} intensity={0.8 * intensity} color="#6366f1" />
			<spotLight position={[0, 10, 0]} angle={0.3} intensity={0.5 * intensity} color="#8b5cf6" castShadow />

			{/* Éléments principaux */}
			<AICore />
			<ConnectionLines />
			<CodeHologram />

			{/* Nuage de particules intelligent */}
			<group>
				{Array.from({ length: 80 }, (_, i) => {
					const angle = (i / 80) * Math.PI * 2;
					const radius = 8 + Math.random() * 4;
					const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
					const y = (Math.random() - 0.5) * 8;
					const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;

					return (
						<Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.2}>
							<mesh position={[x, y, z]} scale={Math.random() * 0.08 + 0.02}>
								<sphereGeometry args={[1, 6, 6]} />
								<meshStandardMaterial
									color={i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#6366f1" : "#10b981"}
									transparent
									opacity={Math.random() * 0.4 + 0.2}
									emissive={i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#6366f1" : "#10b981"}
									emissiveIntensity={0.3}
								/>
							</mesh>
						</Float>
					);
				})}
			</group>

			{/* Grille futuriste en arrière-plan */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
				<planeGeometry args={[20, 20, 20, 20]} />
				<meshStandardMaterial color="#0f172a" transparent opacity={0.1} wireframe emissive="#38bdf8" emissiveIntensity={0.02} />
			</mesh>

			{/* Cercles d'énergie */}
			{[3, 5, 7].map((radius, index) => (
				<mesh key={index} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
					<torusGeometry args={[radius, 0.01, 16, 100]} />
					<meshStandardMaterial color="#38bdf8" transparent opacity={0.2 - index * 0.05} emissive="#38bdf8" emissiveIntensity={0.1} />
				</mesh>
			))}

			{/* Effet de portail/vortex */}
			<Sparkles count={200} scale={15} size={2} speed={0.2} color={["#38bdf8", "#6366f1", "#8b5cf6", "#10b981"]} />
		</group>
	);
}
