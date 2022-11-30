import React from 'react';
import styles from './BlurredBg.module.scss';

interface BlurredBgProps {
  imageUrl: string;
  blur?: number;
  brightness?: number;
  children?: React.ReactNode;
  className?: string;
}

function BlurredBg({
  imageUrl,
  blur,
  brightness,
  children,
  className,
}: BlurredBgProps) {
  const blurFilter = blur ? `blur(${blur}px)` : '';
  const brightnessFilter = brightness ? `brightness(${brightness})` : '';
  const bg = (
    <div
      className={styles.bg}
      style={{
        backgroundImage: `url(${imageUrl})`,
        filter: `${blurFilter} ${brightnessFilter}`,
      }}
    />
  );

  return (
    <div className={`${styles.main} ${className}`}>
      {bg}
      {children}
    </div>
  );
}

BlurredBg.defaultProps = {
  blur: undefined,
  brightness: undefined,
  children: undefined,
  className: undefined,
};

export default BlurredBg;
