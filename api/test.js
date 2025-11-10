// Test endpoint to verify API functionality
export default function handler(req, res) {
	const baseUrl = req.headers.host ? `https://${req.headers.host}` : "https://joachimjasmin.com";

	const imageEndpoints = {
		profile: `${baseUrl}/api/profile-image`,
		logo: `${baseUrl}/api/logo-image`,
		ogImage: `${baseUrl}/api/og-image`,
		dynamicImage: `${baseUrl}/api/image?image=profile`,
	};

	res.status(200).json({
		message: "Image API endpoints are configured",
		endpoints: imageEndpoints,
		status: "active",
		timestamp: new Date().toISOString(),
	});
}
