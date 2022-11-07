import DataType from 'services/enums/DataType';

interface Relationship {
  id: string;
  type: DataType;
  attributes?: {
    fileName: string;
  }
}

export default interface Manga {
  id: string;
  relationships: Relationship[];
  type: DataType,
}
