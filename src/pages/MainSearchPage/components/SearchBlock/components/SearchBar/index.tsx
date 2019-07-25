import React, { useState } from 'react';
import memoize from 'lodash/memoize';
import Autosuggest from 'react-autosuggest';
import SearchElement from './components/SearchElement/SearchElement';
import * as service from '../../service';
import * as helpers from './helpers';
import './index.css';

// Cashing results with lodash.memoize
const getFilms = memoize((search: any) => service.fetchSearchMovies(search));

export default function SearchBar({ toggleFilm, films }: any) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = (val: any) => {
    if (val.reason === 'input-changed') {
      getFilms(val.value).then((sug: any) => setSuggestions(sug));
    }
  };
  const onSuggestionsClearRequested = () => {};
  const renderSearchElement = (val: any) => <SearchElement val={val} films={films} />;

  return (
    <div>
      <Autosuggest
        suggestions={suggestions || []}
        onSuggestionSelected={(_, { suggestion }) => {
          toggleFilm(suggestion);
          setTimeout(() => setValue(''), 0);
        }}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={helpers.getSuggestionValue}
        renderSuggestion={renderSearchElement}
        shouldRenderSuggestions={() => true}
        focusInputOnSuggestionClick={true}
        inputProps={{
          placeholder: 'Start typing to search film',
          value,
          onChange: (_, { newValue }) => {
            setValue(newValue);
          },
        }}
      />
    </div>
  );
}
