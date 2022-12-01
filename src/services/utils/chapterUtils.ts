import Chapter from 'services/models/Chapter';
import Manga from 'services/models/Manga';
import DataType from 'services/enums/DataType';
import ScanlationGroup from 'services/models/ScanlationGroup';
import { ChapterInfo, Volumes } from 'services/models/Volume';

export const getChaptersManga = (chapter: Chapter): Manga => (
  chapter.relationships.find((item) => item.type === DataType.MANGA) as Manga
);

export const getChaptersScanlationGroup = (chapter: Chapter): ScanlationGroup => (
  chapter.relationships.find((item) => item.type === DataType.SCANLATION_GROUP) as ScanlationGroup
);

export const getChapterFromVolumes = (volumes: Volumes, chapterNumber: number) => {
  let chapterInfo: ChapterInfo | undefined;
  Object.entries(volumes).every(([, volume]) => {
    chapterInfo = Object.entries(volume.chapters).find(([, chapter]) => (
      chapter.chapter === chapterNumber.toString()
    ))?.[1];
    return !chapterInfo;
  });
  return chapterInfo;
};

export const getNextChapterId = (currentChapter: Chapter, volumes: Volumes): string | undefined => (
  getChapterFromVolumes(volumes, Number(currentChapter.attributes.chapter) + 1)?.id
);

export const getPrevChapterId = (currentChapter: Chapter, volumes: Volumes): string | undefined => (
  getChapterFromVolumes(volumes, Number(currentChapter.attributes.chapter) - 1)?.id
);
