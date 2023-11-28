import MediaQuerySwitcher from '@/components/shared/Loader';
import MainEventSpeakersDesktop from './desktop';
import MainEventSpeakersMobile from './mobile';

function MainEventSpeakers() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<MainEventSpeakersMobile />}
      desktop={<MainEventSpeakersDesktop />}
    />
  );
}

export default MainEventSpeakers;
