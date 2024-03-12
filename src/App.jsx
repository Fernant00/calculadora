import { useState } from 'react'

import './App.css'


function App() {
  const [numerouno,setnumerouno]= useState(0);
  const [numerodos,setnumerodos]= useState(0);
  const [resultado,setresultado]= useState(0);
  const handleChangeuno = (event)=>{
    setnumerouno(event.target.value);
  }
  const handleChangedos = (event)=>{
    setnumerodos(event.target.value);
  }
  const handlesumar = (event)=>{
    setresultado(parseFloat(numerouno) + parseFloat(numerodos));
  };
  const handleresta = (event)=>{
    setresultado(parseFloat(numerouno) - parseFloat(numerodos));
  };
  const handlemulti = (event)=>{
    setresultado(parseFloat(numerouno) * parseFloat(numerodos));
  };
  const handlediv = (event)=>{
    setresultado(parseFloat(numerouno) / parseFloat(numerodos));
  };
  return (
   <>
   
   <h1>Calculadora</h1>
   <input type="text" placeholder='numero1' value={numerouno} onChange={handleChangeuno}/>
   <input type="text" placeholder='numero2' value={numerodos}onChange={handleChangedos}/>
   <hr />
   <button onClick={handlesumar}>sumar</button>
   <button onClick={handleresta}>restar</button>
   <button onClick={handlemulti}>multiplicar</button>
   <button onClick={handlediv}>dividir</button>
   <hr />
   <p>Resultado: {resultado }</p>
   </>

  );
}

export default App
