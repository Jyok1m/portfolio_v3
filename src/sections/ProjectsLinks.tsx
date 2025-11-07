import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectsLinks() {
	const { t } = useLocale();

	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.projects.title} subtitle={t.projects.description} />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{t.projects.items.map((project, index) => (
						<div
							key={project.slug}
							className="cyber-card group hover:scale-105 transition-all duration-500"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							{/* Project Header */}
							<div className="flex items-start justify-between mb-4">
								<h3 className="text-2xl font-bold neon-text group-hover:text-cyber-blue transition-colors duration-300">{project.name}</h3>

								{/* Status badge */}
								<div className="px-3 py-1 bg-cyber-cyan/20 border border-cyber-cyan/50 rounded-full text-cyber-cyan text-xs font-medium">Active</div>
							</div>

							{/* Description */}
							<p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{project.description}</p>

							{/* Tech Stack */}
							<div className="mb-6">
								<h4 className="text-sm font-semibold text-cyber-purple mb-3">Tech Stack:</h4>
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors duration-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							<div className="flex gap-4">
								<a href={project.links.site} className="flex-1 cyber-button text-center" target="_blank" rel="noopener noreferrer">
									<span className="flex items-center justify-center space-x-2">
										<FontAwesomeIcon icon={["fas", "globe"]} />
										<span>{t.projects.cta.site}</span>
									</span>
								</a>

								<a href={project.links.repo} className="flex-1 cyber-button-secondary text-center" target="_blank" rel="noopener noreferrer">
									<span className="flex items-center justify-center space-x-2">
										<FontAwesomeIcon icon={["fas", "file"]} />
										<span>{t.projects.cta.repo}</span>
									</span>
								</a>
							</div>

							{/* Decorative corner accent */}
							<div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors duration-300"></div>
							<div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-purple/30 group-hover:border-cyber-purple transition-colors duration-300"></div>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div className="mt-16 text-center">
					<div className="cyber-card bg-gradient-to-r from-slate-900/70 to-slate-800/70 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold neon-text mb-4">Plus de projets à venir</h3>
						<p className="text-slate-300 mb-6">
							Je travaille constamment sur de nouveaux projets et expérimentations. Restez connecté pour découvrir mes prochaines créations !
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<a href="https://github.com/joachimjasmin" className="cyber-button" target="_blank" rel="noopener noreferrer">
								<span className="flex items-center space-x-2">
									<FontAwesomeIcon icon={["fas", "folder"]} />
									<span>GitHub</span>
								</span>
							</a>

							<a href="https://gitlab.com/joachimjasmin" className="cyber-button" target="_blank" rel="noopener noreferrer">
								<span className="flex items-center space-x-2">
									<FontAwesomeIcon icon={["fas", "code-branch"]} />
									<span>GitLab</span>
								</span>
							</a>

							<a href="https://linkedin.com/in/joachimjasmin" className="cyber-button-secondary" target="_blank" rel="noopener noreferrer">
								<span className="flex items-center space-x-2">
									<FontAwesomeIcon icon={["fas", "briefcase"]} />
									<span>LinkedIn</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
