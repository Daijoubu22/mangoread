import Languages from 'services/enums/Languages';
import Relationship from 'services/models/Relationship';

export default interface Author extends Relationship {
  attributes?: {
    name: string;
    biography: Record<Languages, string>;
  }
}
