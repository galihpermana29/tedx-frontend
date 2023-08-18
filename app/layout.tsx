import '../public/fonts/stylesheet.css';
import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEDx Universitas Brawijaya',
  description:
    'TEDxUniversitasBrawijaya ingin membawa setiap individu untuk mengeksplorasi "baskara" yang terpendam akibat dari "eksklusivitas" di era modernisasi saat ini.',
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
