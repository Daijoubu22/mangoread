import React from 'react';
import { useParams } from 'react-router-dom';

type MangaPageParams = {
  id: string;
};

function MangaPage() {
  const { id } = useParams<MangaPageParams>();
  return (
    <div className="container">
      {id}
    </div>
  );
}

export default MangaPage;
