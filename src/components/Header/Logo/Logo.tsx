import React from 'react';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link to="/">
      <span className={styles.main}>
        <LogoIcon width="20" />
        mangoread
      </span>
    </Link>
  );
}

export default Logo;
