import { useState } from 'react'

import Buttons from './Buttons'

import './ImcCalc.css'

function ImcCalc({ calcImc }) {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };


  return (
    <div className="calc-container">
      <h2>Calculadora de IMC</h2>
      <form className="imc-form">
        <div className="form-control">
          <label>
            <span>Peso:</span>
            <input type="number" name='weight' id='weight' placeholder='70kg' onChange={(e) => setWeight(e.target.value)} value={weight} />
          </label>
          <label>
            <span>Altura:</span>
            <input type="number" name='height' id='height' placeholder='175cm' onChange={(e) => setHeight(e.target.value)} value={height} />
          </label>
        </div>
        <div className="actions">
          <Buttons nameclass='clear' type='submit' text='Limpar' action={clearForm} />
          <Buttons nameclass='calc' type='submit' text='Calcular' action={(e) => calcImc(e, height, weight)} />
        </div>
      </form>
    </div>
  )
}

export default ImcCalc