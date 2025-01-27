import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
		"Discover the personal website of a French engineering student at ISEP Paris & SydneyUni and gain a deeper understanding of his valuable skills, diverse experiences, and wide-ranging interests. Get to know him and follow his journey as he continues to grow and make an impact in the field of engineering.",
	keywords:
		"engineer, engineering, student, french, cybersecurity, software, it, information technologies, information systems, bora balos, bora, balos, france, australia, isep, sydney, university of sydney, computer science, web technologies",
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}