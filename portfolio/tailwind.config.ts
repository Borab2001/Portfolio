import type { Config } from "tailwindcss";

export default {
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				border: {
					DEFAULT: "var(--border)",
					light: "var(--light)",
				},
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				muted: "var(--muted)",
				subtle: "var(--subtle)",
				surface: {
					DEFAULT: "var(--surface)",
					text: "var(--surface-text)",
					muted: "var(--surface-muted)",
				},
				backdrop: "var(--backdrop)",
				'muted-foreground': "var(--muted)",
			},
			animation: {},
			keyframes: {},
		},
	},
  	plugins: [],
} satisfies Config;
