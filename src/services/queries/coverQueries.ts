import axios from 'axios';
import { API_URL } from 'services/constants/constants';
import Cover from 'services/models/Cover';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import { transformParamsForRequest } from 'services/utils/paramsUtils';

interface GetCoverListParams {
  limit?: number;
  offset?: number;
  manga?: string[];
  ids?: string[];
  order?: OrderWithDirection;
}

interface GetCoverListResponse {
  data: Cover[];
}

// eslint-disable-next-line import/prefer-default-export
export const getCoverList = async (params: GetCoverListParams): Promise<GetCoverListResponse> => {
  const manga = await axios.get<GetCoverListResponse>(
    `${API_URL}/cover`,
    { params: transformParamsForRequest(params) },
  );
  return manga.data;
};
