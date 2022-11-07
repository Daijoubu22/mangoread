import React from 'react';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <p className={styles.main}>
      <LogoIcon width="20" />
      mangoread
    </p>
  );
}

export default Logo;
