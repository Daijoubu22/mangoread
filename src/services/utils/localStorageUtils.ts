import debounce from 'lodash.debounce';
import Chapter from 'services/models/Chapter';
import { getChaptersManga } from 'services/utils/chapterUtils';
import Manga from 'services/models/Manga';
import ReadingProgress from 'services/models/ReadingProgress';

export const saveReadingProgressToLC = debounce((chapter: Chapter, page: number) => {
  const chapterWithPage: ReadingProgress = {
    chapter: chapter.id,
    page,
  };
  localStorage.setItem(
    getChaptersManga(chapter).id,
    JSON.stringify(chapterWithPage),
  );
}, 300);

export const getReadingProgressFromLC = (manga: Manga): ReadingProgress | undefined => {
  const readingProgress = localStorage.getItem(manga.id);
  return readingProgress ? JSON.parse(readingProgress) : undefined;
};
