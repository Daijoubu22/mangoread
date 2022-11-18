import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getManga, GetMangaParams } from 'services/queries/mangaQueries';
import Manga from 'services/models/Manga';
import { getMangaCoverUrl } from 'services/utils/utils';
import DataType from 'services/enums/DataType';
import BlurredBg from 'components/ui/BlurredBg/BlurredBg';
import MangaPageMainInfo from 'components/MangaPage/MangaPageMainInfo/MangaPageMainInfo';
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
  const getMangaParams = {
    includes: [DataType.COVER_ART],
  } as GetMangaParams;

  useEffect(() => {
    getManga(mangaId, getMangaParams).then((response) => {
      setManga(response.data);
    });
  }, []);

  return manga ? (
    <>
      <BlurredBg
        imageUrl={getMangaCoverUrl(manga, 256)}
        blur={20}
        darken={0.3}
        style={{
          height: '800px',
          position: 'fixed',
        }}
      />
      <div className={styles.main}>
        <div className="container">
          <MangaPageMainInfo manga={manga} />
        </div>
      </div>
      <div className={styles.additional}>
        <div className="container">
          1
        </div>
      </div>
    </>
  ) : null;
}

export default MangaPage;
