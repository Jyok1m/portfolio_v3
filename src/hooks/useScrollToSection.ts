import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getRouteByPath } from "../routes";

export function useScrollToSection() {
	const { pathname } = useLocation();
	const isFirstLoad = useRef(true);

	useEffect(() => {
		const route = getRouteByPath(pathname);
		const sectionId = route?.sectionId;

		const scrollTo = () => {
			if (!sectionId || sectionId === "hero") {
				window.scrollTo({ top: 0, behavior: isFirstLoad.current ? "auto" : "smooth" });
			} else {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({ behavior: isFirstLoad.current ? "auto" : "smooth" });
				}
			}
			isFirstLoad.current = false;
		};

		if (isFirstLoad.current) {
			// Wait for DOM to stabilize (3D canvas, lazy content)
			const timer = setTimeout(scrollTo, 100);
			return () => clearTimeout(timer);
		} else {
			scrollTo();
		}
	}, [pathname]);
}
