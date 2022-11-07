import React from 'react';
import Logo from 'components/Header/Logo/Logo';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.main}>
      <div className="container">
        <nav className={styles.navigation}>
          <Logo />
        </nav>
      </div>
    </header>
  );
}

export default Header;
