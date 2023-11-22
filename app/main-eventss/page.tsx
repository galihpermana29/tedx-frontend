'use client';

import MediaQuerySwitcher from '@/components/shared/Loader';
import MainEvent from './desktop';
import MainEventMobile from './mobile';

export default function PreEvent() {
  return (
    <div>
      <MediaQuerySwitcher
        screenWidth={1024}
        mobile={<MainEventMobile />}
        desktop={<MainEvent />}
      />
    </div>
  );
}
