import React, { useState } from "react";

export default function App() {

  const [number, setNumber] = useState()
  const [results, setResults] = useState()


  function calculaBinario(e) {
    e.preventDefault()
    var decimal = 0

    if (number.length > 8) {
      return alert("O número deve conter até 8 dígitos.")
    }

    

    for (let index = number.length - 1; index >= 0; index--) {
      if (parseInt(number[index]) < 0 || parseInt(number[index]) > 1) {
        return alert("Número incorreto! Veirifique e tente novamente")
      }

      decimal += parseInt(number[index]) * Math.pow(2, number.length - 1 - index);
    }

    setResults(decimal)
    setNumber('')
  }

  return (

    <form action="">

      <h1>Converter binário para decimal</h1>

      <input
        value={number}
        type="text"
        placeholder="Número para ser convertido"
        onChange={(e) => { setNumber(e.target.value) }}
      />
      <br />
      <button type="button" onClick={calculaBinario}>Converter</button>

      <br />

      <label htmlFor="resultado">Resultado: {results}  </label>

    </form>

  );
}
