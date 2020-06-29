import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  font-size: 20px;
  justify-content: center;
  padding: 15px 200px;
  margin-right: 80px;
  border-bottom: 1px solid;
  border-color: white;
`;

export const Content = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const Calculadora = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content:center;
    margin-right: 80px;  
    margin-top: 30px;

    button {
      max-width: 52px;
      max-height: 52px;
      margin-bottom: 1px;
      padding: 15px;
      margin-right: 1px;
      background: #999;
      border: 0;   
    }
  }
  
  > button {
    width: 195px;
    max-height: 52px;
    margin-bottom: 3px;
    padding: 15px;
    margin-right: 3px;
    background: #999;
    border: 0;
  }
`;


export const Resultado = styled.div`
  h1 {
    margin-left: 80px;
    margin-bottom: 8px;
  }
  div {
  margin-left: 80px;
  display: flex;
  font-size: 25px;
  padding: 10px 10px;

  width: 350px;
  height: 250px;
  background: white;
  border-radius: 15px;
 
  padding: 5px 10px;
  border: none;
  box-shadow: 1px 2px #888888;
  }

`;


