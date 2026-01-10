import type { Metadata } from 'next';
import '@/styles/globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Text Before You Send - Think Before You Text',
  description: 'Take a breath, review your message, and send with confidence. The app that helps you avoid regrettable messages.',
  keywords: 'messaging, AI, tone detection, text review, communication',
  authors: [{ name: 'Text Before You Send' }],
  openGraph: {
    type: 'website',
    url: 'https://textbeforeyousend.com',
    title: 'Text Before You Send - Think Before You Text',
    description: 'Take a breath, review your message, and send with confidence.',
    siteName: 'Text Before You Send',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Before You Send - Think Before You Text',
    description: 'Take a breath, review your message, and send with confidence.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
