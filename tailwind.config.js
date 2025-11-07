/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Palette futuriste
				"cyber-dark": "#0f172a",
				"cyber-blue": "#0ea5e9",
				"cyber-cyan": "#38bdf8",
				"cyber-purple": "#6366f1",
				"cyber-violet": "#8b5cf6",
				"cyber-pink": "#ec4899",
				"neon-green": "#10b981",
				"neon-yellow": "#f59e0b",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["Space Mono", "Courier New", "monospace"],
			},
			animation: {
				glow: "glow 2s ease-in-out infinite alternate",
				float: "float 6s ease-in-out infinite",
				"pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				glow: {
					"0%": {
						boxShadow: "0 0 5px rgb(56 189 248), 0 0 10px rgb(56 189 248), 0 0 15px rgb(56 189 248)",
						transform: "scale(1)",
					},
					"100%": {
						boxShadow: "0 0 10px rgb(56 189 248), 0 0 20px rgb(56 189 248), 0 0 30px rgb(56 189 248)",
						transform: "scale(1.02)",
					},
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
			backgroundImage: {
				"gradient-cyber": "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
				"gradient-neon": "linear-gradient(90deg, #38bdf8, #6366f1, #8b5cf6)",
				"gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
			},
			boxShadow: {
				neon: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
				"neon-lg": "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
				cyber: "0 8px 32px 0 rgba(56, 189, 248, 0.37)",
			},
			backdropBlur: {
				xs: "2px",
			},
		},
	},
	plugins: [],
};
