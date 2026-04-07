import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Ken Yang",
	subtitle:
		"品质管理 · 供应商质量 · 制造改善 | Quality Management · Supplier Quality · Manufacturing Improvement",
	lang: "zh_CN",
	themeColor: {
		hue: 220,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "标签",
			url: "/tags/",
		},
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/kenzzyang/kenzzyang.github.io",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://github.com/kenzzyang.png",
	name: "Ken Yang",
	bio: "二十多年制造业品质与现场改善经验，关注供应商质量、体系建设、APQP/PFMEA 与团队协同。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/kenzzyang",
		},
		{
			name: "Email",
			icon: "fa6-regular:envelope",
			url: "mailto:1246555704@qq.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
