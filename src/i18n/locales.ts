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
					skills: [
						"AWS",
						"Terraform",
						"Ansible",
						"Docker",
						"Kubernetes",
						"CI/CD",
						"Jenkins",
						"GitLab CI",
						"Traefik",
						"Prometheus",
						"Grafana",
						"SonarQube",
						"Cypress",
						"Playwright",
						"Locust",
						"Artillery",
					],
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
				"Cloud & DevOps":
					"Je vois le DevOps comme une philosophie : automatiser et collaborer dès l'amont pour éviter les crises en aval. En pratique, je conçois des infrastructures AWS scalables avec Terraform, automatise les déploiements pour libérer du temps à l'innovation.",
				"Full-Stack":
					"Pour moi, le développement fullstack c'est maîtriser toute la chaîne : de l'interface utilisateur élégante avec React/Next.js jusqu'aux APIs robustes en Node.js. L'objectif ? Créer des expériences cohérentes où technique et usage se rejoignent.",
				AI: "L'IA, je la vois comme un amplificateur d'intelligence humaine plutôt qu'un remplacement. J'intègre OpenAI et LangChain pour créer des solutions qui augmentent les capacités métier sans perdre le contrôle.",
				Teaching:
					"Enseigner, c'est transmettre plus que des compétences : c'est partager une passion et accompagner des reconversions. En bootcamp, je forme des développeurs opérationnels tout en cultivant leur curiosité technique.",
				// Skills section technologies
				AWS: "AWS, c'est mon terrain de jeu cloud préféré : une palette d'outils pour construire des architectures robustes sans réinventer la roue. J'y déploie des infras qui tiennent la charge et maîtrisent les coûts.",
				Terraform:
					"Terraform transforme l'infrastructure en code : fini les clics dans des interfaces, bonjour la reproductibilité. Une fois écrit, déployé partout de manière identique.",
				Ansible:
					"Ansible, c'est l'harmonisateur d'environnements : une recette, mille serveurs configurés à l'identique. Fini les différences entre dev et prod qui cassent tout.",
				Docker:
					"Docker, c'est l'art d'emballer proprement : une app, ses dépendances, tout dans un conteneur portable. Plus jamais 'ça marche sur ma machine' !",
				Kubernetes:
					"Kubernetes orchestre le chaos des conteneurs : il scale, répare, équilibre automatiquement. Complexe à apprivoiser mais indispensable pour les apps modernes.",
				"CI/CD":
					"CI/CD, c'est ma ligne de production automatisée : code poussé, testé, déployé sans intervention humaine. La sérénité des livraisons continues.",
				Jenkins:
					"Jenkins, c'est le chef d'orchestre de mes pipelines : il coordonne, execute, signale. Un peu vintage mais tellement fiable pour automatiser les workflows.",
				"GitLab CI":
					"GitLab CI, c'est DevOps tout-en-un : code, CI/CD, monitoring dans une même interface. Simple et efficace quand on veut éviter de jongler entre outils.",
				Prometheus:
					"Prometheus, c'est l'œil qui surveille tout : métriques temps réel, alertes configurables, scraping automatique. La télémétrie qui anticipe les problèmes avant qu'ils arrivent.",
				Grafana:
					"Grafana, c'est la beauté des données : dashboards élégants, visualisations parlantes, drill-down intuitif. Transformer les métriques en insights visuels compréhensibles.",
				SonarQube:
					"SonarQube, c'est l'inspecteur de code implacable : vulnérabilités détectées, qualité mesurée, dette technique quantifiée. Le garde-fou qui maintient un code propre et sécurisé.",
				Cypress:
					"Cypress, c'est les tests E2E comme si on était l'utilisateur : simulation réelle du navigateur, debugging visuel, assertions naturelles. Tester sans se prendre la tête.",
				Playwright:
					"Playwright, c'est le multi-navigateur sans effort : Chrome, Firefox, Safari en parallèle, mobile inclus. L'assurance que ça marche partout, vraiment partout.",
				Locust:
					"Locust, c'est l'armée de testeurs virtuels : montée en charge progressive, scénarios réalistes, métriques précises. Savoir si l'app tiendra la charge avant le jour J.",
				Artillery:
					"Artillery, c'est l'artillerie lourde des tests de performance : load testing moderne, APIs et WebSockets, reporting détaillé. La puissance de feu pour valider la scalabilité.",
				"Next.js":
					"Next.js, c'est React qui grandit : SSR, optimisations automatiques, routing intégré. Un framework qui anticipe mes besoins avant même que j'y pense.",
				TypeScript:
					"TypeScript, c'est JavaScript avec un filet de sécurité : le typage qui prévient les erreurs avant qu'elles n'arrivent. Plus de 'undefined is not a function' en prod !",
				"Node.js":
					"Node.js, c'est JavaScript qui sort du navigateur pour conquérir le serveur. Rapide, léger, parfait pour des APIs qui répondent au quart de tour.",
				NestJS:
					"NestJS apporte la structure d'Angular à Node.js : modules, décorateurs, injection de dépendances. Du code backend enfin organisé et maintenable.",
				MongoDB:
					"MongoDB, c'est la liberté du NoSQL : pas de schéma rigide, just store et query. Idéal quand les données évoluent plus vite que les migrations SQL.",
				PostgreSQL:
					"PostgreSQL, c'est le couteau suisse des bases de données : relationnel robuste, extensible, avec des features qui font rêver. Quand on a besoin de fiabilité, c'est mon choix.",
				Express:
					"Express, c'est Node.js en version minimaliste : léger, flexible, sans chichi. Parfait pour démarrer rapidement une API sans se prendre la tête.",
				"OpenAI GPT":
					"OpenAI, c'est avoir un super-assistant qui comprend le langage naturel. J'intègre ses capacités pour créer des expériences conversationnelles authentiques.",
				LangChain:
					"LangChain, c'est le pont entre l'IA et les applications métier : il chaîne les prompts, connecte les données, structure l'intelligence. L'IA devient enfin opérationnelle.",
				FastAPI:
					"FastAPI, c'est Python qui rivalise avec Node.js en vitesse : validation automatique, doc interactive générée, types partout. L'API moderne par excellence.",
				Python:
					"Python, c'est mon langage de l'efficacité : syntaxe claire, écosystème immense, parfait pour l'IA et l'automation. Simple à lire, puissant à l'usage.",
				"Machine Learning":
					"Machine Learning, c'est apprendre aux machines à reconnaître des patterns : données en entrée, prédictions en sortie. La magie statistique au service du métier.",
				Ollama: "Ollama, c'est l'IA qui reste à la maison : modèles de langage sur ma machine, sans dépendance cloud. Privacy et contrôle total.",
				"Vector DB":
					"Vector DB, c'est la mémoire sémantique de l'IA : elle comprend le sens, pas juste les mots. Essentielle pour des recherches intelligentes.",
				Bootcamp:
					"Bootcamp, c'est l'immersion totale : 3 mois pour transformer des profils en développeurs opérationnels. Intensif mais efficace, avec du concret dès le premier jour.",
				Mentorat:
					"Mentorat, c'est l'accompagnement sur-mesure : chaque junior a son rythme, ses blocages, ses forces. Je guide sans faire à la place.",
				Curriculum:
					"Curriculum, c'est l'architecture pédagogique : quoi apprendre, dans quel ordre, avec quels projets. La roadmap vers l'employabilité.",
				Évaluation:
					"Évaluation, c'est mesurer pour progresser : compétences techniques, soft skills, capacité d'adaptation. Objectif et bienveillant à la fois.",
				"Projets pratiques":
					"Projets pratiques, c'est apprendre en faisant : pas de théorie dans le vide, mais du code qui marche et résout des vrais problèmes.",
				"Veille techno":
					"Veille techno, c'est rester dans la course : technologies émergentes, best practices, tendances marché. Curiosité permanente obligatoire.",
				// Additional technologies
				Git: "Git, c'est la machine à remonter le temps du code : branches, merges, historique complet. Impossible de développer en équipe sans cette colonne vertébrale.",
				Linux: "Linux, c'est ma maison : stable, configurable à l'infini, transparent. Sous le capot de presque tout ce qu'on utilise dans le cloud.",
				"VS Code":
					"VS Code, c'est l'éditeur qui lit dans mes pensées : IntelliSense, debugging intégré, extensions pour tout. Productivité maximale, poids minimal.",
				Figma:
					"Figma, c'est le pont entre design et dev : maquettes vivantes, composants réutilisables, collaboration en temps réel. Le pixel parfait enfin accessible.",
				Postman:
					"Postman, c'est mon laboratoire d'APIs : tester, documenter, partager les endpoints. Indispensable pour éviter les surprises en intégration.",
				Redis: "Redis, c'est la mémoire flash de mes apps : ultra-rapide, clé-valeur simple, parfait pour du cache ou des sessions. La vitesse pure.",
				GraphQL:
					"GraphQL, c'est l'API à la carte : le client demande exactement ce qu'il veut, pas plus, pas moins. Fini le sur-fetching et les endpoints multiples.",
				Traefik:
					"Traefik, c'est le reverse proxy intelligent : découverte automatique des services, certificats SSL auto-générés, load balancing élégant. Le routage moderne sans configuration manuelle.",
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
					skills: [
						"AWS",
						"Terraform",
						"Ansible",
						"Docker",
						"Kubernetes",
						"CI/CD",
						"Jenkins",
						"GitLab CI",
						"Traefik",
						"Prometheus",
						"Grafana",
						"SonarQube",
						"Cypress",
						"Playwright",
						"Locust",
						"Artillery",
					],
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
				"Cloud & DevOps":
					"I see DevOps as a philosophy: automate and collaborate upstream to prevent crises downstream. In practice, I design scalable AWS infrastructures with Terraform, automate deployments to free up time for innovation.",
				"Full-Stack":
					"For me, fullstack development means mastering the entire chain: from elegant user interfaces with React/Next.js to robust APIs in Node.js. The goal? Creating coherent experiences where technology and usage converge.",
				AI: "I see AI as an amplifier of human intelligence rather than a replacement. I integrate OpenAI and LangChain to create solutions that enhance business capabilities without losing control.",
				Teaching:
					"Teaching means transmitting more than skills: it's about sharing passion and supporting career transitions. In bootcamps, I train operational developers while cultivating their technical curiosity.",
				// Skills section technologies
				AWS: "AWS is my favorite cloud playground: a palette of tools to build robust architectures without reinventing the wheel. I deploy infrastructures that handle load and master costs.",
				Terraform:
					"Terraform transforms infrastructure into code: goodbye clicking through interfaces, hello reproducibility. Once written, deployed everywhere identically.",
				Ansible:
					"Ansible is the environment harmonizer: one recipe, a thousand identically configured servers. No more dev-prod differences that break everything.",
				Docker:
					"Docker is the art of clean packaging: an app, its dependencies, everything in a portable container. Never again 'it works on my machine'!",
				Kubernetes:
					"Kubernetes orchestrates container chaos: it scales, heals, balances automatically. Complex to tame but essential for modern apps.",
				"CI/CD":
					"CI/CD is my automated production line: code pushed, tested, deployed without human intervention. The serenity of continuous deliveries.",
				Jenkins: "Jenkins is my pipeline conductor: it coordinates, executes, signals. A bit vintage but so reliable for automating workflows.",
				"GitLab CI":
					"GitLab CI is all-in-one DevOps: code, CI/CD, monitoring in the same interface. Simple and efficient when you want to avoid juggling tools.",
				"Next.js":
					"Next.js is React that grows up: SSR, automatic optimizations, integrated routing. A framework that anticipates my needs before I even think of them.",
				TypeScript:
					"TypeScript is JavaScript with a safety net: typing that prevents errors before they happen. No more 'undefined is not a function' in prod!",
				"Node.js":
					"Node.js is JavaScript breaking out of the browser to conquer the server. Fast, lightweight, perfect for APIs that respond in a snap.",
				NestJS:
					"NestJS brings Angular's structure to Node.js: modules, decorators, dependency injection. Backend code finally organized and maintainable.",
				MongoDB: "MongoDB is NoSQL freedom: no rigid schema, just store and query. Ideal when data evolves faster than SQL migrations.",
				PostgreSQL:
					"PostgreSQL is the Swiss Army knife of databases: robust relational, extensible, with features that make you dream. When I need reliability, it's my choice.",
				Express:
					"Express is Node.js in minimalist version: lightweight, flexible, no fuss. Perfect for quickly starting an API without overthinking.",
				"OpenAI GPT":
					"OpenAI is like having a super-assistant that understands natural language. I integrate its capabilities to create authentic conversational experiences.",
				LangChain:
					"LangChain is the bridge between AI and business applications: it chains prompts, connects data, structures intelligence. AI finally becomes operational.",
				FastAPI:
					"FastAPI is Python rivaling Node.js in speed: automatic validation, generated interactive docs, types everywhere. The modern API par excellence.",
				Python: "Python is my efficiency language: clear syntax, huge ecosystem, perfect for AI and automation. Simple to read, powerful in use.",
				"Machine Learning":
					"Machine Learning is teaching machines to recognize patterns: data in, predictions out. Statistical magic at the service of business.",
				Ollama: "Ollama is AI staying at home: language models on my machine, no cloud dependency. Privacy and total control.",
				"Vector DB": "Vector DB is AI's semantic memory: it understands meaning, not just words. Essential for intelligent searches.",
				Bootcamp:
					"Bootcamp is total immersion: 3 months to transform profiles into operational developers. Intensive but effective, with concrete results from day one.",
				Mentoring: "Mentoring is custom support: each junior has their pace, their blocks, their strengths. I guide without doing it for them.",
				Curriculum: "Curriculum is pedagogical architecture: what to learn, in what order, with which projects. The roadmap to employability.",
				Assessment: "Assessment is measuring to progress: technical skills, soft skills, adaptability. Both objective and caring.",
				"Practical projects": "Practical projects are learning by doing: no theory in a vacuum, but code that works and solves real problems.",
				"Tech watch": "Tech watch is staying in the race: emerging technologies, best practices, market trends. Permanent curiosity required.",
				// Additional technologies
				Git: "Git is the code time machine: branches, merges, complete history. Impossible to develop in a team without this backbone.",
				Linux: "Linux is my home: stable, infinitely configurable, transparent. Under the hood of almost everything we use in the cloud.",
				"VS Code":
					"VS Code is the editor that reads my mind: IntelliSense, integrated debugging, extensions for everything. Maximum productivity, minimal weight.",
				Figma:
					"Figma is the bridge between design and dev: living mockups, reusable components, real-time collaboration. Pixel-perfect finally accessible.",
				Postman: "Postman is my API laboratory: test, document, share endpoints. Essential to avoid integration surprises.",
				Redis: "Redis is the flash memory of my apps: ultra-fast, simple key-value, perfect for cache or sessions. Pure speed.",
				Traefik:
					"Traefik is the intelligent reverse proxy: automatic service discovery, auto-generated SSL certificates, elegant load balancing. Modern routing without manual configuration.",
				Prometheus:
					"Prometheus is the all-seeing eye: real-time metrics, configurable alerts, automatic scraping. Telemetry that anticipates problems before they happen.",
				Grafana:
					"Grafana is data made beautiful: elegant dashboards, meaningful visualizations, intuitive drill-down. Transforming metrics into understandable visual insights.",
				SonarQube:
					"SonarQube is the relentless code inspector: vulnerabilities detected, quality measured, technical debt quantified. The guardian that keeps code clean and secure.",
				Cypress:
					"Cypress is E2E testing like being the user: real browser simulation, visual debugging, natural assertions. Testing without the headache.",
				Playwright:
					"Playwright is multi-browser made effortless: Chrome, Firefox, Safari in parallel, mobile included. The assurance it works everywhere, truly everywhere.",
				Locust:
					"Locust is the virtual tester army: progressive load ramping, realistic scenarios, precise metrics. Knowing if the app will handle the load before D-day.",
				Artillery:
					"Artillery is the heavy artillery of performance testing: modern load testing, APIs and WebSockets, detailed reporting. The firepower to validate scalability.",
				GraphQL:
					"GraphQL is the à la carte API: the client asks for exactly what it wants, no more, no less. No more over-fetching and multiple endpoints.",
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
