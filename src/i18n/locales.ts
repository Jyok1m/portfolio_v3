export const locales = {
	fr: {
		nav: {
			home: "Accueil",
			about: "À propos",
			skills: "Compétences",
			education: "Formation",
			interests: "Passions",
			projects: "Projets & Liens",
			contact: "Contact",
		},
		hero: {
			title: "Ingénieur Cloud & DevOps, Fullstack et IA — et formateur.",
			subtitle: "Je construis des plateformes cloud, des apps web et j'enseigne en bootcamp.",
			ctaPrimary: "Voir mes projets",
			ctaSecondary: "Me contacter",
		},
		about: {
			title: "À propos de moi",
			description:
				"Passionné par la technologie, je combine expertise technique et pédagogie pour créer des solutions innovantes. Mon parcours m'a mené de l'infrastructure cloud aux applications web, en passant par l'intelligence artificielle.",
			content:
				"En tant qu'ingénieur Cloud & DevOps, je conçois et déploie des architectures scalables sur AWS avec Terraform, Ansible et Kubernetes. Côté développement, je crée des applications fullstack avec React/Next.js et Node.js/NestJS. Mon travail avec l'IA se concentre sur l'intégration des LLM via LangChain et FastAPI. En parallèle, je transmets ma passion en enseignant dans des bootcamps intensifs.",
		},
		skills: {
			title: "Compétences",
			description: "Un éventail de technologies pour des solutions complètes",
			categories: {
				cloud: {
					title: "Cloud & DevOps",
					skills: ["AWS", "Terraform", "Ansible", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitLab CI"],
				},
				fullstack: {
					title: "Développement Fullstack",
					skills: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "MongoDB", "PostgreSQL", "Express"],
				},
				ai: {
					title: "Intelligence Artificielle",
					skills: ["OpenAI GPT", "LangChain", "FastAPI", "Python", "Machine Learning", "Ollama", "Vector DB"],
				},
				teaching: {
					title: "Formation & Pédagogie",
					skills: ["Bootcamp", "Mentorat", "Curriculum", "Évaluation", "Projets pratiques", "Veille techno"],
				},
			},
		},
		education: {
			title: "Diplômes & Certificats",
			subtitle: "Mon parcours académique et professionnel en management, technologie et intelligence artificielle",
			badges: {
				degree: "Diplôme",
				certification: "Certification",
			},
			actions: {
				view: "Voir le document",
				download: "Télécharger le PDF",
			},
			stats: {
				degrees: "Diplômes",
				certifications: "Certifications",
				years: "Années d'études",
				domains: "Domaines",
			},
			items: {
				aiEngineer: {
					title: "Certification Ingénieur IA",
					institution: "Ironhack",
					description: "Intelligence artificielle et machine learning",
				},
				rncp: {
					title: "RNCP 6 - Chef de projet de développement d'applications web & mobiles",
					institution: "Applications Web & Mobiles",
					description: "Certification professionnelle niveau Bac+3/4",
				},
				mscSkema: {
					title: "MSc Corporate Financial Management",
					institution: "SKEMA Business School",
					description: "Management financier d'entreprise et stratégie",
				},
				desmiSkema: {
					title: "DESMI en Management International",
					institution: "SKEMA Business School",
					description: "Diplôme visé par le Ministère français de l'Enseignement Supérieur",
				},
				bbaGlion: {
					title: "BBA (Hons.) en Management Hôtelier avec Développement Hôtelier International et Finance",
					institution: "Glion Institute of Higher Education",
					description: "Bachelor of Business Administration obtenu avec Honeurs et Merite",
				},
			},
		},
		interests: {
			title: "Mes Passions",
			description: "Au-delà du code, ce qui m'anime",
			items: {
				kendo: {
					title: "Kendo",
					description: "Art martial traditionnel japonais, discipline et dépassement de soi",
				},
				tech: {
					title: "Veille Technologique",
					description: "Exploration des nouvelles technologies et tendances",
				},
				anime: {
					title: "Animes & Mangas",
					description: "Fan de culture japonaise et de storytelling visuel",
				},
				gaming: {
					title: "Jeux Vidéo Solo",
					description: "Aventures narratives et mondes immersifs",
				},
				theater: {
					title: "Théâtre",
					description: "Expression artistique et travail sur la présence scénique",
				},
				food: {
					title: "Gastronomie",
					description: "Découverte culinaire et art de vivre",
				},
			},
		},
		projects: {
			title: "Mes Projets et Liens",
			description: "Quelques plateformes, outils et expériences techniques que j'ai développés.",
			cta: {
				site: "Voir le site",
				repo: "Code source",
			},
			items: [
				{
					slug: "odyssai",
					name: "Odyssai",
					description: "Jeu narratif IA mêlant voix, texte et aventure interactive.",
					stack: ["LangChain", "React Native", "Flask", "OpenAI"],
					links: {
						site: "#",
						repo: "#",
					},
				},
				{
					slug: "ai-wedder",
					name: "AI Wedder",
					description: "Plateforme d'analyse d'avis prestataires mariage avec IA.",
					stack: ["FastAPI", "MongoDB", "OpenAI", "React"],
					links: {
						site: "#",
						repo: "#",
					},
				},
				{
					slug: "cloud-infra",
					name: "Infrastructure Cloud",
					description: "Templates Terraform pour architectures AWS scalables.",
					stack: ["Terraform", "AWS", "Kubernetes", "Ansible"],
					links: {
						site: "#",
						repo: "#",
					},
				},
				{
					slug: "bootcamp-platform",
					name: "Plateforme Bootcamp",
					description: "Outil de gestion et suivi des apprenants en formation intensive.",
					stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
					links: {
						site: "#",
						repo: "#",
					},
				},
			],
		},
		contact: {
			title: "Contactez-moi",
			description: "Prêt pour de nouveaux défis techniques",
			form: {
				name: "Nom",
				email: "Email",
				message: "Message",
				submit: "Envoyer",
				success: "Message envoyé avec succès !",
				error: "Erreur lors de l'envoi du message.",
			},
		},
	},
	en: {
		nav: {
			home: "Home",
			about: "About",
			skills: "Skills",
			education: "Education",
			interests: "Interests",
			projects: "Projects & Links",
			contact: "Contact",
		},
		hero: {
			title: "Cloud & DevOps, Fullstack and AI Engineer — and Teacher.",
			subtitle: "I build cloud platforms, web apps and I teach in bootcamps.",
			ctaPrimary: "View my projects",
			ctaSecondary: "Contact me",
		},
		about: {
			title: "About me",
			description:
				"Passionate about technology, I combine technical expertise and pedagogy to create innovative solutions. My journey has led me from cloud infrastructure to web applications, through artificial intelligence.",
			content:
				"As a Cloud & DevOps engineer, I design and deploy scalable architectures on AWS with Terraform, Ansible and Kubernetes. On the development side, I create fullstack applications with React/Next.js and Node.js/NestJS. My AI work focuses on LLM integration via LangChain and FastAPI. In parallel, I share my passion by teaching in intensive bootcamps.",
		},
		skills: {
			title: "Skills",
			description: "A range of technologies for complete solutions",
			categories: {
				cloud: {
					title: "Cloud & DevOps",
					skills: ["AWS", "Terraform", "Ansible", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitLab CI"],
				},
				fullstack: {
					title: "Fullstack Development",
					skills: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "MongoDB", "PostgreSQL", "Express"],
				},
				ai: {
					title: "Artificial Intelligence",
					skills: ["OpenAI GPT", "LangChain", "FastAPI", "Python", "Machine Learning", "Ollama", "Vector DB"],
				},
				teaching: {
					title: "Teaching & Pedagogy",
					skills: ["Bootcamp", "Mentoring", "Curriculum", "Assessment", "Practical projects", "Tech watch"],
				},
			},
		},
		education: {
			title: "Degrees & Certificates",
			subtitle: "My academic and professional journey in management, technology and artificial intelligence",
			badges: {
				degree: "Degree",
				certification: "Certification",
			},
			actions: {
				view: "View document",
				download: "Download PDF",
			},
			stats: {
				degrees: "Degrees",
				certifications: "Certifications",
				years: "Study years",
				domains: "Domains",
			},
			items: {
				aiEngineer: {
					title: "AI Engineer Certification",
					institution: "Ironhack",
					description: "Artificial intelligence and machine learning",
				},
				rncp: {
					title: "RNCP 6 - Web & Mobile Application Development Project Manager",
					institution: "Web & Mobile Applications",
					description: "Professional certification level Bachelor+3/4",
				},
				mscSkema: {
					title: "MSc Corporate Financial Management",
					institution: "SKEMA Business School",
					description: "Corporate financial management and strategy",
				},
				desmiSkema: {
					title: "DESMI in International Management",
					institution: "SKEMA Business School",
					description: "Degree endorsed by the French Ministry for Higher Education, Research and Innovation",
				},
				bbaGlion: {
					title: "BBA (Hons.) in Hospitality Management with International Hotel Development and Finance",
					institution: "Glion Institute of Higher Education",
					description: "Bachelor of Business Administration obtained with Honours and Merit",
				},
			},
		},
		interests: {
			title: "My Interests",
			description: "Beyond code, what drives me",
			items: {
				kendo: {
					title: "Kendo",
					description: "Traditional Japanese martial art, discipline and self-improvement",
				},
				tech: {
					title: "Tech Watch",
					description: "Exploring new technologies and trends",
				},
				anime: {
					title: "Anime & Manga",
					description: "Fan of Japanese culture and visual storytelling",
				},
				gaming: {
					title: "Solo Gaming",
					description: "Narrative adventures and immersive worlds",
				},
				theater: {
					title: "Theater",
					description: "Artistic expression and stage presence work",
				},
				food: {
					title: "Gastronomy",
					description: "Culinary discovery and art of living",
				},
			},
		},
		projects: {
			title: "My Projects & Links",
			description: "Some platforms, tools and technical experiments I've developed.",
			cta: {
				site: "View site",
				repo: "Source code",
			},
			items: [
				{
					slug: "odyssai",
					name: "Odyssai",
					description: "AI narrative game blending voice, text and interactive adventure.",
					stack: ["LangChain", "React Native", "Flask", "OpenAI"],
					links: {
						site: "#",
						repo: "#",
					},
				},
				{
					slug: "ai-wedder",
					name: "AI Wedder",
					description: "Wedding vendors review analysis platform with AI.",
					stack: ["FastAPI", "MongoDB", "OpenAI", "React"],
					links: {
						site: "#",
						repo: "#",
					},
				},
				{
					slug: "cloud-infra",
					name: "Cloud Infrastructure",
					description: "Terraform templates for scalable AWS architectures.",
					stack: ["Terraform", "AWS", "Kubernetes", "Ansible"],
					links: {
						site: "#",
						repo: "#",
					},
				},
				{
					slug: "bootcamp-platform",
					name: "Bootcamp Platform",
					description: "Management and tracking tool for intensive training students.",
					stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
					links: {
						site: "#",
						repo: "#",
					},
				},
			],
		},
		contact: {
			title: "Contact me",
			description: "Ready for new technical challenges",
			form: {
				name: "Name",
				email: "Email",
				message: "Message",
				submit: "Send",
				success: "Message sent successfully!",
				error: "Error sending message.",
			},
		},
	},
};

export type LocaleKey = keyof typeof locales;
export type LocaleContent = typeof locales.fr;
