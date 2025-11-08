#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Générer .npmrc avec les variables d'environnement
const generateNpmrc = () => {
	const authToken = process.env.FONTAWESOME_TOKEN;

	if (!authToken) {
		console.log("⚠️  FONTAWESOME_TOKEN not found - using fallback build without Font Awesome Pro");
		return;
	}

	const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=${authToken}
`;

	const npmrcPath = path.join(process.cwd(), ".npmrc");

	try {
		fs.writeFileSync(npmrcPath, npmrcContent, "utf8");
		console.log("✅ Generated .npmrc for Font Awesome Pro");
	} catch (error) {
		console.error("❌ Failed to generate .npmrc:", error.message);
		process.exit(1);
	}
};

generateNpmrc();
