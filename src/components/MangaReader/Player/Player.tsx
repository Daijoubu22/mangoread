import React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { setPageNumber } from 'redux/slices/mangaReaderSlice';
import styles from './Player.module.scss';

function Player() {
  const { pageNumber } = useAppSelector((state) => state.mangaReaderReducer);
  const dispatch = useAppDispatch();

  const onPrev = (): void => {
    dispatch(setPageNumber(pageNumber - 1));
  };

  const onNext = (): void => {
    dispatch(setPageNumber(pageNumber + 1));
  };

  return (
    <div className={styles.main}>
      <button
        onClick={onPrev}
        type="button"
        aria-label="prev"
      />
      <button
        onClick={onNext}
        type="button"
        aria-label="prev"
      />
    </div>
  );
}

export default Player;
