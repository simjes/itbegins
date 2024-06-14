import { cn } from '@/lib/utils';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// exporting as a combined component since they don't work as separate components in Astro — https://github.com/shadcn-ui/ui/issues/987
type Props = {
  src: AvatarPrimitive.AvatarImageProps['src'];
  alt: AvatarPrimitive.AvatarImageProps['alt'];
  fallbackText: AvatarPrimitive.AvatarFallbackProps['children'];
  className?: string;
};
export const AvatarComponent = ({
  src,
  alt,
  fallbackText,
  className,
}: Props) => (
  <Avatar className={className}>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>{fallbackText}</AvatarFallback>
  </Avatar>
);
