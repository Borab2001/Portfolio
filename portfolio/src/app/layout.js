import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import HotjarTracking from '@/components/HotjarTracking';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bora Balos | Portfolio website',
  description: 'Discover the personal website of a French engineering student at ISEP Paris & SydneyUni and gain a deeper understanding of his valuable skills, diverse experiences, and wide-ranging interests. Get to know him and follow his journey as he continues to grow and make an impact in the field of engineering.',
  charset: 'UTF-8',
  httpEquiv: 'X-UA-Compatible',
  content: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0',
  metaDescription: 'Discover the personal website of a French engineering student at ISEP Paris & SydneyUni and gain a deeper understanding of his valuable skills, diverse experiences, and wide-ranging interests. Get to know him and follow his journey as he continues to grow and make an impact in the field of engineering.',
  keywords: 'engineer, engineering, student, french, cybersecurity, software, it, information technologies, information systems, bora balos, bora, balos, france, australia, isep, sydney, university of sydney, computer science, web technologies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet={metadata.charset} />
        <meta httpEquiv={metadata.httpEquiv} content={metadata.content} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.metaDescription} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <HotjarTracking siteId={3741456} hotjarVersion={6} />
      </body>
    </html>
  );
}
