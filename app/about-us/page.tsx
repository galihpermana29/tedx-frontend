'use client';
import AboutUsMobile from './mobile';
import AboutUsDesktop from './desktop';
import MediaQuerySwitcher from '@/components/shared/Loader';

export default function AboutUs() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<AboutUsMobile />}
      desktop={<AboutUsDesktop />}
    />
  );
}
