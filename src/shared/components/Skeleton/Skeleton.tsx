import MuiSkeleton, { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export type SkeletonProps = Omit<MuiSkeletonProps, 'variant' | 'width' | 'height'> & {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  'aria-label'?: string;
  className?: string;
};

export default function Skeleton({
  width,
  height,
  circle,
  'aria-label': ariaLabel,
  className,
  ...rest
}: SkeletonProps) {
  return (
    <MuiSkeleton
      className={className}
      variant={circle ? 'circular' : 'rounded'}
      width={width}
      height={height}
      aria-busy="true"
      aria-live="polite"
      aria-label={ariaLabel}
      {...rest}
    />
  );
}
