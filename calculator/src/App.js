import React, { useState } from 'react';

import { Container, Header, Content, Calculadora, Resultado, } from './styles/calculator'
import GlobalStyle from './styles/global'



function App() {
  const [input, setInput] = useState([])
  const [oldInput, setOldInput] = useState([])

  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [result, setResult] = useState()
  const [operator, setOperator] = useState()
  const [pastResult, setPastResult] = useState([])

  function soma() {
    const value = input.reduce((total, element) => total + element)

    setValue1(value)
    setOldInput([...input, " + "])
    setInput([])
    setOperator(1)


  }

  function subtracao() {
    const value = input.reduce((total, element) => total + element)

    setValue1(value)
    setOldInput([...input, " - "])
    setInput([])
    setOperator(2)
  }

  function multiplicacao() {
    const value = input.reduce((total, element) => total + element)

    setValue1(value)
    setOldInput([...input, " x "])
    setInput([])
    setOperator(3)
  }


  function divisao() {
    const value = input.reduce((total, element) => total + element)

    setValue1(value)
    setOldInput([...input, " / "])
    setInput([])
    setOperator(4)
  }






  function Results() {

    const value = input.reduce((total, element) => total + element)
    setValue2(value)


    switch (operator) {
      case 1:
        setResult(parseInt(value1) + parseInt(value2))
        setPastResult([...pastResult, oldInput, input, " + "])
        break;

      case 2:
        setResult(parseInt(value1) - parseInt(value2))
        break;

      case 3:
        setResult(parseInt(value1) * parseInt(value2))
        break;

      default:
        setResult(parseInt(value1) / parseInt(value2))
        break;
    }

   
  }



  return (
    <>
      <Container>
        <Header>
          <h1>Calculadora</h1>
          <h1>Resultado</h1>
        </Header>

        <Content>
          <Calculadora>
            <div>

              <button type="button" onClick={(e) => setInput([...input, "0"])}>0</button>
              <button type="button" onClick={(e) => setInput([...input, "1"])}>1</button>
              <button type="button" onClick={(e) => setInput([...input, "2"])}>2</button>
              <button type="button" onClick={(e) => setInput([...input, "3"])}>3</button>
              <button type="button" onClick={(e) => setInput([...input, "4"])}>4</button>
              <button type="button" onClick={(e) => setInput([...input, "5"])}>5</button>
              <button type="button" onClick={(e) => setInput([...input, "6"])}>6</button>
              <button type="button" onClick={(e) => setInput([...input, "7"])}>7</button>
              <button type="button" onClick={(e) => setInput([...input, "8"])}>8</button>
              <button type="button" onClick={(e) => setInput([...input, "9"])}>9</button>
              <button type="button" onClick={(e) => soma()}>+</button>
              <button type="button" onClick={(e) => subtracao()}>-</button>
              <button type="button" onClick={(e) => multiplicacao()}>x</button>
              <button type="button" onClick={(e) => divisao()}>/</button>
              <button type="button" onClick={(e) => ((setInput(""), setOldInput(""), setResult("")))} >C</button>
              <button type="button">AC</button>

            </div>
            <button type="button" onClick={Results}>=</button>
          </Calculadora>

          <h2>=</h2>

          <Resultado>
            {pastResult} <br/>
            {oldInput} {input}
            <br />
            <br />
            {result}

          </Resultado>
        </Content>

      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
