import DataType from 'services/enums/DataType';
import Languages from 'services/enums/Languages';

interface Relationship {
  id: string;
  type: DataType;
  attributes?: {
    fileName: string;
  }
}

export default interface Manga {
  attributes: {
    title: Record<Languages, string>;
    description: Record<Languages, string>;
  }
  id: string;
  relationships: Relationship[];
  type: DataType,
}
