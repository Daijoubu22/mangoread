import React from 'react';
import searchManga, { SearchMangaParams } from 'services/queries/searchMangaQueries';
import Manga, { MangaId } from 'services/models/Manga';
import MangaView from 'components/Views/MangaView/MangaView';
import Order from 'services/enums/Order';
import DataType from 'services/enums/DataType';
import getStatistics from 'services/queries/statisticsQueries';
import Statistics from 'services/models/Statistics';

const PAGE_SIZE = 10;

function MangaSearch() {
  const [mangaList, setMangaList] = React.useState([] as Manga[]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [statistics, setStatistics] = React.useState({} as Record<MangaId, Statistics>);
  const params: SearchMangaParams = {
    order: {
      rating: Order.DESCENDING,
    },
    includes: [DataType.COVER_ART, DataType.AUTHOR],
    offset: pageNumber,
    limit: PAGE_SIZE,
  };

  React.useEffect(() => {
    setLoading(true);
    searchManga(params).then((response) => {
      setMangaList(response);
    });
  }, [pageNumber]);

  React.useEffect(() => {
    if (!mangaList.length) {
      return;
    }
    const mangaIds = mangaList.map((manga) => manga.id);
    getStatistics({ manga: mangaIds }).then((response) => {
      setStatistics(response);
    }).finally(() => setLoading(false));
  }, [mangaList]);

  return (
    <div className="container">
      <button type="button" onClick={() => setPageNumber(pageNumber + PAGE_SIZE)}>Next page</button>
      {loading
        ? <h2>loading...</h2>
        : (
          <ul>
            {mangaList.map((item) => (
              <MangaView manga={item} statistics={statistics[item.id]} key={item.id} />))}
          </ul>
        )}
    </div>
  );
}

export default MangaSearch;
