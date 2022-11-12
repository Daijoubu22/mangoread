import React from 'react';
import Header from 'components/Header/Header';
import MangaSearchPage from 'components/MangaSearch/MangaSearchPage';
import './App.less';
import { Route, Routes } from 'react-router-dom';
import MangaPage from 'components/MangaPage/MangaPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MangaSearchPage />} />
        <Route path="/manga/:id" element={<MangaPage />} />
      </Routes>
    </div>
  );
}

export default App;
