import { AppDispatch } from 'redux/store';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import DataType from 'services/enums/DataType';
import { getManga, GetMangaParams } from 'services/queries/mangaQueries';
import {
  setChapterToRead,
  setCoverList,
  setIsLoading,
  setManga,
  setStatistics,
} from 'redux/slices/mangaPageSlice';
import getStatistics from 'services/queries/statisticsQueries';
import { getCoverList } from 'services/queries/coverQueries';
import Languages from 'services/enums/Languages';
import { getChapterList } from 'services/queries/chapterQueries';

const fetchAll = (mangaId: string) => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true));
  const getMangaParams = {
    includes: [DataType.COVER_ART, DataType.AUTHOR],
  } as GetMangaParams;
  const getCoverListParams = {
    manga: [mangaId],
    order: OrderWithDirection.VOLUME_ASCENDING,
    limit: 100,
  };
  const getChapterListParams = {
    translatedLanguage: [Languages.EN],
    includeExternalUrl: 0,
    order: OrderWithDirection.CHAPTER_ASCENDING,
  };
  const { data: manga } = await getManga(mangaId, getMangaParams);
  dispatch(setManga(manga));
  const { data: coverList } = await getCoverList(getCoverListParams);
  dispatch(setCoverList(coverList));
  dispatch(setIsLoading(false));
  const statistics = (await getStatistics({ manga: [mangaId] }))[mangaId];
  dispatch(setStatistics(statistics));
  const { data: chapterList } = await getChapterList(mangaId, getChapterListParams);
  dispatch(setChapterToRead(chapterList[0]));
};

export default fetchAll;
