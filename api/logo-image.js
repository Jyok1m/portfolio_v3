import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
	try {
		// Set proper headers for PNG image
		res.setHeader("Content-Type", "image/png");
		res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET");

		// Add security headers
		res.setHeader("X-Content-Type-Options", "nosniff");
		res.setHeader("X-Frame-Options", "SAMEORIGIN");

		// Path to the logo image
		const imagePath = join(process.cwd(), "public", "documents", "pictures", "logo.png");

		// Read and serve the image
		const imageBuffer = readFileSync(imagePath);

		res.status(200).send(imageBuffer);
	} catch (error) {
		console.error("Error serving logo image:", error);
		res.status(404).json({ error: "Logo not found" });
	}
}
