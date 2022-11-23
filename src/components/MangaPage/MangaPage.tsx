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
import Order from 'services/enums/Order';
import OrderCategory from 'services/enums/OrderCategory';
import styles from './MangaPage.module.scss';

type MangaPageParams = {
  id: string;
};

function MangaPage() {
  const { id: mangaId } = useParams<MangaPageParams>();
  if (!mangaId) {
    return <h1>Manga is not found(</h1>;
  }
  const [manga, setManga] = useState<Manga>();
  const [statistics, setStatistics] = useState<Statistics>();
  const [coverList, setCoverList] = useState<Cover[]>();
  const getMangaParams = {
    includes: [DataType.COVER_ART, DataType.AUTHOR],
  } as GetMangaParams;

  useEffect(() => {
    const getCoverListParams = {
      manga: [mangaId],
      [OrderCategory.VOLUME]: Order.ASCENDING,
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
  }, []);

  return manga ? (
    <>
      <BlurredBg
        imageUrl={getMangaCoverUrl(manga, 256)}
        blur={20}
        brightness={0.7}
        style={{
          width: '100%',
          height: '800px',
          position: 'fixed',
        }}
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
  ) : null;
}

export default MangaPage;
