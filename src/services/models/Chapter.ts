import Manga from 'services/models/Manga';
import DataType from 'services/enums/DataType';
import ScanlationGroup from 'services/models/ScanlationGroup';
import Languages from 'services/enums/Languages';

export default interface Chapter {
  id: string,
  relationships: Array<Manga | ScanlationGroup>,
  type: DataType.CHAPTER,
  attributes: {
    chapter: string,
    pages: number,
    title: string,
    translatedLanguage: Languages,
    volume: string,
  },
}
