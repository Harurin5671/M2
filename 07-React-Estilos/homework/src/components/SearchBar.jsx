import React from 'react';
import s from '../components/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.search}>
      <input type="text" placeholder='Ciudad...'></input>
      <button onClick={() => props.onSearch("Buscando Ciudad")} className={s.btn}>Agregar</button>
    </div>
  )
};