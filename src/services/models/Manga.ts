import DataType from 'services/enums/DataType';
import Languages from 'services/enums/Languages';
import Cover from 'services/models/Cover';
import Author from 'services/models/Author';

export type MangaId = string;

export default interface Manga {
  attributes: {
    title: Record<Languages, string>;
    description: Record<Languages, string>;
    originalLanguage: Languages;
    publicationDemographic: string;
    state: string;
    status: string;
    year: number;
  }
  id: MangaId;
  relationships: Array<Cover | Author>;
  type: DataType,
}
