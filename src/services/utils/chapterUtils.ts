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

const getValueOfMinKey = (obj: Record<string, any>): any => {
  let res: any;
  let min = 1000000;
  Object.entries(obj).forEach(([key, value]) => {
    const keyNum = Number(key);
    if (keyNum < min) {
      min = keyNum;
      res = value;
    }
  });
  return res;
};

const getValueOfMaxKey = (obj: Record<string, any>): any => {
  let res: any;
  let max = 0;
  Object.entries(obj).forEach(([key, value]) => {
    const keyNum = Number(key);
    if (keyNum > max) {
      max = keyNum;
      res = value;
    }
  });
  return res;
};

export const getChapterFromVolumes = (
  volumes: Volumes,
  chapterNumber: number,
  nextOrPrev: 'next' | 'prev',
): ChapterInfo | undefined => {
  let currentChapter: ChapterInfo | undefined;
  let volumeKey: string = '';
  const volumeIndices = Object.keys(volumes);
  Object.entries(volumes).every(([key, volume]) => {
    currentChapter = volume.chapters[chapterNumber];
    volumeKey = key;
    return !currentChapter;
  });
  const chapterIndices = Object.keys(volumes[volumeKey].chapters).sort((a, b) => (
    Number(a) - Number(b)
  ));
  const chapterIndex = chapterIndices.indexOf(chapterNumber.toString());
  if (nextOrPrev === 'next') {
    const result = volumes[volumeKey].chapters[chapterIndices[chapterIndex + 1]];
    if (!result) {
      const nextVolume = volumes[volumeIndices[volumeIndices.indexOf(volumeKey) + 1]];
      return nextVolume && getValueOfMinKey(nextVolume.chapters);
    }
    return result;
  }
  const result = volumes[volumeKey].chapters[chapterIndices[chapterIndex - 1]];
  if (!result) {
    const prevVolume = volumes[volumeIndices[volumeIndices.indexOf(volumeKey) - 1]];
    return prevVolume && getValueOfMaxKey(prevVolume.chapters);
  }
  return result;
};

export const getNextChapterId = (currentChapter: Chapter, volumes: Volumes): string | undefined => (
  getChapterFromVolumes(volumes, Number(currentChapter.attributes.chapter), 'next')?.id
);

export const getPrevChapterId = (currentChapter: Chapter, volumes: Volumes): string | undefined => (
  getChapterFromVolumes(volumes, Number(currentChapter.attributes.chapter), 'prev')?.id
);
