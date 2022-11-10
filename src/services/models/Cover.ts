import Relationship from 'services/models/Relationship';

export default interface Cover extends Relationship {
  attributes: {
    fileName: string;
  }
}
