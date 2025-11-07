# Portfolio Joachim Jasmin

Portfolio personnel moderne avec **Vite + React + Tailwind CSS + React Three Fiber**

## 🚀 Fonctionnalités

- **Bilingue FR/EN** avec système i18n
- **Design futuriste** inspiré jeux vidéo/cockpit
- **Composant 3D interactif** avec React Three Fiber
- **Responsive** et optimisé mobile
- **Animations fluides** et effets glassmorphism
- **Sections complètes** : Hero, About, Skills, Passions, Projects, Contact

## 🛠️ Technologies

### Frontend

- **Vite** - Build tool ultra-rapide
- **React 19** - Interface utilisateur
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first

### 3D & Animations

- **@react-three/fiber** - React pour Three.js
- **@react-three/drei** - Helpers Three.js
- **Three.js** - Rendu 3D WebGL

### Architecture

- **Components modulaires** dans `/src/components/`
- **Sections organisées** dans `/src/sections/`
- **Système i18n** dans `/src/i18n/`

## 📦 Installation

```bash
# Cloner le projet
git clone [url]
cd portfolio_v3

# Installer les dépendances
npm install

# Lancer le dev server
npm run dev

# Build pour production
npm run build
```

## 🎨 Personnalisation

### Couleurs du thème

```js
// tailwind.config.js
colors: {
  'cyber-dark': '#0f172a',
  'cyber-blue': '#0ea5e9',
  'cyber-cyan': '#38bdf8',
  'cyber-purple': '#6366f1',
  // ...
}
```

### Ajouter des projets

Modifier `/src/i18n/locales.ts` :

```js
projects: {
	items: [
		{
			slug: "nouveau-projet",
			name: "Mon Nouveau Projet",
			description: "Description du projet",
			stack: ["React", "Node.js"],
			links: { site: "#", repo: "#" },
		},
	];
}
```

### Personnaliser la scène 3D

Modifier `/src/components/HeroScene.tsx` pour changer l'objet 3D central ou les effets.

## 📱 Sections

1. **Hero** - Titre, CTA et scène 3D interactive
2. **About** - Présentation et expertise
3. **Skills** - 4 catégories de compétences
4. **Passions** - Centres d'intérêt personnels
5. **Projects** - Portfolio avec liens
6. **Contact** - Formulaire et informations

## 🌐 Déploiement

Le site est prêt pour être déployé sur :

- **Vercel** / **Netlify** (recommandé)
- **GitHub Pages**
- Tout hébergeur statique

```bash
npm run build
# Le dossier `dist/` contient les fichiers statiques
```

## 📄 Structure

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx
│   ├── HeroScene.tsx   # Scène 3D principale
│   ├── LanguageSwitcher.tsx
│   └── SectionTitle.tsx
├── sections/           # Sections du portfolio
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Passions.tsx
│   ├── ProjectsLinks.tsx
│   └── Contact.tsx
├── i18n/              # Internationalisation
│   ├── locales.ts     # Dictionnaires FR/EN
│   └── useLocale.tsx  # Hook et Provider
├── App.tsx            # Application principale
├── main.jsx           # Point d'entrée
└── index.css          # Styles Tailwind
```

---

**Fait avec ❤️ par Joachim Jasmin**  
_Cloud & DevOps Engineer • Fullstack Developer • AI Engineer • Teacher_

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
