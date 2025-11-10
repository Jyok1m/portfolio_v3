import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
	try {
		// Set proper headers for image serving and social media
		res.setHeader("Content-Type", "image/jpeg");
		res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET");

		// Add Open Graph specific headers
		res.setHeader("X-Content-Type-Options", "nosniff");
		res.setHeader("X-Frame-Options", "SAMEORIGIN");

		// Path to the profile image
		const imagePath = join(process.cwd(), "public", "documents", "pictures", "profile_pic.jpg");

		// Read and serve the image
		const imageBuffer = readFileSync(imagePath);

		res.status(200).send(imageBuffer);
	} catch (error) {
		console.error("Error serving profile image:", error);
		res.status(404).json({ error: "Image not found" });
	}
}
