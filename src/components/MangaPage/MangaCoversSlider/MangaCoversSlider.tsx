import React from 'react';
import Slider from 'react-slick';
import Cover from 'services/models/Cover';
import { getMangaCoverUrl } from 'services/utils/utils';
import Manga from 'services/models/Manga';
import styles from './MangaCoversSlider.module.scss';

interface MangaCoversSliderProps {
  manga: Manga;
  coverList: Cover[];
  className?: string;
}

function MangaCoversSlider({ className, coverList, manga }: MangaCoversSliderProps) {
  const coverImgs = coverList.map((cover) => (
    <div className={styles.coverWrapper}>
      <img src={getMangaCoverUrl(manga, 256, cover)} alt="cover" />
    </div>
  ));

  return (
    <div className={className}>
      <Slider
        className={styles.slider}
        infinite={false}
        slidesToShow={5}
        swipeToSlide
        lazyLoad="anticipated"
      >
        {coverImgs}
      </Slider>
    </div>
  );
}

MangaCoversSlider.defaultProps = {
  className: undefined,
};

export default MangaCoversSlider;
