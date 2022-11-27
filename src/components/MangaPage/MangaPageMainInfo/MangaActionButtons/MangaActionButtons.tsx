import React from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import styles from './MangaActionButtons.module.scss';

interface MangaActionButtonsProps {
  className?: string;
}

function MangaActionButtons({ className }: MangaActionButtonsProps) {
  return (
    <Space className={`${styles.main} ${className}`} direction="horizontal">
      <Link to="/read">
        <Button className={`${styles.readButton} primaryButton`} size="large">Read!</Button>
      </Link>
      <Button size="large">Chapters</Button>
      <Button size="large">Follow</Button>
    </Space>
  );
}

MangaActionButtons.defaultProps = {
  className: undefined,
};

export default MangaActionButtons;
