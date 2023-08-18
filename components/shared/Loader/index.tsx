import { useMediaQuery } from '@/utils/useMediaQuery';

interface MeduaQueryInterface {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  screenWidth: number;
}

export default function MediaQuerySwitcher({
  mobile,
  desktop,
  screenWidth = 768,
}: MeduaQueryInterface) {
  const mediaMatches = useMediaQuery(screenWidth);
  return <div>{mediaMatches ? desktop : mobile}</div>;
}
