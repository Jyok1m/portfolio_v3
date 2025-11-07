import { useState, useCallback } from "react";
import { EmailService, type ContactFormData } from "../services/EmailService";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export interface UseContactFormReturn {
	formData: ContactFormData;
	isSubmitting: boolean;
	submitStatus: SubmitStatus;
	errorMessage: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	handleSubmit: (e: React.FormEvent) => Promise<void>;
	resetForm: () => void;
}

const initialFormData: ContactFormData = {
	name: "",
	email: "",
	message: "",
};

export const useContactForm = (): UseContactFormReturn => {
	const [formData, setFormData] = useState<ContactFormData>(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;

			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));

			// Réinitialiser le statut d'erreur lors de la modification
			if (submitStatus === "error") {
				setSubmitStatus("idle");
				setErrorMessage("");
			}
		},
		[submitStatus]
	);

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault();

			if (isSubmitting) return; // Éviter les soumissions multiples

			setIsSubmitting(true);
			setSubmitStatus("submitting");
			setErrorMessage("");

			try {
				// Validation côté client
				const validationError = EmailService.validateFormData(formData);
				if (validationError) {
					setErrorMessage(validationError);
					setSubmitStatus("error");
					return;
				}

				// Envoi de l'email
				await EmailService.sendEmail(formData);

				// Succès
				setSubmitStatus("success");
				setFormData(initialFormData);

				// Réinitialiser le statut après 5 secondes
				setTimeout(() => {
					setSubmitStatus("idle");
				}, 5000);
			} catch (error) {
				console.error("Erreur lors de l'envoi:", error);
				setErrorMessage(error instanceof Error ? error.message : "Erreur lors de l'envoi de l'email");
				setSubmitStatus("error");
			} finally {
				setIsSubmitting(false);
			}
		},
		[formData, isSubmitting]
	);

	const resetForm = useCallback(() => {
		setFormData(initialFormData);
		setSubmitStatus("idle");
		setErrorMessage("");
		setIsSubmitting(false);
	}, []);

	return {
		formData,
		isSubmitting,
		submitStatus: isSubmitting ? "submitting" : submitStatus,
		errorMessage,
		handleChange,
		handleSubmit,
		resetForm,
	};
};
