import { useState } from "react";
import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
	const { t } = useLocale();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });

			// Reset status after 3 seconds
			setTimeout(() => {
				setSubmitStatus("idle");
			}, 3000);
		}, 1000);
	};

	return (
		<section id="contact" className="py-20 bg-slate-900/30">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.contact.title} subtitle={t.contact.description} />

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Info */}
						<div className="space-y-8">
							<div className="cyber-card">
								<h3 className="text-2xl font-bold neon-text mb-6">{t.contact.connectTitle}</h3>

								<div className="space-y-6">
									{/* Contact methods */}
									<div className="space-y-4">
										<a
											href="mailto:joachim.jasmin@example.com"
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

						{/* Contact Form */}
						<div className="cyber-card">
							<h3 className="text-2xl font-bold text-cyber-purple mb-6">{t.contact.formTitle}</h3>

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Name field */}
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
										{t.contact.form.name}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300"
										placeholder={t.contact.form.namePlaceholder}
									/>
								</div>

								{/* Email field */}
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
										{t.contact.form.email}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300"
										placeholder={t.contact.form.emailPlaceholder}
									/>
								</div>

								{/* Message field */}
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
										{t.contact.form.message}
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={6}
										className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300 resize-none"
										placeholder={t.contact.form.messagePlaceholder}
									/>
								</div>

								{/* Submit button */}
								<button
									type="submit"
									disabled={isSubmitting}
									className={`
                    w-full py-3 rounded-lg font-semibold transition-all duration-300
                    ${isSubmitting ? "bg-slate-600 text-slate-400 cursor-not-allowed" : "cyber-button"}
                  `}
								>
									{isSubmitting ? (
										<span className="flex items-center justify-center space-x-2">
											<div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
											<span>{t.contact.form.submitting}</span>
										</span>
									) : (
										t.contact.form.submit
									)}
								</button>

								{/* Status messages */}
								{submitStatus === "success" && (
									<div className="p-4 bg-green-900/50 border border-green-500/50 rounded-lg text-green-400 text-center">{t.contact.form.success}</div>
								)}

								{submitStatus === "error" && (
									<div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-400 text-center">{t.contact.form.error}</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
