import React from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import { SearchResult } from '../../../../types';

interface SearchBlockProps {
  toggleFilm(val: SearchResult): void;
  addRandomFilm(): void;
  films: SearchResult[];
}

export default function SearchBlock({ toggleFilm, films, addRandomFilm }: SearchBlockProps) {
  return (
    <div className="search_block">
      <div className="search_block_title">Create Film Playlist</div>
      <SearchBar toggleFilm={toggleFilm} films={films} />
      <SearchButton addRandomFilm={addRandomFilm} />
    </div>
  );
}
