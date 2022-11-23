import queryString from 'query-string';

const paramsSerializer = (object: Record<string, any>): string => (
  queryString.stringify(object, {
    arrayFormat: 'bracket',
  })
);

export default paramsSerializer;
