import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useLocale } from "../i18n/useLocale";
import { useNavigateToSection } from "../hooks/useNavigateToSection";
import HeroScene from "../components/HeroScene";

export default function Hero() {
	const { t } = useLocale();
	const navigateToSection = useNavigateToSection();

	return (
		<section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-cyber pt-24 sm:pt-32">
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

			{/* 3D Scene Background (visible on small screens) */}
			<div className="absolute inset-0 sm:block lg:hidden">
				<Canvas camera={{ position: [0, 0, 12], fov: 60 }} className="bg-transparent opacity-30">
					<Suspense fallback={null}>
						<HeroScene isBackground={true} />
					</Suspense>
				</Canvas>
			</div>

			<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
				{/* Left Content */}
				<div className="space-y-8 relative z-20">
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
					<div className="flex flex-col gap-4">
						<button onClick={() => navigateToSection("projects")} className="cyber-button text-lg">
							{t.hero.ctaPrimary}
						</button>

						{/* <a
							href="/documents/cv/CV_joachim_jasmin.pdf"
							download="CV_Joachim_Jasmin.pdf"
							className="cyber-button-secondary text-lg inline-flex items-center justify-center gap-2 no-underline"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
							{t.hero.downloadCV}
						</a> */}

						<button onClick={() => navigateToSection("contact")} className="cyber-button-secondary text-lg">
							{t.hero.ctaSecondary}
						</button>
					</div>
				</div>

				{/* Right 3D Scene (visible on large screens) */}
				<div className="h-[600px] relative hidden lg:block">
					<Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="bg-transparent">
						<Suspense fallback={null}>
							<HeroScene isBackground={false} />
						</Suspense>
					</Canvas>

					{/* Overlay glow effect */}
					<div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-cyber-dark/30 pointer-events-none"></div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
					<div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
				</div>
			</div>
		</section>
	);
}
