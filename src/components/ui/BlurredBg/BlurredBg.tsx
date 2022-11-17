import React from 'react';
import styles from './BlurredBg.module.scss';

interface BlurredBgProps {
  imageUrl: string;
  blur?: number;
  darken?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function BlurredBg({
  imageUrl,
  blur,
  darken,
  style,
  children,
}: BlurredBgProps) {
  const backdrop = (blur || darken) && (
    <div
      className={styles.backdrop}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${darken})`,
        backdropFilter: `blur(${blur}px)`,
      }}
    />
  );

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})`, ...style }}
    >
      {backdrop}
      {children}
    </div>
  );
}

BlurredBg.defaultProps = {
  blur: undefined,
  darken: undefined,
  style: {},
  children: undefined,
};

export default BlurredBg;
