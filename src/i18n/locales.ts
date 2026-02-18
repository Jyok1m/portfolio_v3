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
			copyright: "© 2025 Joachim Jasmin.",
		},
		nav: {
			home: "Accueil",
			about: "À propos",
			skills: "Compétences",
			education: "Formation",
			interests: "Passions",
			projects: "Projets & Liens",
			pricing: "Tarifs",
			contact: "Contact",
		},
		hero: {
			title: "Ingénieur et formateur IA, DevOps et Web & Mobile.",
			subtitle: "Expert en DevOps, IA et Développement Web & Mobile FullStack - je transforme les idées en solutions techniques complètes.",
			ctaPrimary: "Voir mes projets",
			ctaSecondary: "Me contacter",
			downloadCV: "Télécharger mon CV",
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
			description: "Un éventail de technologies et de compétences pour des solutions complètes",
			categories: {
				cloud: {
					title: "Cloud & DevOps",
					skills: [
						"AWS",
						"Docker",
						"Kubernetes",
						"Terraform",
						"Ansible",
						"Traefik",
						"CI/CD",
						"Jenkins",
						"GitLab CI",
						"Prometheus",
						"Grafana",
						"SonarQube",
						"Cypress",
						"Playwright",
						"Artillery",
					],
				},
				fullstack: {
					title: "Développement Fullstack",
					skills: [
						"TypeScript",
						"React",
						"Next.js",
						"Tailwind",
						"React Native",
						"Expo",
						"Node.js",
						"Express",
						"NestJS",
						"Flask",
						"MongoDB",
						"PostgreSQL",
					],
				},
				ai: {
					title: "Intelligence Artificielle",
					skills: [
						"Python",
						"NumPy",
						"Scikit-learn",
						"PyTorch",
						"TensorFlow",
						"Keras",
						"ML",
						"FastAPI",
						"OpenAI GPT",
						"LangChain",
						"ChromaDB",
						"Pinecone",
					],
				},
				teaching: {
					title: "Formation & Pédagogie",
					skills: ["Passion", "Bootcamp", "Mentorat", "Management", "Debug", "Veille"],
				},
			},
			techDetails: {
				// About section icons
				"Cloud & DevOps":
					"Le DevOps, c’est pour moi une manière de réduire la friction entre développement et production. Automatiser tôt, surveiller en continu et améliorer sans relâche.",
				"Full-Stack":
					"J’aime concevoir un produit du front au back. Comprendre chaque couche me permet de construire des applications cohérentes et efficaces.",
				AI: "L’IA m’intéresse parce qu’elle transforme les données en actions concrètes. Je l’utilise pour rendre les outils plus intelligents et réactifs.",
				Teaching:
					"Enseigner, c’est partager ce que j’aurais aimé apprendre plus tôt. Aider les autres à devenir autonomes reste l’un de mes plus grands moteurs.",

				// DevOps
				AWS: "Un environnement cloud complet et fiable qui me permet de construire des architectures robustes et scalables. J’apprécie sa flexibilité et son écosystème riche.",
				Terraform:
					"Un outil essentiel pour décrire l’infrastructure comme du code. Il apporte reproductibilité, traçabilité et confiance dans les déploiements.",
				Ansible:
					"Je l’utilise pour automatiser les configurations serveurs et garantir des environnements identiques. Moins d’erreurs, plus de cohérence.",
				Docker: "Les conteneurs simplifient le déploiement et éliminent les problèmes d’environnement. Avec Docker, tout tourne pareil, partout.",
				Traefik:
					"Un reverse proxy moderne et intelligent, parfait pour Docker et Kubernetes. Je m’en sers pour gérer le routage, les certificats SSL et l’équilibrage de charge sans complexité.",
				Kubernetes:
					"Un orchestrateur exigeant mais incontournable. Une fois bien configuré, il gère la scalabilité, la résilience et la disponibilité sans intervention manuelle.",
				"CI/CD": "Automatiser les builds, les tests et les déploiements rend les livraisons plus fiables. Moins d’erreurs, plus de sérénité.",
				Jenkins: "Un outil historique du CI/CD, toujours efficace. Je l’utilise pour les pipelines personnalisés ou hors cloud.",
				"GitLab CI":
					"Une solution intégrée pour coder, tester et déployer au même endroit. Idéale pour les équipes agiles et les projets collaboratifs.",
				Prometheus: "Un outil fiable pour collecter les métriques et détecter les problèmes en amont. La base d’une bonne observabilité.",
				Grafana:
					"Je l’utilise pour visualiser les métriques et identifier les tendances. Des dashboards clairs permettent de prendre de meilleures décisions.",
				SonarQube:
					"Un outil indispensable pour maintenir la qualité du code. Il aide à repérer les vulnérabilités et la dette technique avant qu’elles ne coûtent cher.",
				Cypress: "Un framework de test E2E simple et efficace. Il permet de tester le comportement utilisateur directement dans le navigateur.",
				Playwright:
					"Une solution moderne pour tester sur plusieurs navigateurs. Idéale pour garantir la compatibilité front-end sur tous les environnements.",
				Artillery:
					"Je l’utilise pour simuler de fortes charges et mesurer les performances. Mieux vaut découvrir les limites avant les utilisateurs.",

				// Full-stack
				React: "Une librairie fiable pour créer des interfaces modernes et dynamiques. Les composants rendent le développement clair et modulaire.",
				"Next.js": "Un framework complet qui optimise React pour la production. Rapide, structuré et prêt à l’emploi.",
				TypeScript: "Le typage statique évite les erreurs classiques et renforce la stabilité du code. Un must sur les projets d’envergure.",
				"Node.js":
					"Un environnement rapide et léger pour construire des APIs performantes. Son approche asynchrone convient parfaitement aux applications web modernes.",
				NestJS: "Un framework backend structuré et maintenable. Idéal pour les applications Node.js complexes et durables.",
				MongoDB: "Une base NoSQL flexible, parfaite quand le schéma évolue souvent. Simple à manipuler, elle facilite le prototypage rapide.",
				PostgreSQL: "Une base de données relationnelle robuste et complète. Mon choix quand la fiabilité et la cohérence sont prioritaires.",
				Express: "Un framework minimaliste et direct pour construire des APIs REST. Simple, rapide, efficace.",
				"React Native": "Développer une seule base de code pour iOS et Android. Un gain de temps énorme sans sacrifier les performances.",
				Expo: "Un écosystème React Native qui simplifie le développement mobile. Moins de configuration, plus de résultats.",
				Flask: "Un micro-framework Python idéal pour les APIs légères et les prototypes IA. Sobre, rapide et extensible.",
				Tailwind: "Un framework CSS moderne et pragmatique. Il accélère le design tout en gardant un style cohérent et maintenable.",

				// AI Engineering
				"OpenAI GPT": "Une base solide pour créer des outils de génération de texte ou de conversation. Simple à intégrer, puissante à exploiter.",
				LangChain:
					"Le chaînon manquant entre modèles, données et logique métier. Il rend les LLM réellement utilisables dans des contextes concrets.",
				FastAPI: "Un framework Python rapide et typé, parfait pour les APIs modernes. Sa documentation automatique facilite le travail en équipe.",
				Python: "Mon langage principal pour l’IA et l’automatisation. Lisible, polyvalent et soutenu par un écosystème riche.",
				ML: "Le machine learning consiste à faire apprendre des modèles à partir des données. Je l’utilise pour la prédiction, la classification et l’analyse.",
				PyTorch: "Un framework flexible et intuitif, parfait pour expérimenter et prototyper rapidement des modèles IA.",
				TensorFlow: "Un framework complet et optimisé pour la production. Idéal pour les projets IA à grande échelle.",
				"Scikit-learn":
					"Une bibliothèque simple et fiable pour les algorithmes classiques de machine learning. Parfaite pour tester et itérer rapidement.",
				Keras: "Une interface intuitive au-dessus de TensorFlow qui facilite le prototypage rapide en deep learning.",
				NumPy: "Le socle du calcul scientifique en Python. Je l’utilise pour toutes les manipulations numériques et le traitement de données.",
				ChromaDB: "Une base vectorielle moderne pour la recherche sémantique et la mémoire d’IA. Idéale pour les applications contextuelles.",
				Pinecone: "Une solution cloud rapide et scalable pour gérer les embeddings. Simple à intégrer, parfaite pour la production.",

				// Formation
				Bootcamp: "Une expérience d’apprentissage intense et concrète. On pratique dès le premier jour et on progresse vite.",
				Mentorat: "Écouter, guider, faire grandir. J’aide les profils à trouver leur autonomie plutôt que de leur tracer le chemin.",
				Management: "Manager, c’est donner du cadre sans brider. Clarté, coordination et confiance font la différence.",
				Passion: "Ce qui me pousse à apprendre, créer et transmettre. La curiosité reste mon moteur principal.",
				Debug: "Résoudre un bug, c’est comprendre le système. C’est une démarche logique et méthodique que j’apprécie.",
				Veille: "Rester à jour fait partie du métier. J’observe, je teste et j’intègre ce qui améliore ma pratique.",
			},
		},
		education: {
			title: "Diplômes & Certifications",
			subtitle: "De l'hôtellerie et la finance à l'IA : un parcours de reconversion guidé par la curiosité et l'apprentissage continu",
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
					description: "Spécialisation en machine learning, deep learning, NLP et déploiement d'applications IA avec Python, PyTorch et LangChain",
				},
				rncp: {
					title: "RNCP 6 - Concepteur-Développeur d'Appplications Web & Mobiles",
					institution: "La Capsule - Tech Bootcamp",
					description: "Certification professionnelle niveau Bac+3/4 en développement web, mobile et transformation digitale",
				},
				mscSkema: {
					title: "MSc Corporate Financial Management",
					institution: "SKEMA Business School",
					description: "Master spécialisé en finance d'entreprise, analyse financière, stratégie d'investissement et contrôle de gestion",
				},
				desmiSkema: {
					title: "DESMI Management International",
					institution: "SKEMA Business School",
					description: "Diplôme d'études supérieures en management international, stratégie globale et développement commercial",
				},
				bbaGlion: {
					title: "BBA (Hons.) Management Hôtelier International",
					institution: "Glion Institute of Higher Education",
					description: "Bachelor avec mention en management hôtelier, développement immobilier hôtelier et finance hospitality",
				},
			},
		},
		interests: {
			title: "Mes Passions",
			description: "Au-delà du code, ce qui m'anime",
			quote: "De la finance à l'IA, chaque passion nourrit ma vision : comprendre, créer et transmettre avec authenticité.",
			items: {
				kendo: {
					title: "Kendo",
					description: "Art martial traditionnel japonais, discipline et dépassement de soi",
				},
				rugby: {
					title: "Rugby & Équipe de France",
					description: "Passion pour l'ovalie et supporter inconditionnel du XV de France",
				},
				anime: {
					title: "Animes & Mangas",
					description: "Fan de culture japonaise et de storytelling visuel",
				},
				gaming: {
					title: "Jeux Vidéo",
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
			detailedDescriptions: {
				kendo:
					"Pratiquant de kendo depuis plusieurs années, cet art martial japonais m'enseigne bien plus que des techniques de sabre. C'est une école de discipline mentale, de respect et de dépassement de soi. Chaque entraînement est une méditation en mouvement qui forge le caractère et la persévérance - des qualités essentielles dans le développement logiciel et la résolution de problèmes complexes.",
				rugby:
					"Passionné de rugby depuis l'enfance, je suis un supporter fervent de l'équipe de France. Chaque match est un moment d'émotion pure où se mélangent stratégie collective, dépassement individuel et esprit d'équipe. Ce sport m'enseigne des valeurs essentielles : la solidarité, la persévérance face à l'adversité et l'importance de chaque rôle dans la réussite collective - des principes que j'applique naturellement dans mes projets techniques et mes équipes.",
				anime:
					"Grand amateur d'animes et mangas, j'apprécie particulièrement les œuvres qui explorent des thématiques profondes : science-fiction, cyberpunk, développement personnel. Cette passion pour la culture japonaise nourrit ma créativité et ma compréhension de l'esthétique, influençant même mes choix de design d'interfaces et d'expérience utilisateur.",
				gaming:
					"Joueur passionné, je privilégie les aventures narratives riches et les mondes immersifs qui racontent des histoires captivantes. Cette passion développe ma capacité d'analyse, ma patience face aux défis complexes et ma compréhension des mécaniques d'engagement - des compétences directement transférables en développement d'applications et gamification.",
				theater:
					"Le théâtre m'a appris l'importance de la présence, de la communication claire et de la gestion du stress. Ces compétences sont précieuses lors de mes formations en bootcamp, présentations techniques ou démonstrations client. Sur scène comme en présentation, il faut savoir capter l'attention et transmettre son message avec impact.",
				food: "La gastronomie est pour moi un art de vivre qui cultive la patience, la précision et l'attention aux détails. Comme en programmation, cuisiner demande de suivre des processus, d'ajuster selon les résultats et de viser l'excellence. Cette passion développe également ma créativité et mon sens de l'expérimentation, toujours utiles pour innover techniquement.",
			},
		},
		projects: {
			title: "Mes Projets et Liens",
			description: "Quelques plateformes, outils et expériences techniques que j'ai développés.",
			status: {
				active: "Actif",
				paused: "En pause",
			},
			techStack: "Stack Technique :",
			moreProjects: {
				title: "Plus de projets à venir",
				description:
					"Je travaille constamment sur de nouveaux projets et expérimentations. Restez connecté pour découvrir mes prochaines créations !",
			},
			cta: {
				site: "Voir le site",
				"repo-front": "Front",
				"repo-back": "Back",
				repo: "Microservice",
				repoInfra: "Infrastructure",
			},
			items: [
				{
					slug: "odyssai",
					name: "Odyssai",
					description:
						"Application de jeu de rôle narratif propulsée par l’IA, où le joueur devient le héros de sa propre histoire. Vous pouvez créer des mondes, façonner des personnages et faire évoluer le scénario à travers de vraies conversations naturelles.",
					stack: ["NestJS", "React", "LangChain", "MongoDB", "Docker", "Docker Compose", "ChromaDB", "OpenAI", "fly.io"],
					links: {
						site: "https://odyssai.app/",
						"repo-front": "https://gitlab.com/odyssai/web",
						"repo-back": "https://gitlab.com/odyssai/odyssai-backend",
						repoInfra: "https://gitlab.com/odyssai/odyssai-infra",
					},
					status: "Actif",
				},
				{
					slug: "neoney",
					name: "Neoney",
					description:
						"Le réseau social destiné aux Neo entrepreneurs pour révolutionner l’entrepreneuriat et faciliter encore plus la génération de business pour les membres. Un réseau social créé par des entrepreneurs pour les entrepreneurs.",
					stack: ["Next.js", "Express", "Tailwind", "MongoDB", "Vercel", "Northflank"],
					links: {
						site: "https://www.neoney.co/",
					},
					status: "Actif",
				},
				{
					slug: "ipseis",
					name: "Ipseis",
					description:
						"IPSEIS conçoit des formations actives, immersives et sur mesure pour les professionnels de la santé, du social et médico-social.",
					stack: ["Next.js", "Express", "Docker", "Tailwind", "Fontawesome", "MongoDB", "Vercel"],
					links: {
						site: "https://www.ipseis.fr",
						"repo-front": "https://github.com/Jyok1m/ipseis",
						"repo-back": "https://github.com/Jyok1m/ipseis-backend",
					},
					status: "Actif",
				},
				{
					slug: "generation_sauveteurs",
					name: "Génération Sauveteur",
					description:
						"Conçus par des professionnels du sauvetage, ce jeu permet d'apprendre sur la sécurité aquatique et l'environnement tout en vous amusant !",
					stack: ["React", "Symfony", "Nginx", "OVH", "MariaDB"],
					links: {
						site: "https://app.generationsauveteur.fr/",
					},
					status: "Actif",
				},
				{
					slug: "ai-wedder",
					name: "AI Wedder",
					description: "Plateforme d'analyse d'avis prestataires mariage avec IA.",
					stack: ["Next.js", "FastAPI", "MongoDB", "HuggingFace", "Playwright", "OpenAI", "CamemBERT"],
					links: {
						site: "https://ai-wedder-frontend.vercel.app/",
						"repo-front": "https://github.com/Jyok1m/ai-wedder-frontend",
						"repo-back": "https://github.com/Jyok1m/ai-wedder-backend",
						repo: "https://github.com/Jyok1m/ai-wedder-microservice",
					},
					status: "En pause",
				},
			],
		},
		pricing: {
			title: "Tarifs & Prestations",
			subtitle: "Des formules adaptées à chaque besoin, du projet vitrine à l'architecture enterprise",
			tjm: "TJM : 500 €/jour",
			tjmNote: "Ajustable selon complexité et urgence",
			cta: "Demander un devis",
			plans: {
				essentiel: {
					name: "Essentiel",
					emoji: "🟢",
					price: "À partir de 3 000 €",
					target: "Artisans, indépendants, associations",
					features: [
						"Frontend responsive, backend API, base de données",
						"1 environnement de production",
						"Conteneurisation Docker",
						"Hébergement mutualisé sur mon serveur",
						"Nom de domaine inclus la première année",
					],
					maintenance: "Maintenance optionnelle : 150 €/mois",
					maintenanceDetails: "Mises à jour, backups hebdo, monitoring basique, support email sous 48h",
				},
				professionnel: {
					name: "Professionnel",
					emoji: "🔵",
					price: "À partir de 8 000 €",
					target: "PME, startups, agences",
					includes: "Tout Essentiel +",
					features: [
						"Multi-environnement (dev / staging / prod)",
						"Back-office d'administration",
						"Intégrations API tierces (Stripe, SSO, mailing…)",
						"Tests automatisés + pipeline CI/CD",
						"Observabilité (logs, métriques, alertes)",
					],
					maintenance: "Maintenance recommandée : 300 €/mois",
					maintenanceDetails: "Backups quotidiens, monitoring 24/7, support sous 24h, mises à jour sécu, rapport mensuel",
				},
				surmesure: {
					name: "Sur-mesure / Enterprise",
					emoji: "🟣",
					price: "Sur devis (à partir de 15 000 €)",
					target: "PME établies, scale-ups, entreprises réglementées",
					includes: "Tout Professionnel +",
					features: [
						"Hébergement dédié (OVH / AWS / GCP / Azure au choix)",
						"Architecture microservices",
						"Audit de sécurité complet (OWASP)",
						"DevSecOps, haute disponibilité, scalabilité horizontale",
						"Documentation technique exhaustive",
					],
					maintenance: "Maintenance sur-mesure : à partir de 500 €/mois",
					maintenanceDetails: "SLA négociable",
				},
			},
			alacarte: {
				title: "Prestations à la carte",
				items: [
					{ name: "Audit de sécurité", price: "1 500 – 3 000 €" },
					{ name: "Audit fonctionnel / technique", price: "1 000 – 2 000 €" },
					{ name: "Conteneurisation d'un existant", price: "1 500 – 4 000 €" },
					{ name: "Migration cloud", price: "Sur devis" },
					{ name: "Formation / transfert de compétences", price: "500 €/jour" },
					{ name: "Intervention urgente", price: "TJM × 1.5" },
				],
			},
			transparency: {
				title: "Transparence",
				text: "Mes tarifs incluent l'hébergement, la gestion du nom de domaine et l'infrastructure. Pas de frais cachés : vous recevez un rapport mensuel détaillé de l'état de votre application.",
			},
		},
		contact: {
			title: "Contactez-moi",
			description: "Prêt pour de nouveaux défis techniques",
			connectTitle: "Connectons-nous",
			availability: {
				status: "Disponible pour de nouveaux projets",
				description: "Ouvert aux opportunités en Cloud/DevOps, Fullstack, IA et formations.",
			},
			formTitle: "Envoyez-moi un message",
			contactMethods: {
				email: {
					label: "Email",
					description: "joachim.jasmin-dev@proton.me",
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
			copyright: "© 2025 Joachim Jasmin.",
		},
		nav: {
			home: "Home",
			about: "About",
			skills: "Skills",
			education: "Education",
			interests: "Interests",
			projects: "Projects & Links",
			pricing: "Pricing",
			contact: "Contact",
		},
		hero: {
			title: "Cloud & DevOps, Fullstack and AI Engineer — and Teacher.",
			subtitle: "DevOps, AI and Web & Mobile FullStack Development expert - I transform ideas into complete technical solutions.",
			ctaPrimary: "View my projects",
			ctaSecondary: "Contact me",
			downloadCV: "Download CV",
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
			description: "A range of technologies and skills for complete solutions",
			categories: {
				cloud: {
					title: "Cloud & DevOps",
					skills: [
						"AWS",
						"Docker",
						"Kubernetes",
						"Terraform",
						"Ansible",
						"Traefik",
						"CI/CD",
						"Jenkins",
						"GitLab CI",
						"Prometheus",
						"Grafana",
						"SonarQube",
						"Cypress",
						"Playwright",
						"Artillery",
					],
				},
				fullstack: {
					title: "Fullstack Development",
					skills: [
						"TypeScript",
						"React",
						"Next.js",
						"Tailwind",
						"React Native",
						"Expo",
						"Node.js",
						"Express",
						"NestJS",
						"Flask",
						"MongoDB",
						"PostgreSQL",
					],
				},
				ai: {
					title: "Artificial Intelligence",
					skills: [
						"Python",
						"NumPy",
						"Scikit-learn",
						"PyTorch",
						"TensorFlow",
						"Keras",
						"ML",
						"FastAPI",
						"OpenAI GPT",
						"LangChain",
						"ChromaDB",
						"Pinecone",
					],
				},
				teaching: {
					title: "Teaching & Pedagogy",
					skills: ["Passion", "Bootcamp", "Mentoring", "Management", "Debug", "Tech watch"],
				},
			},
			techDetails: {
				// About section icons
				"Cloud & DevOps":
					"For me, DevOps is about reducing friction between teams and systems. Automate early, monitor constantly, and improve continuously.",
				"Full-Stack":
					"I like building products end-to-end, from design to data. Understanding the full stack makes everything more coherent and purposeful.",
				AI: "AI fascinates me because it turns raw data into smart, actionable systems. I use it to make tools that think and adapt faster.",
				Teaching: "Teaching is about sharing what I once had to figure out myself. Helping others gain autonomy is what keeps me motivated.",

				// DevOps
				AWS: "A mature and reliable cloud environment that lets me build scalable systems. I appreciate its flexibility and ecosystem depth.",
				Terraform: "Infrastructure as code done right. It brings reproducibility, traceability, and confidence to every deployment.",
				Ansible: "A simple, powerful way to automate server configuration. One command, consistent environments, no surprises.",
				Docker: "Containers make deployment predictable and portable. No more 'it works on my machine' excuses.",
				Traefik:
					"A modern reverse proxy and load balancer that fits perfectly with Docker and Kubernetes. I use it to simplify routing, handle HTTPS, and centralize access control.",
				Kubernetes: "A demanding but essential orchestrator. Once mastered, it handles scaling, recovery, and balancing with precision.",
				"CI/CD": "Automating build, test, and deploy pipelines saves time and reduces stress. Consistency is the real productivity boost.",
				Jenkins: "Old-school but still solid. Reliable when I need a fully customizable automation pipeline.",
				"GitLab CI": "An all-in-one solution for code, CI/CD, and deployment. Simple, integrated, and great for small teams.",
				Prometheus: "My go-to for collecting metrics and detecting issues early. Observability starts here.",
				Grafana: "Visualizing data brings clarity. Dashboards turn metrics into decisions instead of guesswork.",
				SonarQube: "The guardian of clean code. It spots vulnerabilities and technical debt before they become costly.",
				Cypress: "End-to-end testing that feels natural. Fast, visual, and easy to maintain for front-end work.",
				Playwright: "A modern, multi-browser testing tool. Reliable for ensuring consistent UX across all environments.",
				Artillery: "I use it for load and stress testing. Better to break things myself than let users do it first.",

				// Full-stack
				React: "A reliable way to build fast, modular UIs. Components make complex interfaces manageable.",
				"Next.js": "A complete framework that takes React to production level. Great balance between speed, SEO, and structure.",
				TypeScript: "Static typing that prevents simple mistakes. It adds structure and peace of mind to JavaScript projects.",
				"Node.js": "Fast, lightweight, and perfect for responsive APIs. Event-driven design just makes sense for the web.",
				NestJS: "A structured and maintainable backend framework for Node.js. Ideal for long-term projects that need clarity.",
				MongoDB: "A flexible NoSQL database for fast iteration. Perfect when the data model evolves frequently.",
				PostgreSQL: "A solid, reliable relational database. My go-to when data integrity and scalability matter.",
				Express: "Minimal, fast, and to the point. Great for quick APIs without unnecessary layers.",
				"React Native": "Build once, deploy everywhere. I like how it bridges web and mobile without duplication.",
				Expo: "A smooth developer experience for mobile apps. It simplifies builds, testing, and deployment.",
				Flask: "A lightweight Python framework for APIs and prototypes. Simple, fast, and extendable when needed.",
				Tailwind: "A clean, utility-first approach to styling. It keeps design consistent and fast to implement.",

				// AI Engineering
				"OpenAI GPT": "A strong base for text generation, summarization, and conversational tools. Practical and easy to integrate.",
				LangChain: "The missing layer between LLMs, data, and logic. It makes AI actually usable in real workflows.",
				FastAPI: "A fast and type-safe Python framework for APIs. The built-in docs are a huge productivity gain.",
				Python: "My main language for AI and automation. Clear syntax, rich ecosystem, and fast to prototype with.",
				ML: "Teaching systems to recognize patterns and make predictions. A perfect mix of math and experimentation.",
				PyTorch: "Flexible and intuitive for research and prototyping. Great for experimenting quickly with ideas.",
				TensorFlow: "Built for production-scale ML. Stable, optimized, and ready for deployment at scale.",
				"Scikit-learn": "Clean, consistent, and well-documented. My go-to for classical ML algorithms and quick testing.",
				Keras: "A clear and intuitive API for deep learning. Great for fast iteration and experimentation.",
				NumPy: "The foundation of scientific computing in Python. I use it everywhere, from preprocessing to AI.",
				ChromaDB: "A modern vector database for semantic search and memory. Excellent for context-aware AI apps.",
				Pinecone: "A fast and scalable vector database in the cloud. Perfect for production-ready embeddings.",

				// Training & Mentoring
				Bootcamp: "An intense, hands-on learning experience. Real projects, real challenges, real progress.",
				Mentorat: "Mentoring is about listening first. I help others find their path rather than giving them mine.",
				Management: "Good management is about clarity and alignment. Give people context and trust, and they’ll deliver.",
				Passion: "The drive to keep learning and building. Curiosity keeps everything moving forward.",
				Debug: "Solving bugs is understanding systems deeply. It’s part logic, part patience, part satisfaction.",
				Veille: "Staying up to date isn’t optional. Continuous learning keeps my methods sharp and relevant.",
			},
		},
		education: {
			title: "Degrees & Certificates",
			subtitle: "From hospitality and finance to AI: a career transformation journey driven by curiosity and continuous learning",
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
					institution: "Ironhack Paris",
					description: "Specialized in machine learning, deep learning, NLP and AI application deployment with Python, PyTorch and LangChain",
				},
				rncp: {
					title: "RNCP 6 - Web & Mobile Developer",
					institution: "La Capsule - Tech Bootcamp",
					description: "Professional certification level Bachelor+3/4 in web, mobile developement and digital transformation",
				},
				mscSkema: {
					title: "MSc Corporate Financial Management",
					institution: "SKEMA Business School",
					description: "Master's degree in corporate finance, financial analysis, investment strategy and management control",
				},
				desmiSkema: {
					title: "DESMI International Management",
					institution: "SKEMA Business School",
					description: "Higher education diploma in international management, global strategy and business development",
				},
				bbaGlion: {
					title: "BBA (Hons.) International Hospitality Management",
					institution: "Glion Institute of Higher Education",
					description: "Bachelor's degree with honors in hospitality management, hotel real estate development and hospitality finance",
				},
			},
		},
		interests: {
			title: "My Interests",
			description: "Beyond code, what drives me",
			quote: "From finance to AI, every passion feeds my vision: understand, create and share with authenticity.",
			items: {
				kendo: {
					title: "Kendo",
					description: "Traditional Japanese martial art, discipline and self-improvement",
				},
				rugby: {
					title: "Rugby & French Team",
					description: "Passion for rugby and unconditional supporter of the French national team",
				},
				anime: {
					title: "Anime & Manga",
					description: "Fan of Japanese culture and visual storytelling",
				},
				gaming: {
					title: "Gaming",
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
			detailedDescriptions: {
				kendo:
					"Practicing kendo for several years, this Japanese martial art teaches me much more than sword techniques. It's a school of mental discipline, respect and self-improvement. Each training session is a meditation in movement that forges character and perseverance - essential qualities in software development and complex problem solving.",
				rugby:
					"Passionate about rugby since childhood, I'm a fervent supporter of the French national team. Every match is a moment of pure emotion where collective strategy, individual excellence and team spirit merge. This sport teaches me essential values: solidarity, perseverance in the face of adversity and the importance of every role in collective success - principles I naturally apply in my technical projects and teams.",
				anime:
					"Great fan of anime and manga, I particularly appreciate works that explore deep themes: science fiction, cyberpunk, personal development. This passion for Japanese culture nourishes my creativity and understanding of aesthetics, even influencing my interface design and user experience choices.",
				gaming:
					"Passionate gamer, I favor rich narrative adventures and immersive worlds that tell captivating stories. This passion develops my analytical ability, patience with complex challenges and understanding of engagement mechanics - skills directly transferable to application development and gamification.",
				theater:
					"Theater taught me the importance of presence, clear communication and stress management. These skills are valuable during my bootcamp training, technical presentations or client demonstrations. On stage as in presentation, you must know how to capture attention and convey your message with impact.",
				food: "Gastronomy is for me an art of living that cultivates patience, precision and attention to detail. Like in programming, cooking requires following processes, adjusting according to results and aiming for excellence. This passion also develops my creativity and sense of experimentation, always useful for technical innovation.",
			},
		},
		projects: {
			title: "My Projects & Links",
			description: "A few platforms, tools, and technical experiences I've developed.",
			status: {
				active: "Active",
				paused: "Paused",
			},
			techStack: "Tech Stack:",
			moreProjects: {
				title: "More Projects Coming Soon",
				description: "I'm constantly working on new projects and experiments. Stay tuned to discover what's next!",
			},
			cta: {
				site: "Visit site",
				"repo-front": "Frontend",
				"repo-back": "Backend",
				repo: "Microservice",
			},
			items: [
				{
					slug: "odyssai",
					name: "Odyssai",
					description:
						"An AI-powered narrative role-playing game where the player becomes the hero of their own story. You can create worlds, shape characters, and influence the plot through natural conversations.",
					stack: ["Flask", "Expo", "LangChain", "MongoDB", "Docker", "Docker Compose", "ChromaDB", "OpenAI", "fly.io"],
					links: {
						site: "#",
						"repo-front": "https://github.com/Jyok1m/odyssai-app",
						"repo-back": "https://github.com/Jyok1m/odyssai-core",
					},
					status: "Active",
				},
				{
					slug: "neoney",
					name: "Neoney",
					description:
						"A social network for Neo-entrepreneurs, designed to reinvent entrepreneurship and make business generation easier for its members. A platform built by entrepreneurs, for entrepreneurs.",
					stack: ["Next.js", "Express", "Tailwind", "MongoDB", "Vercel", "Northflank"],
					links: {
						site: "https://www.neoney.co/",
					},
					status: "Active",
				},
				{
					slug: "ipseis",
					name: "Ipseis",
					description:
						"IPSEIS designs active, immersive, and tailor-made training programs for professionals in the healthcare, social, and medical-social sectors.",
					stack: ["Next.js", "Express", "Docker", "Tailwind", "Fontawesome", "MongoDB", "Vercel"],
					links: {
						site: "https://www.ipseis.fr",
						"repo-front": "https://github.com/Jyok1m/ipseis",
						"repo-back": "https://github.com/Jyok1m/ipseis-backend",
					},
					status: "Active",
				},
				{
					slug: "generation_sauveteurs",
					name: "Génération Sauveteur",
					description: "Created by professional rescuers, this educational game teaches water safety and environmental awareness while having fun.",
					stack: ["React", "Symfony", "Nginx", "OVH", "MariaDB"],
					links: {
						site: "https://app.generationsauveteur.fr/",
					},
					status: "Active",
				},
				{
					slug: "ai-wedder",
					name: "AI Wedder",
					description: "An AI-based platform that analyzes wedding vendor reviews to assess quality and sentiment.",
					stack: ["Next.js", "FastAPI", "MongoDB", "HuggingFace", "Playwright", "OpenAI", "CamemBERT"],
					links: {
						site: "https://ai-wedder-frontend.vercel.app/",
						"repo-front": "https://github.com/Jyok1m/ai-wedder-frontend",
						"repo-back": "https://github.com/Jyok1m/ai-wedder-backend",
						repo: "https://github.com/Jyok1m/ai-wedder-microservice",
					},
					status: "Paused",
				},
			],
		},

		pricing: {
			title: "Pricing & Services",
			subtitle: "Packages tailored to every need, from showcase projects to enterprise architecture",
			tjm: "Daily rate: €500/day",
			tjmNote: "Adjustable based on complexity and urgency",
			cta: "Request a quote",
			plans: {
				essentiel: {
					name: "Essential",
					emoji: "🟢",
					price: "Starting from €3,000",
					target: "Craftspeople, freelancers, nonprofits",
					features: [
						"Responsive frontend, backend API, database",
						"1 production environment",
						"Docker containerization",
						"Shared hosting on my server",
						"Domain name included for the first year",
					],
					maintenance: "Optional maintenance: €150/month",
					maintenanceDetails: "Updates, weekly backups, basic monitoring, email support within 48h",
				},
				professionnel: {
					name: "Professional",
					emoji: "🔵",
					price: "Starting from €8,000",
					target: "SMBs, startups, agencies",
					includes: "Everything in Essential +",
					features: [
						"Multi-environment (dev / staging / prod)",
						"Admin back-office",
						"Third-party API integrations (Stripe, SSO, mailing…)",
						"Automated testing + CI/CD pipeline",
						"Observability (logs, metrics, alerts)",
					],
					maintenance: "Recommended maintenance: €300/month",
					maintenanceDetails: "Daily backups, 24/7 monitoring, support within 24h, security updates, monthly report",
				},
				surmesure: {
					name: "Custom / Enterprise",
					emoji: "🟣",
					price: "Custom quote (from €15,000)",
					target: "Established SMBs, scale-ups, regulated companies",
					includes: "Everything in Professional +",
					features: [
						"Dedicated hosting (OVH / AWS / GCP / Azure of your choice)",
						"Microservices architecture",
						"Full security audit (OWASP)",
						"DevSecOps, high availability, horizontal scalability",
						"Comprehensive technical documentation",
					],
					maintenance: "Custom maintenance: from €500/month",
					maintenanceDetails: "Negotiable SLA",
				},
			},
			alacarte: {
				title: "À la carte services",
				items: [
					{ name: "Security audit", price: "€1,500 – €3,000" },
					{ name: "Functional / technical audit", price: "€1,000 – €2,000" },
					{ name: "Containerization of existing app", price: "€1,500 – €4,000" },
					{ name: "Cloud migration", price: "Custom quote" },
					{ name: "Training / knowledge transfer", price: "€500/day" },
					{ name: "Emergency intervention", price: "Daily rate × 1.5" },
				],
			},
			transparency: {
				title: "Transparency",
				text: "My pricing includes hosting, domain name management, and infrastructure. No hidden fees: you receive a detailed monthly report on the status of your application.",
			},
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
					description: "joachim.jasmin-dev@proton.me",
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
