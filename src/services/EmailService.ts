export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export interface EmailResponse {
	message?: string;
	error?: string;
}

export class EmailService {
	private static readonly API_ENDPOINT = "/api/send-email";

	static async sendEmail(formData: ContactFormData): Promise<EmailResponse> {
		try {
			const response = await fetch(this.API_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Erreur lors de l'envoi de l'email");
			}

			return data;
		} catch (error) {
			console.error("Erreur EmailService:", error);
			throw error instanceof Error ? error : new Error("Erreur inconnue");
		}
	}

	static validateEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	static validateFormData(data: ContactFormData): string | null {
		if (!data.name.trim()) {
			return "Le nom est requis";
		}
		if (!data.email.trim()) {
			return "L'email est requis";
		}
		if (!this.validateEmail(data.email)) {
			return "Format d'email invalide";
		}
		if (!data.message.trim()) {
			return "Le message est requis";
		}
		if (data.message.length < 10) {
			return "Le message doit contenir au moins 10 caractères";
		}
		return null;
	}
}
