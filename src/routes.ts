export interface RouteSeo {
	title: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
}

export interface RouteConfig {
	path: string;
	sectionId: string;
	navKey: string;
	seo: {
		fr: RouteSeo;
		en: RouteSeo;
	};
}

export const routes: RouteConfig[] = [
	{
		path: "/",
		sectionId: "hero",
		navKey: "home",
		seo: {
			fr: {
				title: "Joachim Jasmin - Ingénieur Cloud DevOps, FullStack & IA | Formateur Tech",
				description:
					"Expert Cloud & DevOps, développeur FullStack et ingénieur IA. Formateur en bootcamp spécialisé AWS, Terraform, React, Node.js, LangChain. Disponible pour projets et formations.",
				ogTitle: "Joachim Jasmin - Expert Cloud DevOps & IA | Formateur Tech",
				ogDescription:
					"Expert Cloud & DevOps, développeur FullStack et ingénieur IA. Formateur spécialisé AWS, React, LangChain. Disponible pour projets et formations.",
			},
			en: {
				title: "Joachim Jasmin - Cloud DevOps, FullStack & AI Engineer | Tech Trainer",
				description:
					"Cloud & DevOps expert, FullStack developer and AI engineer. Bootcamp instructor specializing in AWS, Terraform, React, Node.js, LangChain. Available for projects and training.",
				ogTitle: "Joachim Jasmin - Cloud DevOps & AI Expert | Tech Trainer",
				ogDescription:
					"Cloud & DevOps expert, FullStack developer and AI engineer. Specialized in AWS, React, LangChain. Available for projects and training.",
			},
		},
	},
	{
		path: "/a-propos",
		sectionId: "about",
		navKey: "about",
		seo: {
			fr: {
				title: "À propos - Joachim Jasmin | Parcours & Reconversion Tech",
				description:
					"Découvrez le parcours de Joachim Jasmin : reconversion réussie de la finance et l'hôtellerie vers l'ingénierie Cloud DevOps, le développement FullStack et l'IA.",
				ogTitle: "À propos de Joachim Jasmin - Parcours & Reconversion Tech",
				ogDescription:
					"Reconversion réussie finance vers tech. Expert Cloud DevOps, développeur FullStack et ingénieur IA.",
			},
			en: {
				title: "About - Joachim Jasmin | Career Path & Tech Transition",
				description:
					"Discover Joachim Jasmin's journey: successful career transition from finance and hospitality to Cloud DevOps engineering, FullStack development and AI.",
				ogTitle: "About Joachim Jasmin - Career Path & Tech Transition",
				ogDescription:
					"Successful career transition from finance to tech. Cloud DevOps expert, FullStack developer and AI engineer.",
			},
		},
	},
	{
		path: "/competences",
		sectionId: "skills",
		navKey: "skills",
		seo: {
			fr: {
				title: "Compétences - Joachim Jasmin | Cloud, DevOps, FullStack & IA",
				description:
					"Compétences techniques : AWS, Terraform, Kubernetes, Docker, React, Node.js, TypeScript, LangChain, OpenAI. Expert Cloud DevOps et développeur FullStack.",
				ogTitle: "Compétences de Joachim Jasmin - Cloud, DevOps, FullStack & IA",
				ogDescription:
					"AWS, Terraform, Kubernetes, Docker, React, Node.js, TypeScript, LangChain. Expert technique polyvalent.",
			},
			en: {
				title: "Skills - Joachim Jasmin | Cloud, DevOps, FullStack & AI",
				description:
					"Technical skills: AWS, Terraform, Kubernetes, Docker, React, Node.js, TypeScript, LangChain, OpenAI. Cloud DevOps expert and FullStack developer.",
				ogTitle: "Joachim Jasmin's Skills - Cloud, DevOps, FullStack & AI",
				ogDescription:
					"AWS, Terraform, Kubernetes, Docker, React, Node.js, TypeScript, LangChain. Versatile technical expert.",
			},
		},
	},
	{
		path: "/formation",
		sectionId: "education",
		navKey: "education",
		seo: {
			fr: {
				title: "Formation - Joachim Jasmin | Ironhack, La Capsule, SKEMA, Glion",
				description:
					"Formations : Ironhack (Web Development), La Capsule (FullStack JS), SKEMA Business School (Finance), Glion (Hospitality Management). Certifications AWS.",
				ogTitle: "Formation de Joachim Jasmin - Parcours Académique",
				ogDescription:
					"Ironhack, La Capsule, SKEMA Business School, Glion. Certifications AWS et formations tech.",
			},
			en: {
				title: "Education - Joachim Jasmin | Ironhack, La Capsule, SKEMA, Glion",
				description:
					"Education: Ironhack (Web Development), La Capsule (FullStack JS), SKEMA Business School (Finance), Glion (Hospitality Management). AWS Certifications.",
				ogTitle: "Joachim Jasmin's Education - Academic Background",
				ogDescription:
					"Ironhack, La Capsule, SKEMA Business School, Glion. AWS certifications and tech training.",
			},
		},
	},
	{
		path: "/passions",
		sectionId: "interests",
		navKey: "interests",
		seo: {
			fr: {
				title: "Passions - Joachim Jasmin | Centres d'intérêt",
				description:
					"Découvrez les passions et centres d'intérêt de Joachim Jasmin au-delà du code : sport, voyages, musique et plus.",
				ogTitle: "Passions de Joachim Jasmin",
				ogDescription: "Les centres d'intérêt de Joachim Jasmin au-delà du code.",
			},
			en: {
				title: "Passions - Joachim Jasmin | Interests",
				description:
					"Discover Joachim Jasmin's passions and interests beyond code: sports, travel, music and more.",
				ogTitle: "Joachim Jasmin's Passions",
				ogDescription: "Joachim Jasmin's interests beyond code.",
			},
		},
	},
	{
		path: "/projets",
		sectionId: "projects",
		navKey: "projects",
		seo: {
			fr: {
				title: "Projets - Joachim Jasmin | Portfolio & Réalisations",
				description:
					"Projets et réalisations de Joachim Jasmin : applications web, infrastructures Cloud, solutions IA, projets open source. React, AWS, Terraform, LangChain.",
				ogTitle: "Projets de Joachim Jasmin - Portfolio & Réalisations",
				ogDescription:
					"Applications web, infrastructures Cloud, solutions IA et projets open source.",
			},
			en: {
				title: "Projects - Joachim Jasmin | Portfolio & Achievements",
				description:
					"Joachim Jasmin's projects and achievements: web applications, Cloud infrastructure, AI solutions, open source projects. React, AWS, Terraform, LangChain.",
				ogTitle: "Joachim Jasmin's Projects - Portfolio & Achievements",
				ogDescription:
					"Web applications, Cloud infrastructure, AI solutions and open source projects.",
			},
		},
	},
	{
		path: "/tarifs",
		sectionId: "pricing",
		navKey: "pricing",
		seo: {
			fr: {
				title: "Tarifs - Joachim Jasmin | Freelance Cloud DevOps & IA",
				description:
					"Tarifs freelance de Joachim Jasmin : sites web à partir de 3000€, applications professionnelles dès 8000€, solutions sur-mesure dès 15000€. Devis gratuit.",
				ogTitle: "Tarifs Freelance - Joachim Jasmin",
				ogDescription:
					"Sites web dès 3000€, applications pro dès 8000€, solutions sur-mesure dès 15000€. Devis gratuit.",
			},
			en: {
				title: "Pricing - Joachim Jasmin | Freelance Cloud DevOps & AI",
				description:
					"Joachim Jasmin freelance pricing: websites from €3,000, professional applications from €8,000, custom solutions from €15,000. Free quote.",
				ogTitle: "Freelance Pricing - Joachim Jasmin",
				ogDescription:
					"Websites from €3,000, pro apps from €8,000, custom solutions from €15,000. Free quote.",
			},
		},
	},
	{
		path: "/contact",
		sectionId: "contact",
		navKey: "contact",
		seo: {
			fr: {
				title: "Contact - Joachim Jasmin | Devis Gratuit & Collaboration",
				description:
					"Contactez Joachim Jasmin pour vos projets Cloud DevOps, développement web, IA ou formations tech. Devis gratuit sous 24h. Basé à Paris, disponible en remote.",
				ogTitle: "Contacter Joachim Jasmin - Devis Gratuit",
				ogDescription:
					"Projets Cloud DevOps, développement web, IA ou formations. Devis gratuit sous 24h. Paris & remote.",
			},
			en: {
				title: "Contact - Joachim Jasmin | Free Quote & Collaboration",
				description:
					"Contact Joachim Jasmin for Cloud DevOps projects, web development, AI or tech training. Free quote within 24h. Based in Paris, available remotely.",
				ogTitle: "Contact Joachim Jasmin - Free Quote",
				ogDescription:
					"Cloud DevOps projects, web development, AI or training. Free quote within 24h. Paris & remote.",
			},
		},
	},
];

export function getRouteByPath(path: string): RouteConfig | undefined {
	return routes.find((r) => r.path === path);
}

export function getRouteBySectionId(sectionId: string): RouteConfig | undefined {
	return routes.find((r) => r.sectionId === sectionId);
}
