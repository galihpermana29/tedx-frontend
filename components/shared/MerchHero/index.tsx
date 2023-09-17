import MediaQuerySwitcher from '../Loader';
import MerchHeroDesktop from './desktop';
import MerchHeroMobile from './mobile';

function MerchHero() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<MerchHeroMobile />}
      desktop={<MerchHeroDesktop />}
    />
  );
}

export default MerchHero;
