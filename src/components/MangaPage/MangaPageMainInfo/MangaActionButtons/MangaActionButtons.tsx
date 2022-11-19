import React from 'react';
import { Button, Space } from 'antd';
import styles from './MangaActionButtons.module.scss';

interface MangaActionButtonsProps {
  className?: string;
}

function MangaActionButtons({ className }: MangaActionButtonsProps) {
  return (
    <Space className={`${styles.main} ${className}`} direction="horizontal">
      <Button className={styles.readButton} size="large">Read!</Button>
      <Button size="large">Chapters</Button>
      <Button size="large">Follow</Button>
    </Space>
  );
}

MangaActionButtons.defaultProps = {
  className: undefined,
};

export default MangaActionButtons;
