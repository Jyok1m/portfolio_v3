import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Skills() {
	const { t } = useLocale();

	const skillCategories = [
		{
			key: "cloud",
			title: t.skills.categories.cloud.title,
			skills: t.skills.categories.cloud.skills,
			icon: ["fas", "cloud"] as IconProp,
			color: "cyber-cyan",
		},
		{
			key: "fullstack",
			title: t.skills.categories.fullstack.title,
			skills: t.skills.categories.fullstack.skills,
			icon: ["fas", "atom"] as IconProp,
			color: "cyber-purple",
		},
		{
			key: "ai",
			title: t.skills.categories.ai.title,
			skills: t.skills.categories.ai.skills,
			icon: ["fas", "robot"] as IconProp,
			color: "cyber-cyan",
		},
		{
			key: "teaching",
			title: t.skills.categories.teaching.title,
			skills: t.skills.categories.teaching.skills,
			icon: ["fas", "graduation-cap"] as IconProp,
			color: "cyber-purple",
		},
	];

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.skills.title} subtitle={t.skills.description} />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{skillCategories.map((category, index) => (
						<div key={category.key} className="cyber-card group" style={{ animationDelay: `${index * 0.1}s` }}>
							{/* Header */}
							<div className="flex items-center space-x-4 mb-6">
								<div className="text-4xl">
									<FontAwesomeIcon icon={category.icon} className={`text-${category.color}`} />
								</div>
								<h3 className={`text-2xl font-bold text-${category.color}`}>{category.title}</h3>
							</div>

							{/* Skills grid */}
							<div className="grid grid-cols-2 gap-3">
								{category.skills.map((skill, skillIndex) => (
									<div
										key={skill}
										className={`
                      px-3 py-2 bg-slate-800/50 rounded-lg text-sm font-medium text-center
                      border transition-all duration-300 hover:scale-105
                      ${
												category.color === "cyber-cyan"
													? "border-cyber-cyan/30 text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon"
													: "border-cyber-purple/30 text-cyber-purple hover:border-cyber-purple hover:shadow-neon"
											}
                    `}
										style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
									>
										{skill}
									</div>
								))}
							</div>

							{/* Decorative element */}
							<div className="mt-6 flex justify-center">
								<div
									className={`
                  w-16 h-1 rounded-full transition-all duration-500 group-hover:w-24
                  ${category.color === "cyber-cyan" ? "bg-cyber-cyan" : "bg-cyber-purple"}
                `}
								></div>
							</div>
						</div>
					))}
				</div>

				{/* Additional tech stack */}
				<div className="mt-16 text-center">
					<div className="inline-block bg-slate-900/50 rounded-lg p-6 border border-slate-700">
						<p className="text-slate-400 mb-4 font-medium">Technologies Complémentaires</p>
						<div className="flex flex-wrap justify-center gap-3">
							{["Git", "Linux", "VS Code", "Figma", "Postman", "Redis", "Nginx", "GraphQL"].map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-sm border border-slate-600 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors duration-300"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
