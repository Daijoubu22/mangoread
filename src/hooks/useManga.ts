import { getMangaList, SearchMangaParams } from 'services/queries/mangaQueries';
import { useEffect, useState } from 'react';
import Manga from 'services/models/Manga';

const useManga = (params: SearchMangaParams) => {
  const [mangaList, setMangaList] = useState([] as Manga[]);
  const [loading, setLoading] = useState(false);
  const [totalMangaCount, setTotalMangaCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getMangaList(params).then((response) => {
      setTotalMangaCount(response.total);
      setMangaList(response.data);
    }).finally(() => setLoading(false));
  }, [params]);

  return {
    mangaList,
    loading,
    totalMangaCount,
  };
};

export default useManga;
