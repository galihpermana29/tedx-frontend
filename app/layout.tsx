import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
