import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Bora Balos | Portfolio website",
    description:
        "Discover the personal website of a French engineering student at ISEP Paris & SydneyUni and gain a deeper understanding of his valuable skills, diverse experiences, and wide-ranging interests. Get to know him and follow his journey as he continues to grow and make an impact in the field of engineering.",
    charset: "UTF-8",
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    viewport: "width=device-width, initial-scale=1.0",
    metaDescription:
        "Discover the personal website of a French engineering student at ISEP Paris & SydneyUni and gain a deeper understanding of his valuable skills, diverse experiences, and wide-ranging interests. Get to know him and follow his journey as he continues to grow and make an impact in the field of engineering.",
    keywords:
        "engineer, engineering, student, french, cybersecurity, software, it, information technologies, information systems, bora balos, bora, balos, france, australia, isep, sydney, university of sydney, computer science, web technologies",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet={metadata.charset} />
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
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={inter.className}>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
