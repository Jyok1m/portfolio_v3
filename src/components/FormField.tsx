import { ReactNode } from "react";

interface FormFieldProps {
	label: string;
	name: string;
	type?: "text" | "email" | "textarea";
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	placeholder?: string;
	required?: boolean;
	rows?: number;
	error?: string;
	icon?: ReactNode;
}

export default function FormField({
	label,
	name,
	type = "text",
	value,
	onChange,
	placeholder,
	required = false,
	rows = 4,
	error,
	icon,
}: FormFieldProps) {
	const baseClasses =
		"w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-colors duration-300";
	const normalClasses = "border-slate-600 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan";
	const errorClasses = "border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400";

	const inputClasses = `${baseClasses} ${error ? errorClasses : normalClasses}`;

	const InputComponent = type === "textarea" ? "textarea" : "input";

	return (
		<div className="space-y-2">
			<label htmlFor={name} className="block text-sm font-medium text-slate-300">
				<span className="flex items-center space-x-2">
					{icon && <span className="text-cyber-cyan">{icon}</span>}
					<span>{label}</span>
					{required && <span className="text-red-400">*</span>}
				</span>
			</label>

			<div className="relative">
				<InputComponent
					id={name}
					name={name}
					type={type !== "textarea" ? type : undefined}
					value={value}
					onChange={onChange}
					required={required}
					placeholder={placeholder}
					rows={type === "textarea" ? rows : undefined}
					className={inputClasses}
				/>

				{/* Indicateur de validation visuelle */}
				{value && !error && (
					<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
						<div className="w-2 h-2 bg-green-400 rounded-full"></div>
					</div>
				)}
			</div>

			{/* Message d'erreur */}
			{error && (
				<p className="text-sm text-red-400 flex items-center space-x-1">
					<span>⚠️</span>
					<span>{error}</span>
				</p>
			)}

			{/* Indicateur de caractères pour textarea */}
			{type === "textarea" && (
				<div className="text-xs text-slate-400 text-right">
					{value.length} caractères
					{value.length < 10 && " (minimum 10)"}
				</div>
			)}
		</div>
	);
}
