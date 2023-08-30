'use client';
import MediaQuerySwitcher from '@/components/shared/Loader';
import HomeDesktop from './desktop';
import HomeMobile from './mobile';
import { Suspense, useState } from 'react';
import Navigation from '@/components/shared/Navbar';
import Image from 'next/image';
import xIcon from '@/images/x-icon.png';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const pushToHomePage = () => {
    router.push('/home');
  };

  return (
    <>
      {!isClicked && <Navigation />}
      {isClicked && (
        <div
          className="absolute top-[5vh] right-[5vh] z-[101] cursor-pointer "
          onClick={pushToHomePage}>
          <Image src={xIcon} alt="logo" className="max-w-[30px]" />
        </div>
      )}
      <Suspense fallback={<p>Loading feed...</p>}>
        <MediaQuerySwitcher
          screenWidth={1024}
          mobile={
            <HomeMobile isClicked={isClicked} setIsClicked={setIsClicked} />
          }
          desktop={
            <HomeDesktop isClicked={isClicked} setIsClicked={setIsClicked} />
          }
        />
      </Suspense>
    </>
  );
}
