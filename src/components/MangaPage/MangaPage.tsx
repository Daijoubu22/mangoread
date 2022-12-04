import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getManga, GetMangaParams } from 'services/queries/mangaQueries';
import Manga from 'services/models/Manga';
import { getMangaCoverUrl } from 'services/utils/utils';
import DataType from 'services/enums/DataType';
import BlurredBg from 'components/ui/BlurredBg/BlurredBg';
import MangaPageMainInfo from 'components/MangaPage/MangaPageMainInfo/MangaPageMainInfo';
import getStatistics from 'services/queries/statisticsQueries';
import Statistics from 'services/models/Statistics';
import MangaCoversSlider from 'components/MangaPage/MangaCoversSlider/MangaCoversSlider';
import { getCoverList } from 'services/queries/coverQueries';
import Cover from 'services/models/Cover';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import Header from 'components/Header/Header';
import { getChapterList } from 'services/queries/chapterQueries';
import Languages from 'services/enums/Languages';
import useAppDispatch from 'hooks/useAppDispatch';
import { setChapterToRead } from 'redux/slices/mangaPageSlice';
import SelectGroupModal from 'components/MangaPage/SelectGroupModal/SelectGroupModal';
import useAppSelector from 'hooks/useAppSelector';
import Errors from 'services/enums/Errors';
import styles from './MangaPage.module.scss';

type MangaPageParams = {
  id: string;
};

function MangaPage() {
  const { id: mangaId } = useParams<MangaPageParams>();
  if (!mangaId) {
    throw new Error(Errors.MANGA_NOT_FOUND);
  }
  const { isModalOpen } = useAppSelector((state) => state.mangaPageReducer);
  const dispatch = useAppDispatch();
  const [manga, setManga] = useState<Manga>();
  const [statistics, setStatistics] = useState<Statistics>();
  const [coverList, setCoverList] = useState<Cover[]>();
  const getMangaParams = {
    includes: [DataType.COVER_ART, DataType.AUTHOR],
  } as GetMangaParams;

  useEffect(() => {
    const getCoverListParams = {
      manga: [mangaId],
      order: OrderWithDirection.VOLUME_ASCENDING,
      limit: 100,
    };
    getManga(mangaId, getMangaParams).then((response) => {
      setManga(response.data);
    });
    getStatistics({ manga: [mangaId] }).then((response) => {
      setStatistics(response[mangaId]);
    });
    getCoverList(getCoverListParams).then((response) => {
      setCoverList(response.data);
    });
    getChapterList(mangaId, {
      translatedLanguage: [Languages.EN],
      includeExternalUrl: 0,
      order: OrderWithDirection.CHAPTER_ASCENDING,
    }).then((response) => {
      dispatch(setChapterToRead(response.data[0]));
    });
  }, []);

  return manga ? (
    <>
      <Header />
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
      <SelectGroupModal isOpen={isModalOpen} />
    </>
  ) : null;
}

export default MangaPage;
