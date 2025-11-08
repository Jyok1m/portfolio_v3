export const locales = {
	fr: {
		common: {
			loading: "Chargement...",
			error: "Erreur",
			download: "Télécharger",
			close: "Fermer",
			view: "Voir",
		},
		pdf: {
			downloadTitle: "Télécharger le PDF",
			loading: "Chargement du document...",
			error: "Erreur lors du chargement du PDF",
			downloadButton: "Télécharger le fichier",
		},
		footer: {
			copyright: "© 2025 Joachim Jasmin. Fait avec",
			madeWith: "et React Three Fiber.",
		},
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
			title: "Ingénieur et formateur IA, DevOps et Web & Mobile.",
			subtitle: "Expert en DevOps, IA et Développement Web & Mobile FullStack - je transforme les idées en solutions techniques complètes.",
			ctaPrimary: "Voir mes projets",
			ctaSecondary: "Me contacter",
		},
		about: {
			title: "À propos de moi",
			description:
				"Mon parcours est celui d'une reconversion audacieuse : de la finance et l'hôtellerie à l'intelligence artificielle, en passant par le développement web et le DevOps. Une évolution guidée par la curiosité et la passion de transmettre.",
			content:
				"Diplômé en management hôtelier et finance, j'ai découvert ma passion pour la technologie et opéré une reconversion vers le développement fullstack, avant d'évoluer vers l'expertise DevOps puis l'intelligence artificielle. Aujourd'hui, je conçois et déploie des infrastructures Cloud scalables avec Terraform et AWS, développe des applications avec React/Next.js et Node.js, et intègre des solutions IA via LangChain et OpenAI. Cette polyvalence technique, combinée à mon expérience business, me permet de créer des solutions complètes et de former la nouvelle génération de professionnels tech en bootcamp.",
		},
		skills: {
			title: "Compétences",
			description: "Un éventail de technologies pour des solutions complètes",
			additionalTech: "Technologies Complémentaires",
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
			techDetails: {
				// About section icons
				Cloud:
					"Expertise en architectures cloud scalables avec AWS, déploiement d'infrastructures robustes et automatisation DevOps pour des solutions d'entreprise.",
				React:
					"Développement d'interfaces utilisateur modernes et performantes avec React, Next.js et l'écosystème JavaScript/TypeScript pour des expériences web exceptionnelles.",
				AI: "Intégration d'intelligence artificielle via OpenAI, LangChain et développement de solutions IA personnalisées pour automatiser et enrichir les applications.",
				Teaching:
					"Formation technique en bootcamp, mentorat de développeurs juniors et création de curricula adaptés aux besoins du marché tech actuel.",
				// Skills section technologies
				AWS: "Plateforme cloud leader pour déployer des infrastructures scalables, gérer les services managés et optimiser les coûts d'exploitation.",
				Terraform: "Infrastructure as Code pour provisionner et gérer les ressources cloud de manière déclarative, reproductible et versionnée.",
				Ansible: "Automatisation de la configuration et du déploiement d'applications, permettant une gestion cohérente des environnements.",
				Docker: "Conteneurisation d'applications pour garantir la portabilité, la cohérence et l'efficacité des déploiements multi-environnements.",
				Kubernetes:
					"Orchestration de conteneurs pour gérer des applications distribuées à grande échelle avec résilience et montée en charge automatique.",
				"CI/CD":
					"Pipelines d'intégration et déploiement continus pour automatiser les tests, builds et mises en production avec qualité et rapidité.",
				Jenkins: "Serveur d'automatisation open-source pour orchestrer les pipelines de développement et maintenir la qualité du code.",
				"GitLab CI": "Solution DevOps intégrée combinant gestion de code, CI/CD et monitoring dans une plateforme unifiée et collaborative.",
				"Next.js":
					"Framework React full-stack pour créer des applications web performantes avec SSR/SSG, optimisation automatique et expérience développeur exceptionnelle.",
				TypeScript:
					"Superset de JavaScript apportant typage statique pour réduire les erreurs, améliorer la maintenabilité et l'expérience développeur.",
				"Node.js": "Runtime JavaScript côté serveur pour construire des APIs rapides, scalables et des applications temps réel performantes.",
				NestJS: "Framework Node.js inspiré d'Angular pour créer des APIs robustes, modulaires et maintenables avec TypeScript native.",
				MongoDB: "Base de données NoSQL flexible et scalable, parfaite pour les applications modernes nécessitant agilité et performances.",
				PostgreSQL: "Système de gestion de base de données relationnelle avancé, fiable et extensible pour les applications critiques d'entreprise.",
				Express: "Framework web minimaliste et flexible pour Node.js, idéal pour créer rapidement des APIs RESTful et des applications web.",
				"OpenAI GPT":
					"Modèles de langage avancés pour intégrer des capacités conversationnelles et de génération de contenu intelligent dans les applications.",
				LangChain:
					"Framework pour développer des applications alimentées par des LLMs, simplifiant l'intégration de l'IA dans des workflows complexes.",
				FastAPI:
					"Framework Python moderne et rapide pour créer des APIs avec validation automatique, documentation interactive et performance optimale.",
				Python: "Langage polyvalent excellent pour l'IA, le machine learning, l'automation et le développement backend rapide et maintenable.",
				"Machine Learning":
					"Techniques d'apprentissage automatique pour créer des modèles prédictifs et des systèmes intelligents adaptés aux besoins métier.",
				Ollama: "Plateforme pour exécuter des modèles de langage localement, offrant contrôle, confidentialité et personnalisation avancée.",
				"Vector DB":
					"Bases de données vectorielles pour stocker et rechercher efficacement des embeddings, essentielles pour les applications IA sémantiques.",
				Bootcamp:
					"Formation intensive et pratique pour transformer rapidement des profils en développeurs opérationnels avec méthodologies pédagogiques éprouvées.",
				Mentorat:
					"Accompagnement personnalisé de développeurs juniors pour accélérer leur montée en compétences et leur intégration professionnelle.",
				Curriculum: "Conception de programmes de formation tech alignés sur les besoins du marché et les évolutions technologiques actuelles.",
				Évaluation:
					"Méthodes d'assessment techniques pour mesurer objectivement les compétences et orienter les parcours d'apprentissage individuels.",
				"Projets pratiques": "Pédagogie par projet pour ancrer les apprentissages dans des réalisations concrètes et professionnalisantes.",
				"Veille techno":
					"Surveillance continue des innovations technologiques pour maintenir l'excellence pédagogique et l'employabilité des apprenants.",
				// Additional technologies
				Git: "Système de contrôle de version distribué indispensable pour collaborer efficacement et maintenir l'historique des projets de développement.",
				Linux: "Système d'exploitation open-source robuste et flexible, fondamental pour les environnements de développement et production serveur.",
				"VS Code":
					"Éditeur de code moderne et extensible offrant une productivité maximale avec debugging intégré, extensions et collaboration temps réel.",
				Figma: "Outil de design collaboratif pour créer des interfaces utilisateur cohérentes et traduire efficacement les concepts visuels en code.",
				Postman: "Plateforme de développement d'API pour tester, documenter et monitorer les services web avec collaboration d'équipe intégrée.",
				Redis: "Base de données en mémoire ultra-rapide pour le caching, sessions et traitement de données temps réel à haute performance.",
				Nginx: "Serveur web et proxy inverse haute performance pour servir du contenu statique, load balancing et termination SSL.",
				GraphQL:
					"Langage de requête API flexible permettant aux clients de demander exactement les données nécessaires avec efficacité et typage fort.",
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
			quote: "La passion pour la technologie se nourrit de la curiosité constante et du partage des connaissances.",
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
			status: {
				active: "Actif",
			},
			techStack: "Stack Technique :",
			moreProjects: {
				title: "Plus de projets à venir",
				description:
					"Je travaille constamment sur de nouveaux projets et expérimentations. Restez connecté pour découvrir mes prochaines créations !",
			},
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
			connectTitle: "Connectons-nous",
			availability: {
				status: "Disponible pour nouveaux projets",
				description: "Ouvert aux opportunités en Cloud/DevOps, Fullstack, IA et formations.",
			},
			formTitle: "Envoyez-moi un message",
			contactMethods: {
				email: {
					label: "Email",
					description: "joachim.jasmin@example.com",
				},
				linkedin: {
					label: "LinkedIn",
					description: "Réseau Professionnel",
				},
				github: {
					label: "GitHub",
					description: "Dépôt de Code",
				},
				gitlab: {
					label: "GitLab",
					description: "Dépôt Git",
				},
			},
		},
	},
	en: {
		common: {
			loading: "Loading...",
			error: "Error",
			download: "Download",
			close: "Close",
			view: "View",
		},
		pdf: {
			downloadTitle: "Download PDF",
			loading: "Loading document...",
			error: "Error loading PDF",
			downloadButton: "Download file",
		},
		footer: {
			copyright: "© 2025 Joachim Jasmin. Made with",
			madeWith: "and React Three Fiber.",
		},
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
			subtitle: "DevOps, AI and Web & Mobile FullStack Development expert - I transform ideas into complete technical solutions.",
			ctaPrimary: "View my projects",
			ctaSecondary: "Contact me",
		},
		about: {
			title: "About me",
			description:
				"My journey is one of bold career transformation: from finance and hospitality to artificial intelligence, through web development and DevOps. An evolution guided by curiosity and the passion to share knowledge.",
			content:
				"With degrees in hospitality management and finance, I discovered my passion for technology and made a career shift to fullstack development, before evolving to DevOps expertise and then artificial intelligence. Today, I design and deploy scalable Cloud infrastructures with Terraform and AWS, build applications with React/Next.js and Node.js, and integrate AI solutions via LangChain and OpenAI. This technical versatility, combined with my business background, enables me to create comprehensive solutions and train the next generation of tech professionals in bootcamps.",
		},
		skills: {
			title: "Skills",
			description: "A range of technologies for complete solutions",
			additionalTech: "Additional Technologies",
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
			techDetails: {
				// About section icons
				Cloud: "Expertise in scalable cloud architectures with AWS, deploying robust infrastructures and DevOps automation for enterprise solutions.",
				React:
					"Development of modern and performant user interfaces with React, Next.js and JavaScript/TypeScript ecosystem for exceptional web experiences.",
				AI: "Artificial intelligence integration via OpenAI, LangChain and development of custom AI solutions to automate and enrich applications.",
				Teaching: "Technical training in bootcamps, mentoring junior developers and creating curricula adapted to current tech market needs.",
				// Skills section technologies
				AWS: "Leading cloud platform for deploying scalable infrastructures, managing managed services and optimizing operational costs.",
				Terraform: "Infrastructure as Code to provision and manage cloud resources declaratively, reproducibly and versioned.",
				Ansible: "Configuration and application deployment automation, enabling consistent environment management.",
				Docker: "Application containerization to ensure portability, consistency and efficiency of multi-environment deployments.",
				Kubernetes: "Container orchestration to manage large-scale distributed applications with resilience and automatic scaling.",
				"CI/CD": "Continuous integration and deployment pipelines to automate testing, builds and production releases with quality and speed.",
				Jenkins: "Open-source automation server to orchestrate development pipelines and maintain code quality.",
				"GitLab CI": "Integrated DevOps solution combining code management, CI/CD and monitoring in a unified and collaborative platform.",
				"Next.js":
					"Full-stack React framework to create performant web applications with SSR/SSG, automatic optimization and exceptional developer experience.",
				TypeScript: "JavaScript superset bringing static typing to reduce errors, improve maintainability and developer experience.",
				"Node.js": "Server-side JavaScript runtime to build fast, scalable APIs and performant real-time applications.",
				NestJS: "Angular-inspired Node.js framework to create robust, modular and maintainable APIs with native TypeScript.",
				MongoDB: "Flexible and scalable NoSQL database, perfect for modern applications requiring agility and performance.",
				PostgreSQL: "Advanced, reliable and extensible relational database management system for critical enterprise applications.",
				Express: "Minimal and flexible web framework for Node.js, ideal for quickly creating RESTful APIs and web applications.",
				"OpenAI GPT": "Advanced language models to integrate conversational capabilities and intelligent content generation into applications.",
				LangChain: "Framework for developing LLM-powered applications, simplifying AI integration into complex workflows.",
				FastAPI: "Modern and fast Python framework to create APIs with automatic validation, interactive documentation and optimal performance.",
				Python: "Versatile language excellent for AI, machine learning, automation and fast, maintainable backend development.",
				"Machine Learning": "Automatic learning techniques to create predictive models and intelligent systems adapted to business needs.",
				Ollama: "Platform to run language models locally, offering control, privacy and advanced customization.",
				"Vector DB": "Vector databases to efficiently store and search embeddings, essential for semantic AI applications.",
				Bootcamp: "Intensive and practical training to quickly transform profiles into operational developers with proven pedagogical methodologies.",
				Mentoring: "Personalized support for junior developers to accelerate their skill development and professional integration.",
				Curriculum: "Design of tech training programs aligned with market needs and current technological developments.",
				Assessment: "Technical assessment methods to objectively measure skills and guide individual learning paths.",
				"Practical projects": "Project-based pedagogy to anchor learning in concrete and professionalizing achievements.",
				"Tech watch": "Continuous monitoring of technological innovations to maintain pedagogical excellence and learner employability.",
				// Additional technologies
				Git: "Distributed version control system essential for effective collaboration and maintaining development project history.",
				Linux: "Robust and flexible open-source operating system, fundamental for development and server production environments.",
				"VS Code":
					"Modern and extensible code editor offering maximum productivity with integrated debugging, extensions and real-time collaboration.",
				Figma: "Collaborative design tool to create consistent user interfaces and effectively translate visual concepts into code.",
				Postman: "API development platform to test, document and monitor web services with integrated team collaboration.",
				Redis: "Ultra-fast in-memory database for caching, sessions and real-time data processing with high performance.",
				Nginx: "High-performance web server and reverse proxy for serving static content, load balancing and SSL termination.",
				GraphQL: "Flexible API query language allowing clients to request exactly the necessary data with efficiency and strong typing.",
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
			quote: "Passion for technology is nurtured by constant curiosity and knowledge sharing.",
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
			status: {
				active: "Active",
			},
			techStack: "Tech Stack:",
			moreProjects: {
				title: "More projects coming",
				description: "I'm constantly working on new projects and experiments. Stay connected to discover my next creations!",
			},
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
			connectTitle: "Let's connect",
			availability: {
				status: "Available for new projects",
				description: "Open to opportunities in Cloud/DevOps, Fullstack, AI and training.",
			},
			formTitle: "Send me a message",
			contactMethods: {
				email: {
					label: "Email",
					description: "joachim.jasmin@example.com",
				},
				linkedin: {
					label: "LinkedIn",
					description: "Professional Network",
				},
				github: {
					label: "GitHub",
					description: "Code Repository",
				},
				gitlab: {
					label: "GitLab",
					description: "Git Repository",
				},
			},
		},
	},
};

export type LocaleKey = keyof typeof locales;
export type LocaleContent = typeof locales.fr;
