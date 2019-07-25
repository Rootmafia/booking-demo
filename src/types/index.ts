export interface SearchError {
  message: string;
}

export interface FilmType {
  imdbID: string;
  Title: string;
  City: string;
  Type: string;
  Poster?: string;
}

export type SearchResult = FilmType | SearchError;
