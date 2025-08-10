'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from './Skeleton';

type Ratio = `${number}/${number}` | number;

export type ImageWithSkeletonProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'onLoad' | 'onError'
> & {
  ratio?: Ratio;
  rounded?: boolean;
  onLoadComplete?: () => void;
};

export default function ImageWithSkeleton({
  alt = '',
  src,
  ratio = '1/1',
  rounded = true,
  onLoadComplete,
  className,
  style,
  ...imgProps
}: ImageWithSkeletonProps) {
  const [loading, setLoading] = React.useState(true);
  const [failed, setFailed] = React.useState(false);

  const handleLoad = React.useCallback(() => {
    setLoading(false);
    onLoadComplete?.();
  }, [onLoadComplete]);

  const handleError = React.useCallback(() => {
    setFailed(true);
    setLoading(false);
  }, []);

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: typeof ratio === 'number' ? String(ratio) : ratio,
        borderRadius: rounded ? '999px' : 1,
        overflow: 'hidden',
        ...style,
      }}
    >
      {loading && !failed && (
        <Skeleton
          aria-label="Carregando imagem"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 'inherit' }}
        />
      )}

      {!failed && (
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <img
            {...imgProps}
            alt={alt}
            src={typeof src === 'string' ? src : undefined}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: loading ? 0 : 1,
              transition: 'opacity .3s ease',
            }}
          />
        </Box>
      )}

      {failed && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            color: 'text.secondary',
            p: 1,
          }}
        >
          <Typography variant="body2">Imagem indisponível</Typography>
        </Box>
      )}
    </Box>
  );
}