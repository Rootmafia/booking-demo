import React, { useState } from 'react';
import memoize from 'lodash/memoize';
import noop from 'lodash/noop';
import Autosuggest from 'react-autosuggest';
import SearchElement from './components/SearchElement/SearchElement';
import * as service from '../../service';
import * as helpers from './helpers';
import './index.css';
import { SearchResult } from '../../../../../../types';

// Cashing results with lodash.memoize
const getFilms = memoize((search: any) => service.fetchSearchMovies(search));

interface SearchBarProps {
  toggleFilm(val: SearchResult): void;
  films: SearchResult[];
}

export default function SearchBar({ toggleFilm, films }: SearchBarProps) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = (val: any) => {
    if (val.reason === 'input-changed') {
      getFilms(val.value).then((sug: any) => setSuggestions(sug));
    }
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions || []}
        onSuggestionSelected={(_, { suggestion }) => {
          toggleFilm(suggestion);
          setTimeout(() => setValue(''), 0);
        }}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={noop}
        getSuggestionValue={helpers.getSuggestionValue}
        renderSuggestion={(val: SearchResult) => <SearchElement val={val} films={films} />}
        shouldRenderSuggestions={() => true}
        focusInputOnSuggestionClick={true}
        inputProps={{
          placeholder: 'Start typing to search film',
          value,
          onChange: (_, { newValue }) => setValue(newValue),
        }}
      />
    </div>
  );
}
