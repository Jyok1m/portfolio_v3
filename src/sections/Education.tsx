import { useState } from "react";
import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import PDFModal from "../components/PDFModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Education() {
	const { t } = useLocale();
	const [selectedPDF, setSelectedPDF] = useState<{ url: string; title: string } | null>(null);

	// Fonction utilitaire pour créer des URLs de PDF sûres
	const createSafePdfUrl = (path: string) => {
		// Encoder l'URL complète en gérant les caractères spéciaux
		return encodeURI(path);
	};

	const education = [
		{
			type: "certification",
			title: t.education.items.aiEngineer.title,
			institution: t.education.items.aiEngineer.institution,
			year: "2025",
			icon: ["fas", "award"] as IconProp,
			color: "cyber-cyan",
			description: t.education.items.aiEngineer.description,
			pdfPath: "/documents/certificates/AI_Engineer_Certificate-Joachim_Jasmin.pdf",
		},
		{
			type: "certification",
			title: t.education.items.rncp.title,
			institution: t.education.items.rncp.institution,
			year: "2024",
			icon: ["fas", "certificate"] as IconProp,
			color: "cyber-cyan",
			description: t.education.items.rncp.description,
			pdfPath: "/documents/certificates/RNCP_6-Joachim_Jasmin.pdf",
		},
		{
			type: "degree",
			title: t.education.items.mscSkema.title,
			institution: t.education.items.mscSkema.institution,
			year: "2022",
			icon: ["fas", "university"] as IconProp,
			color: "cyber-purple",
			description: t.education.items.mscSkema.description,
			pdfPath: "/documents/degrees/MSc - SKEMA Business School - Joachim Jasmin.pdf",
		},
		{
			type: "degree",
			title: t.education.items.desmiSkema.title,
			institution: t.education.items.desmiSkema.institution,
			year: "2022",
			icon: ["fas", "university"] as IconProp,
			color: "cyber-purple",
			description: t.education.items.desmiSkema.description,
			pdfPath: "/documents/degrees/DESMI - SKEMA Business School - Joachim Jasmin.pdf",
		},
		{
			type: "degree",
			title: t.education.items.bbaGlion.title,
			institution: t.education.items.bbaGlion.institution,
			year: "2019",
			icon: ["fas", "university"] as IconProp,
			color: "cyber-purple",
			description: t.education.items.bbaGlion.description,
			pdfPath: "/documents/degrees/Diploma BBA - Joachim Jasmin.pdf",
		},
	];

	const openPDF = (pdfPath: string, title: string) => {
		// Utiliser la fonction utilitaire pour créer une URL sûre
		const safeUrl = createSafePdfUrl(pdfPath);
		setSelectedPDF({ url: safeUrl, title });
	};

	const closePDF = () => {
		setSelectedPDF(null);
	};

	return (
		<section id="education" className="py-20">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.education.title} subtitle={t.education.subtitle} />

				<div className="max-w-4xl mx-auto">
					{/* Timeline container */}
					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-cyan transform -translate-x-0.5"></div>

						{education.map((item, index) => (
							<div
								key={`${item.type}-${index}-${item.title.substring(0, 20)}`}
								className={`relative mb-12 ${index % 2 === 0 ? "md:text-right md:pr-1/2" : "md:pl-1/2 md:text-left"}`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{/* Timeline dot */}
								<div
									className={`absolute top-6 w-4 h-4 rounded-full border-2 transform -translate-y-1/2 ${
										item.color === "cyber-cyan" ? "bg-cyber-cyan border-cyber-cyan" : "bg-cyber-purple border-cyber-purple"
									} ${index % 2 === 0 ? "left-6 md:right-[-8px] md:left-auto" : "left-6 md:left-[-8px]"}`}
								></div>

								{/* Content card */}
								<div
									className={`cyber-card group hover:scale-105 transition-all duration-500 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
								>
									{/* Header */}
									<div className="flex items-start space-x-4 mb-4">
										<div
											className={`w-12 h-12 rounded-lg flex items-center justify-center ${
												item.color === "cyber-cyan" ? "bg-cyber-cyan/20 text-cyber-cyan" : "bg-cyber-purple/20 text-cyber-purple"
											}`}
										>
											<FontAwesomeIcon icon={item.icon} className="text-xl" />
										</div>

										<div className="flex-1">
											<div className="flex items-center justify-between mb-2">
												<h3 className={`text-lg font-bold text-${item.color}`}>{item.title}</h3>
												<span
													className={`px-3 py-1 rounded-full text-sm font-medium ${
														item.color === "cyber-cyan"
															? "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30"
															: "bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30"
													}`}
												>
													{item.year}
												</span>
											</div>

											<h4 className="text-slate-300 font-medium mb-2">{item.institution}</h4>
											<p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
										</div>
									</div>

									{/* Badge type & PDF actions */}
									<div className="flex items-center justify-between">
										<span
											className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
												item.type === "degree"
													? "bg-blue-900/30 text-blue-400 border border-blue-500/30"
													: "bg-green-900/30 text-green-400 border border-green-500/30"
											}`}
										>
											<FontAwesomeIcon icon={item.type === "degree" ? ["fas", "medal"] : ["fas", "certificate"]} className="w-3 h-3 mr-1" />
											{item.type === "degree" ? t.education.badges.degree : t.education.badges.certification}
										</span>

										{/* PDF buttons */}
										<div className="flex items-center space-x-2">
											<button
												onClick={() => openPDF(item.pdfPath, item.title)}
												className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
													item.color === "cyber-cyan"
														? "bg-cyber-cyan/20 text-cyber-cyan hover:bg-cyber-cyan hover:text-white"
														: "bg-cyber-purple/20 text-cyber-purple hover:bg-cyber-purple hover:text-white"
												}`}
												title={t.education.actions.view}
											>
												<FontAwesomeIcon icon={["fas", "eye"]} className="w-3 h-3" />
											</button>

											<a
												href={createSafePdfUrl(item.pdfPath)}
												download={`${item.title.replace(/\s+/g, "_")}.pdf`}
												className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
													item.color === "cyber-cyan"
														? "bg-cyber-cyan/10 text-cyber-cyan hover:bg-cyber-cyan hover:text-white"
														: "bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple hover:text-white"
												}`}
												title={t.education.actions.download}
											>
												<FontAwesomeIcon icon={["fas", "download"]} className="w-3 h-3" />
											</a>
										</div>
									</div>

									{/* Decorative corner accent */}
									<div
										className={`absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 transition-colors duration-300 ${
											item.color === "cyber-cyan"
												? "border-cyber-cyan/30 group-hover:border-cyber-cyan"
												: "border-cyber-purple/30 group-hover:border-cyber-purple"
										}`}
									></div>
								</div>
							</div>
						))}
					</div>

					{/* Summary stats */}
					<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
						<div className="cyber-card text-center">
							<div className="text-2xl font-bold text-cyber-cyan mb-2">3</div>
							<div className="text-slate-400 text-sm">{t.education.stats.degrees}</div>
						</div>

						<div className="cyber-card text-center">
							<div className="text-2xl font-bold text-cyber-purple mb-2">2</div>
							<div className="text-slate-400 text-sm">{t.education.stats.certifications}</div>
						</div>

						<div className="cyber-card text-center">
							<div className="text-2xl font-bold text-cyber-cyan mb-2">6</div>
							<div className="text-slate-400 text-sm">{t.education.stats.years}</div>
						</div>

						<div className="cyber-card text-center">
							<div className="text-2xl font-bold text-cyber-purple mb-2">3</div>
							<div className="text-slate-400 text-sm">{t.education.stats.domains}</div>
						</div>
					</div>
				</div>
			</div>

			{/* PDF Modal */}
			{selectedPDF && <PDFModal isOpen={!!selectedPDF} onClose={closePDF} pdfUrl={selectedPDF.url} title={selectedPDF.title} />}
		</section>
	);
}
