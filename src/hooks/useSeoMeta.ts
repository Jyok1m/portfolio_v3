import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteByPath } from "../routes";
import type { LocaleKey } from "../i18n/locales";

const BASE_URL = "https://joachimjasmin.com";

function setMetaTag(attr: string, key: string, content: string) {
	let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function setCanonical(href: string) {
	let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", "canonical");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

export function useSeoMeta(locale: LocaleKey) {
	const { pathname } = useLocation();

	useEffect(() => {
		const route = getRouteByPath(pathname);
		if (!route) return;

		const seo = route.seo[locale];
		const canonicalUrl = `${BASE_URL}${route.path === "/" ? "" : route.path}`;

		document.title = seo.title;

		setMetaTag("name", "description", seo.description);
		setMetaTag("name", "title", seo.title);

		setMetaTag("property", "og:title", seo.ogTitle);
		setMetaTag("property", "og:description", seo.ogDescription);
		setMetaTag("property", "og:url", canonicalUrl);

		setMetaTag("name", "twitter:title", seo.ogTitle);
		setMetaTag("name", "twitter:description", seo.ogDescription);
		setMetaTag("name", "twitter:url", canonicalUrl);

		setCanonical(canonicalUrl);
	}, [pathname, locale]);
}
