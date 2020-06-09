import React,  { useState } from "react";
import { Input } from './styles'


function App() {
  const [border1, setBorder1] = useState(0) 
  const [border2, setBorder2] = useState(0) 
  const [border3, setBorder3] = useState(0) 
  const [border4, setBorder4] = useState(0)  

  return (
    <>
    <h1>Border Radius</h1>

    <div className="box" style={{borderRadius:`${border1}px ${border2}px ${border3}px ${border4}px`}}>
     
      height: 100px; <br/>
      width: 180px; <br/>
      border-radius: {border1}px {border2}px {border3}px {border4}px;

        

      
    </div>

    <div className="high">
      <h2>Bordas de cima</h2>
    <Input  placeholder="Border radius 1" onChange={(e) => setBorder1(e.target.value)} />
    <Input  placeholder="Border radius 2" onChange={(e) => setBorder2(e.target.value)} />
    </div>
   
   <div className="low">
   <h2>Bordas de baixo</h2>
    <Input  placeholder="Border radius 4" onChange={(e) => setBorder4(e.target.value)} />
    <Input  placeholder="Border radius 3" onChange={(e) => setBorder3(e.target.value)} />
   </div>

    </>
  );
}

export default App;
