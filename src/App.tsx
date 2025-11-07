import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Passions from "./sections/Passions";
import ProjectsLinks from "./sections/ProjectsLinks";
import Contact from "./sections/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
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
						<div className="text-slate-400 text-sm mb-4 md:mb-0">
							© 2025 Joachim Jasmin. Fait avec <FontAwesomeIcon icon={["fas", "heart"]} className="text-red-500" /> et React Three Fiber.
						</div>

						<div className="flex space-x-6">
							<a
								href="https://github.com/joachimjasmin"
								className="text-slate-400 hover:text-cyber-cyan transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/joachimjasmin"
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
