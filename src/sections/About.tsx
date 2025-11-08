import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import TechModal from "../components/TechModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

export default function About() {
	const { t } = useLocale();
	const [selectedTech, setSelectedTech] = useState<{
		name: string;
		icon: IconProp;
		description: string;
		color?: string;
	} | null>(null);

	return (
		<section id="about" className="py-20 bg-slate-900/30">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.about.title} subtitle={t.about.description} />

				<div className="max-w-4xl mx-auto">
					<div className="cyber-card">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							{/* Content */}
							<div className="space-y-6">
								<p className="text-lg text-slate-300 leading-relaxed">{t.about.content}</p>
							</div>

							{/* Visual element */}
							<div className="relative">
								<div className="w-full h-64 bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 rounded-lg border border-cyber-cyan/30 flex items-center justify-center relative overflow-hidden">
									{/* Animated tech icons representation */}
									<div className="grid grid-cols-2 gap-4 w-full h-full p-8">
										{[
											{ icon: ["fas", "cloud"] as IconProp, label: "Cloud" },
											{ icon: ["fas", "atom"] as IconProp, label: "React" },
											{ icon: ["fas", "robot"] as IconProp, label: "AI" },
											{ icon: ["fas", "graduation-cap"] as IconProp, label: "Teaching" },
										].map((item, index) => (
											<div
												key={item.label}
												className="cyber-card bg-slate-800/50 flex flex-col items-center justify-center p-4 animate-pulse-slow cursor-pointer hover:scale-105 transition-transform duration-300"
												style={{ animationDelay: `${index * 0.5}s` }}
												onClick={() =>
													setSelectedTech({
														name: item.label,
														icon: item.icon,
														description: t.skills.techDetails[item.label as keyof typeof t.skills.techDetails],
														color: "cyber-cyan",
													})
												}
											>
												<div className="text-2xl mb-2">
													<FontAwesomeIcon icon={item.icon} className="text-cyber-cyan" />
												</div>
												<div className="text-cyber-cyan text-sm font-medium">{item.label}</div>
											</div>
										))}
									</div>

									{/* Connecting lines effect */}
									<div className="absolute inset-0 pointer-events-none">
										<svg className="w-full h-full opacity-30">
											<line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5,5">
												<animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
											</line>
											<line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5,5">
												<animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite" />
											</line>
											<line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#6366f1" strokeWidth="1" strokeDasharray="5,5">
												<animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
											</line>
											<line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#6366f1" strokeWidth="1" strokeDasharray="5,5">
												<animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite" />
											</line>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Tech Modal */}
				{selectedTech && <TechModal isOpen={!!selectedTech} onClose={() => setSelectedTech(null)} tech={selectedTech} />}
			</div>
		</section>
	);
}
