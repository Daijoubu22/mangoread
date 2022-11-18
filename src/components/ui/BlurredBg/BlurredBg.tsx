import React from 'react';
import styles from './BlurredBg.module.scss';

interface BlurredBgProps {
  imageUrl: string;
  blur?: number;
  brightness?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function BlurredBg({
  imageUrl,
  blur,
  brightness,
  style,
  children,
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
    <div
      className={styles.main}
      style={style}
    >
      {bg}
      {children}
    </div>
  );
}

BlurredBg.defaultProps = {
  blur: undefined,
  brightness: undefined,
  style: {},
  children: undefined,
};

export default BlurredBg;
