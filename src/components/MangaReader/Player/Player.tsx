import React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { setPageNumber } from 'redux/slices/mangaReaderSlice';
import { useNavigate } from 'react-router-dom';
import { getNextChapterId, getPrevChapterId } from 'services/utils/chapterUtils';
import styles from './Player.module.scss';

function Player() {
  const {
    pageNumber,
    currentChapter,
    volumes,
  } = useAppSelector((state) => state.mangaReaderReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPrev = (): void => {
    if (!currentChapter || !volumes) {
      return;
    }
    if (pageNumber > 1) {
      dispatch(setPageNumber(pageNumber - 1));
      return;
    }
    navigate(`/read/${getPrevChapterId(currentChapter, volumes)}`);
  };

  const onNext = (): void => {
    if (!currentChapter || !volumes) {
      return;
    }
    if (pageNumber < currentChapter.attributes.pages) {
      dispatch(setPageNumber(pageNumber + 1));
      return;
    }
    navigate(`/read/${getNextChapterId(currentChapter, volumes)}`);
  };

  if (!currentChapter || !volumes) {
    return null;
  }

  return (
    <div className={styles.main}>
      <button
        onClick={onPrev}
        type="button"
        aria-label="prev"
        className={styles.controlButton}
      />
      <button
        onClick={onNext}
        type="button"
        aria-label="prev"
        className={styles.controlButton}
      />
    </div>
  );
}

export default Player;
