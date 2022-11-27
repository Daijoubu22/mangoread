import React from 'react';
import Header from 'components/Header/Header';
import MangaSearchPage from 'components/MangaSearch/MangaSearchPage';
import './App.less';
import { Route, Routes } from 'react-router-dom';
import MangaPage from 'components/MangaPage/MangaPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MangaReader from 'components/MangaReader/MangaReader';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MangaSearchPage />} />
        <Route path="/manga/:id" element={<MangaPage />} />
        <Route path="/read" element={<MangaReader />} />
      </Routes>
    </div>
  );
}

export default App;
