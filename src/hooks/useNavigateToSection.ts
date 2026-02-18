import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRouteBySectionId } from "../routes";

export function useNavigateToSection() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return useCallback(
		(sectionId: string) => {
			const route = getRouteBySectionId(sectionId);
			if (!route) return;

			if (pathname === route.path) {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			} else {
				navigate(route.path);
			}
		},
		[navigate, pathname]
	);
}
