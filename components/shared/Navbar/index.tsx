'use client';
// import HomeMobile from './mobile';
import { NavbarDesktop } from './desktop';
import MediaQuerySwitcher from '../Loader';
import { NavbarMobile } from './mobile';

export default function Navigation() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<NavbarMobile />}
      desktop={<NavbarDesktop />}
    />
  );
}
