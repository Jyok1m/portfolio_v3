import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Passions() {
	const { t } = useLocale();

	const passions = [
		{
			key: "kendo",
			title: t.interests.items.kendo.title,
			description: t.interests.items.kendo.description,
			icon: ["fas", "swords"] as IconProp,
			color: "cyber-cyan",
		},
		{
			key: "tech",
			title: t.interests.items.tech.title,
			description: t.interests.items.tech.description,
			icon: ["fas", "laptop-code"] as IconProp,
			color: "cyber-purple",
		},
		{
			key: "anime",
			title: t.interests.items.anime.title,
			description: t.interests.items.anime.description,
			icon: ["fas", "flag"] as IconProp,
			color: "cyber-cyan",
		},
		{
			key: "gaming",
			title: t.interests.items.gaming.title,
			description: t.interests.items.gaming.description,
			icon: ["fas", "gamepad"] as IconProp,
			color: "cyber-purple",
		},
		{
			key: "theater",
			title: t.interests.items.theater.title,
			description: t.interests.items.theater.description,
			icon: ["fas", "mask"] as IconProp,
			color: "cyber-cyan",
		},
		{
			key: "food",
			title: t.interests.items.food.title,
			description: t.interests.items.food.description,
			icon: ["fas", "bowl-food"] as IconProp,
			color: "cyber-purple",
		},
	];

	return (
		<section id="interests" className="py-20 bg-slate-900/30">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.interests.title} subtitle={t.interests.description} />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{passions.map((passion, index) => (
						<div key={passion.key} className="group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
							<div className="cyber-card h-full transition-all duration-500 hover:scale-105 hover:-translate-y-2">
								{/* Icon */}
								<div className="text-center mb-4">
									<div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
										<FontAwesomeIcon icon={passion.icon} className={`text-${passion.color}`} />
									</div>
								</div>

								{/* Content */}
								<div className="text-center space-y-3">
									<h3
										className={`text-xl font-bold text-${passion.color} group-hover:text-${
											passion.color === "cyber-cyan" ? "cyber-blue" : "cyber-violet"
										} transition-colors duration-300`}
									>
										{passion.title}
									</h3>

									<p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
										{passion.description}
									</p>
								</div>

								{/* Decorative glow effect */}
								<div
									className={`
                  absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none
                  ${passion.color === "cyber-cyan" ? "bg-cyber-cyan" : "bg-cyber-purple"}
                `}
								></div>

								{/* Bottom accent line */}
								<div className="mt-6 flex justify-center">
									<div
										className={`
                    w-8 h-1 rounded-full transition-all duration-500 group-hover:w-16
                    ${passion.color === "cyber-cyan" ? "bg-cyber-cyan" : "bg-cyber-purple"}
                  `}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Personal quote or motto */}
				<div className="mt-16 text-center">
					<div className="max-w-2xl mx-auto">
						<blockquote className="cyber-card bg-gradient-to-r from-slate-900/50 to-slate-800/50">
							<p className="text-lg text-slate-300 italic mb-4 leading-relaxed">
								"La passion pour la technologie se nourrit de la curiosité constante et du partage des connaissances."
							</p>
							<div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}
