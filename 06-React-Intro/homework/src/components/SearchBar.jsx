import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder='city...'></input>
      <button onClick={() => props.onSearch("Buscando Ciudad")}>Search</button>
    </div>
  )
};