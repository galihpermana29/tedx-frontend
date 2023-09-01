import '../public/fonts/stylesheet.css';
import './globals.scss';
import { Metadata } from 'next';
import { MetaLayout } from './meta';

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
  // const pathName = usePathname();
  // const footerExcludedPaths = ['/'];

  return (
    <html lang="en">
      <body>
        <MetaLayout>{children}</MetaLayout>
        {/* <LoadingPage /> */}
        {/* {!footerExcludedPaths.includes(pathName) && <Navigation />} */}

        {/* {!footerExcludedPaths.includes(pathName) && <Footer />} */}
      </body>
    </html>
  );
}
