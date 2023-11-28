'use client';

import { useCountdown } from '@/utils/useCountdown';

function TimeCountdown({
  className,
  date,
}: {
  className?: string;
  date: Date;
}) {
  const targetDate = date;
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div
      className={`${className} text-cream rosela`}>{`${days}.${hours}.${minutes}.${seconds}`}</div>
  );
}

export default TimeCountdown;
