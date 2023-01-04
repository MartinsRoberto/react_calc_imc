import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

import { data } from './data/data'
import './App.css'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault()
    const h = Number(height)/100
    const w = Number(weight)
    
    const imcResult = (w/(h*h)).toFixed(1)
    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
    
  }

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div className="container">
      {!imc ? (<ImcCalc calcImc={calcImc}/>) : (<ImcTable imc={imc} data={data} info={info}  infoClass={infoClass} resetCalc={resetCalc}/>)}
      
    </div>
  )
}

export default App
