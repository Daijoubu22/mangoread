import getStatistics, { GetStatisticsParams } from 'services/queries/statisticsQueries';
import { AppDispatch } from 'redux/store';
import { fetchingError, statisticsFetchingSuccess } from 'redux/slices/mangaSearchSlice';
import { getErrorMessage } from 'services/utils/stringUtils';

const fetchStatistics = (params: GetStatisticsParams) => async (dispatch: AppDispatch) => {
  try {
    const response = await getStatistics(params);
    dispatch(statisticsFetchingSuccess(response));
  } catch (error) {
    dispatch(fetchingError(getErrorMessage(error)));
  }
};

export default fetchStatistics;
