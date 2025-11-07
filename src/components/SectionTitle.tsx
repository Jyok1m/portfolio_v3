interface SectionTitleProps {
	title: string;
	subtitle?: string;
	className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
	return (
		<div className={`text-center mb-16 ${className}`}>
			<h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">{title}</h2>
			{subtitle && <p className="text-xl text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
			{/* Decorative line */}
			<div className="mt-6 flex justify-center">
				<div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full"></div>
			</div>
		</div>
	);
}
