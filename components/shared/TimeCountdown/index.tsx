import { useCountdown } from '@/utils/useCountdown';

function TimeCountdown({ className }: { className?: string }) {
  const targetDate = new Date(2023, 8, 23, 16, 0, 0);
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div
      className={`${className} text-7xl text-cream rosela`}>{`${days}.${hours}.${minutes}.${seconds}`}</div>
  );
}

export default TimeCountdown;
