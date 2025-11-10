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

							{/* Profile Photo */}
							<div className="relative flex justify-center">
								<div className="relative">
									{/* Profile image */}
									<div className="w-64 h-64 rounded-full border-4 border-cyber-cyan/50 p-2 bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20">
										<img
											src="/documents/pictures/profile_pic.jpg"
											alt="Photo de profil de Joachim Jasmin - Expert Cloud DevOps, Développeur FullStack et Ingénieur IA"
											className="w-full h-full object-cover rounded-full"
											width="256"
											height="256"
											loading="lazy"
										/>
									</div>

									{/* Animated glow effect */}
									<div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-cyan/30 to-cyber-purple/30 animate-pulse opacity-50"></div>

									{/* Tech icons floating around */}
									<div className="absolute inset-0">
										{[
											{ icon: ["fas", "cloud"] as IconProp, name: "Cloud & DevOps", position: "top-0 left-0 -translate-x-4 -translate-y-4" },
											{ icon: ["fas", "atom"] as IconProp, name: "Full-Stack", position: "top-0 right-0 translate-x-4 -translate-y-4" },
											{ icon: ["fas", "robot"] as IconProp, name: "AI", position: "bottom-0 left-0 -translate-x-4 translate-y-4" },
											{ icon: ["fas", "graduation-cap"] as IconProp, name: "Teaching", position: "bottom-0 right-0 translate-x-4 translate-y-4" },
										].map((item, index) => (
											<div
												key={index}
												className={`absolute ${item.position} w-12 h-12 bg-cyber-dark/80 border border-cyber-cyan/50 rounded-full flex items-center justify-center animate-float cursor-pointer hover:scale-110 transition-transform duration-300`}
												style={{
													animationDelay: `${index * 1.5}s`,
													animationDuration: `${6 + index}s`,
												}}
												onClick={() =>
													setSelectedTech({
														name: item.name,
														icon: item.icon,
														description: t.skills.techDetails[item.name as keyof typeof t.skills.techDetails] || `En savoir plus sur ${item.name}`,
														color: "cyber-cyan",
													})
												}
											>
												<FontAwesomeIcon icon={item.icon} className="text-cyber-cyan text-lg" />
											</div>
										))}
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
