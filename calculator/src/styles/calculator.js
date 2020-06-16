import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  padding: 0 200px;
  margin-right: 80px;
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
 
  

    button {
      max-width: 52px;
      max-height: 52px;
      margin-bottom: 3px;
      padding: 15px;
      margin-right: 3px;
    }
  }
  
  > button {
    width: 217px;
    max-height: 52px;
    margin-bottom: 3px;
    padding: 15px;
    margin-right: 3px;
  }
`;


export const Resultado = styled.div`
  margin-left: 80px;
  display: flex;
  font-size: 25px;
  justify-content: center;

  width: 300px;
  height: 200px;
  background: white;
  border-radius: 15px;
 
  padding: 20px 20px;
  border: 1px solid;

  > h1 {
    margin-top: 2px;
    font-size: 25px;
  }  

`;


