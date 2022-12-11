import React from 'react';
import LinkWithDescription from 'components/ui/LinkWithDescription/LinkWithDescription';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.main}>
      <div className={`${styles.container} container`}>
        <LinkWithDescription
          href="https://github.com/Daijoubu22"
          linkTitle="Daijoubu22"
          description="Made by "
        />
        <LinkWithDescription
          href="https://mangadex.org"
          linkTitle="MangaDex"
          description="API was provided by "
        />
      </div>
    </div>
  );
}

export default Footer;
