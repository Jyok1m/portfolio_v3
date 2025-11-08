import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
	const { t } = useLocale();

	return (
		<section id="contact" className="py-20 bg-slate-900/30">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.contact.title} subtitle={t.contact.description} />

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 gap-12">
						{/* Contact Info */}
						<div className="space-y-8">
							<div className="cyber-card">
								<h3 className="text-2xl font-bold neon-text mb-6">{t.contact.connectTitle}</h3>

								<div className="space-y-6">
									{/* Contact methods */}
									<div className="space-y-4">
										<a
											href="mailto:joachim.jasmin-dev@proton.me"
											className="flex items-center space-x-4 text-slate-300 hover:text-cyber-cyan transition-colors duration-300 group"
										>
											<div className="w-10 h-10 bg-cyber-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-cyan group-hover:text-cyber-dark transition-all duration-300">
												<FontAwesomeIcon icon={["fas", "envelope"]} />
											</div>
											<div>
												<div className="font-medium">{t.contact.contactMethods.email.label}</div>
												<div className="text-sm text-slate-400">{t.contact.contactMethods.email.description}</div>
											</div>
										</a>

										<a
											href="https://linkedin.com/in/joachimjasmin"
											className="flex items-center space-x-4 text-slate-300 hover:text-cyber-purple transition-colors duration-300 group"
											target="_blank"
											rel="noopener noreferrer"
										>
											<div className="w-10 h-10 bg-cyber-purple/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-purple group-hover:text-cyber-dark transition-all duration-300">
												<FontAwesomeIcon icon={["fas", "briefcase"]} />
											</div>
											<div>
												<div className="font-medium">{t.contact.contactMethods.linkedin.label}</div>
												<div className="text-sm text-slate-400">{t.contact.contactMethods.linkedin.description}</div>
											</div>
										</a>

										<a
											href="https://github.com/joachimjasmin"
											className="flex items-center space-x-4 text-slate-300 hover:text-cyber-cyan transition-colors duration-300 group"
											target="_blank"
											rel="noopener noreferrer"
										>
											<div className="w-10 h-10 bg-cyber-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-cyan group-hover:text-cyber-dark transition-all duration-300">
												<FontAwesomeIcon icon={["fas", "folder"]} />
											</div>
											<div>
												<div className="font-medium">{t.contact.contactMethods.github.label}</div>
												<div className="text-sm text-slate-400">{t.contact.contactMethods.github.description}</div>
											</div>
										</a>

										<a
											href="https://gitlab.com/joachimjasmin"
											className="flex items-center space-x-4 text-slate-300 hover:text-cyber-purple transition-colors duration-300 group"
											target="_blank"
											rel="noopener noreferrer"
										>
											<div className="w-10 h-10 bg-cyber-purple/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-purple group-hover:text-cyber-dark transition-all duration-300">
												<FontAwesomeIcon icon={["fas", "code-branch"]} />
											</div>
											<div>
												<div className="font-medium">{t.contact.contactMethods.gitlab.label}</div>
												<div className="text-sm text-slate-400">{t.contact.contactMethods.gitlab.description}</div>
											</div>
										</a>
									</div>

									{/* Availability */}
									<div className="border-t border-slate-700 pt-6">
										<div className="flex items-center space-x-3 mb-3">
											<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
											<span className="text-green-400 font-medium">{t.contact.availability.status}</span>
										</div>
										<p className="text-slate-400 text-sm">{t.contact.availability.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
