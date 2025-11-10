import { useState } from "react";
import { useLocale } from "../i18n/useLocale";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
	const { t } = useLocale();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	const navItems = [
		{ key: "home", label: t.nav.home, id: "hero" },
		{ key: "about", label: t.nav.about, id: "about" },
		{ key: "skills", label: t.nav.skills, id: "skills" },
		{ key: "education", label: t.nav.education, id: "education" },
		{ key: "interests", label: t.nav.interests, id: "interests" },
		{ key: "projects", label: t.nav.projects, id: "projects" },
		{ key: "contact", label: t.nav.contact, id: "contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyber-dark/90 to-slate-900/90 backdrop-blur-md border-b border-cyber-cyan/30 shadow-2xl">
			<div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="cursor-pointer">
						<img
							src="/documents/pictures/logo.png"
							alt="Logo Joachim Jasmin - Ingénieur Cloud DevOps et IA"
							className="h-8 sm:h-10 w-auto logo-glow"
							width="40"
							height="40"
							loading="eager"
						/>
					</div>

					{/* Desktop Navigation - Show only on large screens */}
					<nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
						{navItems.map((item) => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.id)}
								className="text-slate-300 hover:text-cyber-cyan transition-colors duration-300 font-medium text-base whitespace-nowrap"
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Medium screens navigation - Compact version */}
					<nav className="hidden md:flex lg:hidden items-center space-x-3">
						{navItems.slice(0, 4).map((item) => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.id)}
								className="text-slate-300 hover:text-cyber-cyan transition-colors duration-300 font-medium text-base px-2 py-1 rounded border border-transparent hover:border-cyber-cyan/30"
							>
								{item.label}
							</button>
						))}
						<button
							className="text-slate-300 hover:text-cyber-cyan transition-colors duration-300 text-xs"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							•••
						</button>
					</nav>

					{/* Language Switcher & Mobile Menu Button */}
					<div className="flex items-center space-x-2 sm:space-x-4">
						<div className="hidden sm:block">
							<LanguageSwitcher />
						</div>

						{/* Mobile Menu Button */}
						<button
							className="lg:hidden text-slate-300 hover:text-cyber-cyan transition-colors duration-300"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								{isMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile/Medium Navigation */}
				{isMenuOpen && (
					<nav className="lg:hidden mt-4 pb-4 border-t border-cyber-cyan/30">
						<div className="flex flex-col space-y-3 pt-4">
							{navItems.map((item) => (
								<button
									key={item.key}
									onClick={() => scrollToSection(item.id)}
									className="text-slate-300 hover:text-cyber-cyan transition-colors duration-300 font-medium text-left py-2 px-3 rounded hover:bg-cyber-cyan/10"
								>
									{item.label}
								</button>
							))}

							{/* Language switcher in mobile menu */}
							<div className="pt-3 border-t border-slate-700/50">
								<LanguageSwitcher />
							</div>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
