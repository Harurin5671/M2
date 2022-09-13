import React from 'react';
import './Timer.css';


const Timer = () => {

  const [segundo, setSegundo] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState("Contador");

  const toggle = function(){
    setActivo(!activo);
  }
  const reset = function(){
    setSegundo(0);
    setActivo(false);
  }
  let changeTipo = function(){
    tipo === "Contador" ? setTipo("Cuenta Regresiva"): setTipo("Contador");
  }
  const myRef = React.useRef(null);
  const agregaSegundo = function(){
    let value = myRef.current.value;
    setSegundo(value);
  }
  React.useEffect(() => {
    let intervalo = null;
    if(activo && tipo === "Contador"){
      intervalo = setInterval(()=>{
        setSegundo(prevState => prevState + 1);
      }, 1000);
    }
    if(activo && tipo === "Cuenta Regresiva"){
      intervalo = setInterval(()=>{
        setSegundo(prevState => prevState - 1);
      }, 1000);
    }
    if(!activo && segundo === 0 && tipo === "Contador"){
      clearInterval(intervalo);
    }
    if(segundo === 0 && tipo === "Cuentta Regresiva"){
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [segundo, activo, tipo])

  return (
    <div className="app">
    <div className="time">
      {segundo} s
    </div>
    <div className="row">
      <button className="button-primary" onClick={toggle}>
        {activo ? "Pausa" :"Inicio"}
      </button>
      <button className="button-secondary" onClick={reset}>
        Reset
      </button>
    </div>
    <button className="button" onClick={changeTipo}>
        {tipo}
    </button>
    {
      tipo === "Cuenta Regresiva" && <input 
        onChange={agregaSegundo}
        type="number" 
        placeholder="Ingresa Segundos" 
        autoComplete="off"
        ref={myRef}
      />
    }
  </div>
  );
};

export default Timer;
