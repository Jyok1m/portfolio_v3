import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useLocale } from "../i18n/useLocale";
import HeroScene from "../components/HeroScene";

export default function Hero() {
	const { t } = useLocale();

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-cyber">
			{/* Background effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-slate-900 to-cyber-dark opacity-90"></div>

			{/* Animated background particles */}
			<div className="absolute inset-0">
				{Array.from({ length: 20 }, (_, i) => (
					<div
						key={i}
						className="absolute animate-float"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 6}s`,
							animationDuration: `${6 + Math.random() * 4}s`,
						}}
					>
						<div className="w-1 h-1 bg-cyber-cyan rounded-full opacity-60"></div>
					</div>
				))}
			</div>

			<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
				{/* Left Content */}
				<div className="space-y-8">
					<div className="space-y-6">
						<h1 className="text-5xl md:text-7xl font-bold leading-tight">
							<span className="text-white">Joachim</span>
							<br />
							<span className="neon-text">Jasmin</span>
						</h1>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl text-cyber-cyan font-semibold">{t.hero.title}</h2>

							<p className="text-xl text-slate-300 leading-relaxed">{t.hero.subtitle}</p>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button onClick={() => scrollToSection("projects")} className="cyber-button text-lg">
							{t.hero.ctaPrimary}
						</button>

						<button onClick={() => scrollToSection("contact")} className="cyber-button-secondary text-lg">
							{t.hero.ctaSecondary}
						</button>
					</div>

					{/* Tech badges */}
					<div className="flex flex-wrap gap-3 pt-4">
						{["Cloud & DevOps", "Fullstack", "AI/LLM", "Teaching"].map((tech) => (
							<span key={tech} className="tech-badge">
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Right 3D Scene */}
				<div className="h-[600px] relative">
					<Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="bg-transparent">
						<Suspense fallback={null}>
							<HeroScene />
						</Suspense>
					</Canvas>

					{/* Overlay glow effect */}
					<div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-cyber-dark/30 pointer-events-none"></div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
					<div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
				</div>
			</div>
		</section>
	);
}
