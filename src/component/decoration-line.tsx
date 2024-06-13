import { cn } from '@/lib/utils';

type Type = 'purple' | 'blue';

type Props = {
  type?: Type;
  className?: string;
};

export const DecorationLine = ({
  className = 'w-24',
  type = 'purple',
}: Props) => {
  return (
    <div
      aria-hidden
      className={cn(
        'mt-2 h-1 rounded-full bg-gradient-to-r',
        type === 'purple' ? 'from-violet-500 to-fuchsia-500' : '',
        type === 'blue' ? 'from-cyan-500 to-blue-500' : '',
        className,
      )}
    />
  );
};
