import React from 'react';
import searchManga from 'services/queries/searchMangaQueries';
import Manga from 'services/models/Manga';
import MangaView from 'components/Views/MangaView/MangaView';

function MangaSearch() {
  const [mangaList, setMangaList] = React.useState([] as Manga[]);

  React.useEffect(() => {
    searchManga().then((response) => {
      setMangaList(response);
    });
  }, []);

  return (
    <div className="container">
      <ul>
        {mangaList.map((item) => <MangaView manga={item} key={item.id} />)}
      </ul>
    </div>
  );
}

export default MangaSearch;
