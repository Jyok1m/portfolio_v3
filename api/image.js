// API endpoint for serving images with proper headers and error handling
export default function handler(req, res) {
	const { image } = req.query;

	// Map of available images
	const imageMap = {
		profile: {
			path: "/documents/pictures/profile_pic.jpg",
			type: "image/jpeg",
			alt: "Photo de profil de Joachim Jasmin - Expert Cloud DevOps et IA",
		},
		logo: {
			path: "/documents/pictures/logo.png",
			type: "image/png",
			alt: "Logo Joachim Jasmin - Ingénieur Cloud DevOps et IA",
		},
	};

	// Validate requested image
	if (!image || !imageMap[image]) {
		return res.status(404).json({
			error: "Image not found",
			available: Object.keys(imageMap),
		});
	}

	const imageConfig = imageMap[image];

	// Set optimal headers for image serving
	res.setHeader("Content-Type", imageConfig.type);
	res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
	res.setHeader("X-Content-Type-Options", "nosniff");
	res.setHeader("X-Frame-Options", "SAMEORIGIN");
	res.setHeader("X-Image-Alt", imageConfig.alt);

	// Handle preflight requests
	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	// Redirect to actual image with proper caching
	res.redirect(301, imageConfig.path);
}
