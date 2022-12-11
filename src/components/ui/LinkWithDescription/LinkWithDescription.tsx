import React from 'react';
import styles from './LinkWithDescription.module.scss';

interface LinkWithDescriptionProps {
  href: string,
  linkTitle: string,
  description: string,
  className?: string,
}

function LinkWithDescription({
  href,
  linkTitle,
  description,
  className,
}: LinkWithDescriptionProps) {
  return (
    <span className={`${styles.main} ${className}`}>
      <span>{description}</span>
      <a href={href} className={styles.link}>{linkTitle}</a>
    </span>
  );
}

LinkWithDescription.defaultProps = {
  className: undefined,
};

export default LinkWithDescription;
