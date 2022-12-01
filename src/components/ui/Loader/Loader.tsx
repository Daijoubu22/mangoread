import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { useTransition, animated } from 'react-spring';
import styles from './Loader.module.scss';

interface LoaderProps {
  isVisible: boolean;
  className?: string;
}

function Loader({ isVisible, className }: LoaderProps) {
  const transition = useTransition(isVisible, {
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  const loaderCircle = (
    <MutatingDots
      height="100"
      width="100"
      color="#FFE600"
      secondaryColor="#FFE600"
      radius={12}
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );

  return transition((style, item) => (
    item
      ? <animated.div style={style} className={`${styles.main} ${className}`}>{loaderCircle}</animated.div>
      : null
  ));
}
// <div className={`${styles.main} ${className}`}>{loaderCircle}</div>
Loader.defaultProps = {
  className: undefined,
};

export default Loader;
