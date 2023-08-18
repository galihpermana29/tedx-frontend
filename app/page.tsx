'use client';
import MediaQuerySwitcher from '@/components/shared/Loader';
import HomeDesktop from './desktop';
import HomeMobile from './mobile';

export default function Home() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<HomeMobile />}
      desktop={<HomeDesktop />}
    />
  );
}
