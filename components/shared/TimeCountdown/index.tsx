import { useCountdown } from '@/utils/useCountdown';

function TimeCountdown({ className }: { className?: string }) {
  const targetDate = new Date(2023, 8, 23, 16, 0, 0);
  const [hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div
      className={`${className} text-7xl text-cream rosela`}>{`${hours}.${minutes}.${seconds}`}</div>
  );
}

export default TimeCountdown;
