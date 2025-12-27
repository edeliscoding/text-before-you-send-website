import type { Metadata } from 'next';
import '@/styles/globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
