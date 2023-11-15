'use client';

import MediaQuerySwitcher from '@/components/shared/Loader';
import MainEvent from './desktop';

export default function PreEvent() {
  return (
    <div>
      <MediaQuerySwitcher
        screenWidth={1024}
        mobile={<div />}
        desktop={<MainEvent />}
      />
    </div>
  );
}
