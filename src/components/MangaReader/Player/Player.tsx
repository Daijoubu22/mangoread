import React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { setPageNumber } from 'redux/slices/mangaReaderSlice';
import { useNavigate } from 'react-router-dom';
import { getChaptersManga, getNextChapterId, getPrevChapterId } from 'services/utils/chapterUtils';
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
    const prevChapterId = getPrevChapterId(currentChapter, volumes);
    if (!prevChapterId) {
      navigate(`/manga/${getChaptersManga(currentChapter).id}`);
      return;
    }
    navigate(`/read/${prevChapterId}`);
  };

  const onNext = (): void => {
    if (!currentChapter || !volumes) {
      return;
    }
    if (pageNumber < currentChapter.attributes.pages) {
      dispatch(setPageNumber(pageNumber + 1));
      return;
    }
    const nextChapterId = getNextChapterId(currentChapter, volumes);
    if (!nextChapterId) {
      navigate(`/manga/${getChaptersManga(currentChapter).id}`);
      return;
    }
    navigate(`/read/${nextChapterId}`);
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
