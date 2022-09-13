import React from 'react';
import s from '../components/Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button onClick={props.onClose} className={s.btn}>X</button>
      <h4>{props.name}</h4>
      <div className={s.divMediun}>
        <div className={s.temp}>
          <p>Max</p>
          <p>{Math.round(props.max)}</p>
        </div>
        <div className={s.temp}>
          <p>Min</p>
          <p>{Math.round(props.min)}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img"></img>
      </div>
    </div>
  )
};