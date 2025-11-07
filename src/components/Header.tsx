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
		{ key: "interests", label: t.nav.interests, id: "interests" },
		{ key: "projects", label: t.nav.projects, id: "projects" },
		{ key: "contact", label: t.nav.contact, id: "contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-cyber-cyan/30">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="text-2xl font-bold neon-text">JJ</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.id)}
								className="text-slate-300 hover:text-cyber-cyan transition-colors duration-300 font-medium"
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Language Switcher & Mobile Menu Button */}
					<div className="flex items-center space-x-4">
						<LanguageSwitcher />

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-slate-300 hover:text-cyber-cyan transition-colors duration-300"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								{isMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav className="md:hidden mt-4 pb-4 border-t border-cyber-cyan/30">
						<div className="flex flex-col space-y-3 pt-4">
							{navItems.map((item) => (
								<button
									key={item.key}
									onClick={() => scrollToSection(item.id)}
									className="text-slate-300 hover:text-cyber-cyan transition-colors duration-300 font-medium text-left"
								>
									{item.label}
								</button>
							))}
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
