import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollProvider from "@/lib/scroll-provider";
import SplashCursor from "@/components/splash-cursor";
import Navbar from "@/components/ui/nav";
// import PageTransition from "@/components/page-transition";
import { ViewTransitions } from "next-view-transitions";


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
		<ViewTransitions>
			<html lang="en">
				<head>
					{/* <meta charSet={metadata.charset} />
					<meta
						httpEquiv={metadata.httpEquiv}
						content={metadata.content}
					/>
					<meta name="viewport" content={metadata.viewport} />
					<meta name="description" content={metadata.metaDescription} />
					<meta name="keywords" content={metadata.keywords} />
					<title>{metadata.title}</title>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" /> */}


					{/* <meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="apple-mobile-web-app-title" content="Aila" />
					<meta name="theme-color" content="#050505" />
					<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<link rel="shortcut icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="manifest" href="/site.webmanifest" /> */}
				</head>
				<ScrollProvider>
					<body
						className={`${geistSans.variable} ${geistMono.variable} antialiased`}
					>
						{/* <PageTransition> */}
						<Navbar />
						{children}
						<div className="absolute -z-10">
							<SplashCursor />
						</div>
						{/* </PageTransition> */}
						<Analytics />
					</body>
				</ScrollProvider>
			</html>
		</ViewTransitions>
	);
}