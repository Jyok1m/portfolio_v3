import { useState } from "react";
import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing() {
	const { t } = useLocale();
	const [openAccordion, setOpenAccordion] = useState<number | null>(null);

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const plans = [
		{
			key: "essentiel",
			...t.pricing.plans.essentiel,
			color: "neon-green",
			borderColor: "border-neon-green",
			hoverBorder: "hover:border-neon-green",
			shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
			bgAccent: "bg-neon-green/10",
			textColor: "text-neon-green",
			badgeBg: "bg-neon-green/20 border-neon-green/50",
			buttonClass: "border-neon-green text-neon-green hover:bg-neon-green hover:text-cyber-dark",
		},
		{
			key: "professionnel",
			...t.pricing.plans.professionnel,
			color: "cyber-cyan",
			borderColor: "border-cyber-cyan",
			hoverBorder: "hover:border-cyber-cyan",
			shadow: "hover:shadow-cyber",
			bgAccent: "bg-cyber-cyan/10",
			textColor: "text-cyber-cyan",
			badgeBg: "bg-cyber-cyan/20 border-cyber-cyan/50",
			buttonClass: "border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark",
			popular: true,
		},
		{
			key: "surmesure",
			...t.pricing.plans.surmesure,
			color: "cyber-purple",
			borderColor: "border-cyber-purple",
			hoverBorder: "hover:border-cyber-purple",
			shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
			bgAccent: "bg-cyber-purple/10",
			textColor: "text-cyber-purple",
			badgeBg: "bg-cyber-purple/20 border-cyber-purple/50",
			buttonClass: "border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white",
		},
	];

	return (
		<section id="pricing" className="py-20 relative">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.pricing.title} subtitle={t.pricing.subtitle} />

				{/* TJM Reference */}
				<div className="text-center mb-12">
					<span className="inline-block px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-mono">
						{t.pricing.tjm} — <span className="text-slate-400">{t.pricing.tjmNote}</span>
					</span>
				</div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
					{plans.map((plan) => (
						<div
							key={plan.key}
							className={`relative bg-slate-900/50 backdrop-blur-sm border ${
								plan.popular ? plan.borderColor : "border-slate-800"
							} rounded-lg p-6 lg:p-8 transition-all duration-300 ${plan.hoverBorder} ${plan.shadow} flex flex-col`}
						>
							{/* Emoji + Name */}
							<div className="mb-4">
								<span className="text-2xl mr-2">{plan.emoji}</span>
								<h3 className={`inline text-xl font-bold ${plan.textColor}`}>{plan.name}</h3>
							</div>

							{/* Price */}
							<p className="text-2xl font-bold text-white mb-2">{plan.price}</p>

							{/* Target */}
							<p className="text-sm text-slate-400 mb-6">{plan.target}</p>

							{/* Includes badge */}
							{"includes" in plan && plan.includes && (
								<div className={`inline-block self-start px-3 py-1 rounded-full border text-xs font-medium mb-4 ${plan.badgeBg} ${plan.textColor}`}>
									{plan.includes}
								</div>
							)}

							{/* Features */}
							<ul className="space-y-3 mb-6 flex-grow">
								{plan.features.map((feature: string, i: number) => (
									<li key={i} className="flex items-start gap-2 text-sm text-slate-300">
										<FontAwesomeIcon icon={["fas", "check"]} className={`mt-0.5 text-xs ${plan.textColor} shrink-0`} />
										<span>{feature}</span>
									</li>
								))}
							</ul>

							{/* Maintenance */}
							<div className={`rounded-lg p-3 mb-6 ${plan.bgAccent} border border-slate-700/50`}>
								<p className={`text-sm font-medium ${plan.textColor}`}>
									{plan.maintenance.split(" : ")[0]}
									<br />
									{plan.maintenance.split(" : ")[1]}
								</p>
								<p className="text-xs text-slate-400 mt-1">{plan.maintenanceDetails}</p>
							</div>

							{/* CTA */}
							<button
								onClick={scrollToContact}
								className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 border ${plan.buttonClass}`}
							>
								{t.pricing.cta}
							</button>
						</div>
					))}
				</div>

				{/* Prestations à la carte - Accordion on mobile, table on desktop */}
				<div className="max-w-4xl mx-auto mb-16">
					<h3 className="text-2xl font-bold neon-text text-center mb-8">{t.pricing.alacarte.title}</h3>

					{/* Desktop Table */}
					<div className="hidden md:block overflow-hidden rounded-lg border border-slate-800">
						<table className="w-full">
							<thead>
								<tr className="bg-slate-800/50">
									<th className="text-left px-6 py-4 text-sm font-semibold text-cyber-cyan uppercase tracking-wider">
										Prestation
									</th>
									<th className="text-right px-6 py-4 text-sm font-semibold text-cyber-cyan uppercase tracking-wider">
										Tarif
									</th>
								</tr>
							</thead>
							<tbody>
								{t.pricing.alacarte.items.map((item: { name: string; price: string }, i: number) => (
									<tr
										key={i}
										className="border-t border-slate-800 transition-colors duration-200 hover:bg-slate-800/30"
									>
										<td className="px-6 py-4 text-sm text-slate-300">{item.name}</td>
										<td className="px-6 py-4 text-sm text-white font-mono text-right">{item.price}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Mobile Accordion */}
					<div className="md:hidden space-y-2">
						{t.pricing.alacarte.items.map((item: { name: string; price: string }, i: number) => (
							<div
								key={i}
								className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden"
							>
								<button
									onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
									className="w-full flex items-center justify-between px-4 py-3 text-left"
								>
									<span className="text-sm text-slate-300">{item.name}</span>
									<FontAwesomeIcon
										icon={["fas", "chevron-down"]}
										className={`text-xs text-slate-400 transition-transform duration-200 ${openAccordion === i ? "rotate-180" : ""}`}
									/>
								</button>
								{openAccordion === i && (
									<div className="px-4 pb-3 border-t border-slate-800">
										<p className="text-sm text-white font-mono pt-2">{item.price}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Transparency Notice */}
				<div className="max-w-3xl mx-auto">
					<div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-lg p-6 lg:p-8">
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-t-lg"></div>
						<div className="flex items-start gap-4">
							<div className="shrink-0 w-10 h-10 rounded-full bg-cyber-cyan/10 flex items-center justify-center">
								<FontAwesomeIcon icon={["fas", "shield-halved"]} className="text-cyber-cyan" />
							</div>
							<div>
								<h4 className="text-lg font-bold text-white mb-2">{t.pricing.transparency.title}</h4>
								<p className="text-slate-300 leading-relaxed italic">
									&laquo; {t.pricing.transparency.text} &raquo;
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
