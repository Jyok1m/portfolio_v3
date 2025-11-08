import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";

interface TechModalProps {
	isOpen: boolean;
	onClose: () => void;
	tech: {
		name: string;
		icon: IconProp;
		description: string;
		color?: string;
	};
}

export default function TechModal({ isOpen, onClose, tech }: TechModalProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			// Petit délai pour déclencher l'animation d'entrée
			setTimeout(() => setIsAnimating(true), 20);
			// Désactiver le scroll du body
			document.body.style.overflow = "hidden";
		} else {
			setIsAnimating(false);
			// Attendre la fin de l'animation avant de cacher complètement
			setTimeout(() => setIsVisible(false), 300);
			// Réactiver le scroll du body
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				handleClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			onClose();
		}, 300);
	};

	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 ease-out ${isAnimating ? "opacity-100" : "opacity-0"}`}
				onClick={handleClose}
			/>

			{/* Modal */}
			<div
				className={`relative bg-slate-900/95 border border-slate-700/50 rounded-lg p-6 mx-4 max-w-md w-full shadow-2xl backdrop-blur-sm transition-all duration-500 ${
					isAnimating ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
				}`}
				style={{
					transitionTimingFunction: isAnimating ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				}}
			>
				{/* Close button */}
				<button onClick={handleClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-500">
					<FontAwesomeIcon icon={["fas", "times"]} />
				</button>

				{/* Content */}
				<div className="text-center">
					<div className="mb-4">
						<FontAwesomeIcon icon={tech.icon} className={`text-6xl ${tech.color ? `text-${tech.color}` : "text-cyber-cyan"}`} />
					</div>

					<h3 className={`text-2xl font-bold mb-4 ${tech.color ? `text-${tech.color}` : "text-cyber-cyan"}`}>{tech.name}</h3>

					<p className="text-slate-300 leading-relaxed">{tech.description}</p>
				</div>

				{/* Decorative bottom border */}
				<div className="mt-6 flex justify-center">
					<div className={`w-16 h-1 rounded-full ${tech.color ? `bg-${tech.color}` : "bg-cyber-cyan"}`} />
				</div>
			</div>
		</div>
	);
}
