import { SearchResult } from '../../../../../types';

export const fetchSearchMovies = async (search: string): Promise<SearchResult[]> => {
  if (!search) {
    return [];
  }

  return fetch(`http://www.omdbapi.com/?s=${search}&i=tt3896198&apikey=73788182`)
    .then(res => res.json())
    .then((res: any) => {
      if (res.Error === 'Too many results.') {
        return [{ message: 'Type more' }];
      } else if (res.Error === 'Movie not found!') {
        return [{ message: 'Movie not found' }];
      } else if (res.Error) {
        return [{ message: 'Unknown Error from omdb' }];
      }

      return res.Search;
    })
    .catch(() => [{ message: 'Unknown Error from omdb' }]);
};
