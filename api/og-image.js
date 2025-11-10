import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
	try {
		// Set headers optimized for Open Graph and social media
		res.setHeader("Content-Type", "image/jpeg");
		res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=31536000");
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET");

		// Open Graph specific headers
		res.setHeader("X-Content-Type-Options", "nosniff");
		res.setHeader("X-Frame-Options", "SAMEORIGIN");
		res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

		// Add meta information for social media crawlers
		res.setHeader("X-Image-Width", "1200");
		res.setHeader("X-Image-Height", "630");
		res.setHeader("X-Image-Alt", "Joachim Jasmin - Ingénieur Cloud DevOps et IA");

		// Path to the profile image
		const imagePath = join(process.cwd(), "public", "documents", "pictures", "profile_pic.jpg");

		// Read and serve the image
		const imageBuffer = readFileSync(imagePath);

		res.status(200).send(imageBuffer);
	} catch (error) {
		console.error("Error serving OG image:", error);
		res.status(404).json({
			error: "Open Graph image not found",
			message: "The requested social media image is not available",
		});
	}
}
