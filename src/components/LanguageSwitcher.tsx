import { useLocale } from "../i18n/useLocale";
import { LocaleKey } from "../i18n/locales";

export default function LanguageSwitcher() {
	const { locale, setLocale } = useLocale();

	const languages = [
		{ code: "fr" as LocaleKey, label: "🇫🇷", flag: "🇫🇷" },
		{ code: "en" as LocaleKey, label: "🇺🇸", flag: "🇺🇸" },
	];

	return (
		<div className="flex items-center space-x-1 bg-slate-900/50 rounded-lg p-1 border border-slate-700">
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => setLocale(lang.code)}
					className={`
            px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-300
            ${locale === lang.code ? "bg-cyber-cyan text-cyber-dark shadow-neon" : "text-slate-300 hover:text-cyber-cyan hover:bg-slate-800"}
          `}
				>
					<span className="hidden xs:inline sm:inline">{lang.label}</span>
				</button>
			))}
		</div>
	);
}
