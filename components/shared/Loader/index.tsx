import { useMediaQuery } from '@/utils/useMediaQuery';

interface MeduaQueryInterface {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export default function MediaQuerySwitcher({
  mobile,
  desktop,
}: MeduaQueryInterface) {
  const mediaMatches = useMediaQuery(768);
  return <div>{mediaMatches ? desktop : mobile}</div>;
}
