import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Passions from "./sections/Passions";
import ProjectsLinks from "./sections/ProjectsLinks";
import Contact from "./sections/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "./i18n/useLocale";

function App() {
	const { t } = useLocale();

	return (
		<div className="min-h-screen bg-cyber-dark">
			<Header />

			<main>
				<Hero />
				<About />
				<Skills />
				<Education />
				<Passions />
				<ProjectsLinks />
				<Contact />
			</main>

			{/* Footer */}
			<footer className="py-8 bg-slate-900 border-t border-slate-800">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-slate-400 text-sm mb-4 md:mb-0">{t.footer.copyright}</div>

						<div className="flex space-x-6">
							<a
								href="https://github.com/Jyok1m"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							<a
								href="https://gitlab.com/Jyok1m"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitLab
							</a>
							<a
								href="https://www.linkedin.com/in/joachim-jasmin/"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
