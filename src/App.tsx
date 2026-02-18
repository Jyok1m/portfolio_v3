import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Passions from "./sections/Passions";
import ProjectsLinks from "./sections/ProjectsLinks";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import { useLocale } from "./i18n/useLocale";
import { useScrollToSection } from "./hooks/useScrollToSection";
import { useSeoMeta } from "./hooks/useSeoMeta";

function PortfolioPage() {
	const { t, locale } = useLocale();

	useScrollToSection();
	useSeoMeta(locale);

	return (
		<div className="min-h-screen bg-cyber-dark">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyber-cyan text-cyber-dark px-4 py-2 rounded z-50"
			>
				Aller au contenu principal
			</a>

			<Header />

			<main id="main-content" role="main" aria-label="Contenu principal">
				<Hero />
				<About />
				<Skills />
				<Education />
				<Passions />
				<ProjectsLinks />
				<Pricing />
				<Contact />
			</main>

			{/* Footer */}
			<footer className="py-8 bg-slate-900 border-t border-slate-800" role="contentinfo" aria-label="Informations de contact et liens sociaux">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-slate-400 text-sm mb-4 md:mb-0">{t.footer.copyright}</div>

						<nav aria-label="Liens vers mes profils sociaux" className="flex space-x-6">
							<a
								href="https://github.com/Jyok1m"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Profil GitHub de Joachim Jasmin"
							>
								GitHub
							</a>
							<a
								href="https://gitlab.com/Jyok1m"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Profil GitLab de Joachim Jasmin"
							>
								GitLab
							</a>
							<a
								href="https://www.linkedin.com/in/joachim-jasmin/"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Profil LinkedIn de Joachim Jasmin"
							>
								LinkedIn
							</a>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path="*" element={<PortfolioPage />} />
		</Routes>
	);
}

export default App;
