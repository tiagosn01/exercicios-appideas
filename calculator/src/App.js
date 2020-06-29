import React, { useState } from 'react';

import { Container, Header, Content, Calculadora, Resultado, } from './styles/calculator'
import GlobalStyle from './styles/global'


function App() {
  const [input, setInput] = useState('')

  const [value, setValue] = useState('')
  const [accumulator, setAccumulator] = useState(0)
  const [operator, setOperator] = useState('')
 

  function soma() {
    if (input.length > 8) {
      return (
      setInput(''),
      setValue(''),
      setAccumulator(0),
      alert('Somente números abaixo de 8 digitos.')
      )     
    }
    setOperator(1)
    setAccumulator(accumulator + parseInt(input))

    setValue(value + input + ' + ')
    setInput('')

  }

  function subtracao() {
    if (input.length > 8) {
      return (
      setInput(''),
      setValue(''),
      setAccumulator(0),
      alert('Somente números abaixo de 8 digitos.')
      )     
    }

    setOperator(2)  
   
    setAccumulator(accumulator - parseInt(input))
    console.log(accumulator)
    if (accumulator === 0){
      setAccumulator(parseInt(input))
    }

    setValue(value + input + " - ")
    setInput('')
    
    
  }

  function multiplicacao() {
    if (input.length > 8) {
      return (
      setInput(''),
      setValue(''),
      setAccumulator(0),
      alert('Somente números abaixo de 8 digitos.')
      )     
    }

    setAccumulator(accumulator * parseInt(input))
    console.log(accumulator)
    if (accumulator === 0){
      setAccumulator(parseInt(input))
    }

    setValue(value + input + " x ")
    setInput('')
    setOperator(3)
  }


  function divisao() {
    if (input.length > 8) {
      return (
      setInput(''),
      setValue(''),
      setAccumulator(0),
      alert('Somente números abaixo de 8 digitos.')
      )     
    }

    setAccumulator(accumulator / parseInt(input))
    if (accumulator === 0){
      setAccumulator(parseInt(input))
    }

    setValue(value + input + " / ")
    setInput('')
    setOperator(4)
  }


  function limpa() {
    setInput('');
    setValue('');
    setAccumulator(0);
  }


  function Results() {
    if (!accumulator) {
      return setAccumulator(0)
    }

    switch (operator) {
      case 1:
        setAccumulator(accumulator + parseInt(input))
        setValue(value + input)
        setInput('')
        setOperator('')
        break;

      case 2:
        setAccumulator(accumulator - parseInt(input))
        setValue(value + input)
        setInput('')
        setOperator('')
        break;

      case 3:
        setAccumulator(accumulator * parseInt(input))
        setValue(value + input)
        setInput('')
        setOperator('')
        break;

      case 4:
        setAccumulator(accumulator / parseInt(input))
        setValue(value + input)
        setInput('')
        setOperator('')
        break;

      default:
        setAccumulator(0)
        break;
    }
  }


  return (
    <>
      <Container>
        <Header>
          <h1>Calculadora</h1>
        </Header>

        <Content>
          <Calculadora>
            <div>              

              <button type="button" onClick={() => setInput(input + "7")}>7</button>
              <button type="button" onClick={() => setInput(input + "8")}>8</button>
              <button type="button" onClick={() => setInput(input + "9")}>9</button>
              <button type="button" style={{background: '#FF9900'}} value="/" onClick={() => divisao()}>/</button>

              <button type="button" onClick={() => setInput(input + "4")}>4</button>
              <button type="button" onClick={() => setInput(input + "5")}>5</button>
              <button type="button" onClick={() => setInput(input + "6")}>6</button>
              <button type="button" style={{background: '#FF9900'}} value="x" onClick={() => multiplicacao()}>x</button>

              <button type="button" onClick={() => setInput(input + "1")}>1</button>
              <button type="button" onClick={() => setInput(input + "2")}>2</button>
              <button type="button" onClick={() => setInput(input + "3")}>3</button>
              <button type="button" style={{background: '#FF9900'}} value="-" onClick={() => subtracao()}>-</button>

              <button type="button" onClick={() => setInput(input + "0")}>0</button>            
              
              <button type="button" style={{background: '#FF9900'}} onClick={() => (setInput(''))} >C</button>
              <button type="button" style={{background: '#FF9900'}} confirma onClick={() => limpa()}>AC</button>              
              
              <button type="button" style={{background: '#FF9900'}} value="+" onClick={() => soma()}>+</button>
              
              

            </div>
            <button type="button" onClick={Results} >=</button>
          </Calculadora>

          <h2>=</h2>

          <Resultado>
            <h1>Resultado:</h1>
            <div>
              {input} <br /> <br />
              {value} {input}
              <br />
              <br />
              <br />
            = {accumulator}
            </div>

          </Resultado>
        </Content>

      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
