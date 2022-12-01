import { AppDispatch } from 'redux/store';
import { getChapter, getVolumes } from 'services/queries/chapterQueries';
import { fetchingChapterSuccess, setVolumes } from 'redux/slices/mangaReaderSlice';
import { getChaptersManga, getChaptersScanlationGroup } from 'services/utils/chapterUtils';

const fetchChapter = (chapterId: string) => async (dispatch: AppDispatch) => {
  const chapter = await getChapter(chapterId);
  dispatch(fetchingChapterSuccess(chapter));
  const mangaId = getChaptersManga(chapter).id;
  const scanlationGroupId = getChaptersScanlationGroup(chapter).id;
  const volumes = await getVolumes(mangaId, { groups: [scanlationGroupId] });
  dispatch(setVolumes(volumes));
};

export default fetchChapter;
