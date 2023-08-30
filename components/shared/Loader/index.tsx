import { useMediaQuery } from '@/utils/useMediaQuery';

interface MeduaQueryInterface {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  screenWidth: number;
}

export default function MediaQuerySwitcher({
  mobile = <div />,
  desktop = <div />,
  screenWidth = 768,
}: MeduaQueryInterface) {
  const mediaMatches = useMediaQuery(screenWidth);
  if (mediaMatches) return desktop;
  return mobile;
}
