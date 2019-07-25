import React from 'react';
import cn from 'classnames';
import './index.css';

export default function SearchElement({ val, films }: any) {
  if (val.message) {
    return <div className="search-element--empty">{val.message}</div>;
  }

  const isSelected = films.some((e: any) => e.imdbID === val.imdbID);
  const hasPoster = val.Poster && val.Poster !== 'N/A';
  return (
    <div className={cn('search-element', { selected: isSelected })}>
      <div className="search-image" style={hasPoster ? { backgroundImage: `url(${val.Poster})` } : undefined} />
      <div className="search-info-block">
        <div>{val.Title}</div>
        <div>#{val.imdbID}</div>
      </div>
    </div>
  );
}
