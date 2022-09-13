import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div>
        <p>Max</p>
        <p>{Math.round(props.max)}</p>
        <p>Min</p>
        <p>{Math.round(props.min)}</p>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img"></img>
      </div>
    </div>
  )
};