import React from 'react';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <span className={styles.main}>
      <LogoIcon width="20" />
      mangoread
    </span>
  );
}

export default Logo;
