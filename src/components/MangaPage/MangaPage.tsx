import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMangaCoverUrl } from 'services/utils/utils';
import BlurredBg from 'components/ui/BlurredBg/BlurredBg';
import MangaPageMainInfo from 'components/MangaPage/MangaPageMainInfo/MangaPageMainInfo';
import MangaCoversSlider from 'components/MangaPage/MangaCoversSlider/MangaCoversSlider';
import Header from 'components/Header/Header';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import Errors from 'services/enums/Errors';
import fetchAll from 'redux/async/mangaPage/fetchAll';
import Loader from 'components/ui/Loader/Loader';
import styles from './MangaPage.module.scss';

type MangaPageParams = {
  id: string;
};

function MangaPage() {
  const {
    isLoading,
    manga,
    statistics,
    coverList,
  } = useAppSelector((state) => state.mangaPageReducer);
  const dispatch = useAppDispatch();
  const { id: mangaId } = useParams<MangaPageParams>();
  if (!mangaId) {
    throw new Error(Errors.MANGA_NOT_FOUND);
  }

  useEffect(() => {
    dispatch(fetchAll(mangaId));
  }, []);

  return (
    <>
      <Loader isVisible={isLoading} />
      <Header />
      {manga && (
        <>
          <BlurredBg
            imageUrl={getMangaCoverUrl(manga, 256)}
            blur={20}
            brightness={0.7}
            className={styles.bg}
          />
          <div className={styles.main}>
            <div className="container">
              <MangaPageMainInfo manga={manga} statistics={statistics} />
            </div>
          </div>
          <div className={styles.additional}>
            <div className="container">
              {coverList?.length && <MangaCoversSlider manga={manga} coverList={coverList} />}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MangaPage;
