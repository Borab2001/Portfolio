import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollProvider from "@/lib/scroll-provider";
import SplashCursor from "@/components/splash-cursor";
import Footer from "@/components/footer";



const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Bora Balos",
	description:
		"Personal website of a French software engineer and designer from ISEP Paris & University of Sydney. Showcasing experiences, projects and memories from Sydney.",
	keywords:
		"software engineer, designer, frontend, ux/ui, computer science, isep, university of sydney, paris, france, australia",
	openGraph: {
		title: "Bora Balos",
		description:
			"Software engineer & designer based in Paris. Discover my creative journey and memories.",
		url: "https://www.borabalos.com",
		siteName: "Bora Balos",
		locale: "en_US",
		type: "website",
		images: [
			{
			url: "https://www.borabalos.com/og-image.jpg", // ← on va en parler juste après
			width: 1200,
			height: 630,
			alt: "Bora Balos Portfolio Preview",
			},
		],
	},
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			</head>
			<ScrollProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<div className="backdrop-blur-lg flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
						{children}
						<Footer />
					</div>

					<div className="absolute -z-10">
						<SplashCursor />
					</div>

					<Analytics />
				</body>
			</ScrollProvider>
		</html>
	);
}