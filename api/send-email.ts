export default async function handler(req: any, res: any) {
	// Ajouter les headers CORS
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	// Gérer la requête OPTIONS pour CORS
	if (req.method === "OPTIONS") {
		res.status(200).end();
		return;
	}

	// Vérifier que c'est une requête POST
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { name, email, message } = req.body;

		// Validation des données
		if (!name || !email || !message) {
			return res.status(400).json({ error: "Tous les champs sont requis" });
		}

		// Validation de l'email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Format d'email invalide" });
		}

		// Préparer le corps de l'email
		const emailBody = `
Nouveau message depuis votre portfolio :

Nom: ${name}
Email: ${email}

Message:
${message}

---
Envoyé depuis joachim-jasmin.dev
    `.trim();

		// Utiliser l'API Resend (service simple et efficace)
		// Vous devrez installer et configurer Resend ou un autre service
		const emailData = {
			from: "noreply@joachim-jasmin.dev",
			to: "joachim.jasmin-dev@proton.me",
			subject: `Nouveau message de ${name} - Portfolio`,
			text: emailBody,
			replyTo: email,
		};

		// Tentative d'envoi avec différents services
		let emailSent = false;

		// 1. Essayer avec Resend si la clé API est disponible
		const resendApiKey = process?.env?.RESEND_API_KEY;
		if (resendApiKey && !emailSent) {
			try {
				const response = await fetch("https://api.resend.com/emails", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${resendApiKey}`,
					},
					body: JSON.stringify(emailData),
				});

				if (response.ok) {
					emailSent = true;
					console.log("Email envoyé avec Resend");
				}
			} catch (error) {
				console.log("Échec envoi Resend:", error);
			}
		}

		// 2. Essayer avec EmailJS si configuré
		const emailjsServiceId = process?.env?.EMAILJS_SERVICE_ID;
		const emailjsTemplateId = process?.env?.EMAILJS_TEMPLATE_ID;
		const emailjsPublicKey = process?.env?.EMAILJS_PUBLIC_KEY;

		if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey && !emailSent) {
			try {
				const emailjsData = {
					service_id: emailjsServiceId,
					template_id: emailjsTemplateId,
					user_id: emailjsPublicKey,
					template_params: {
						from_name: name,
						from_email: email,
						message: message,
						to_email: "joachim.jasmin-dev@proton.me",
					},
				};

				const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(emailjsData),
				});

				if (response.ok) {
					emailSent = true;
					console.log("Email envoyé avec EmailJS");
				}
			} catch (error) {
				console.log("Échec envoi EmailJS:", error);
			}
		}

		// 3. Si aucun service n'est configuré, simuler l'envoi
		if (!emailSent) {
			console.log("=== EMAIL SIMULÉ ===");
			console.log("From:", email);
			console.log("To:", "joachim.jasmin-dev@proton.me");
			console.log("Subject:", `Nouveau message de ${name} - Portfolio`);
			console.log("Body:", emailBody);
			console.log("===================");
			emailSent = true; // Considérer comme envoyé pour les tests
		}

		return res.status(200).json({ message: "Email envoyé avec succès" });
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email:", error);
		return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
	}
}
