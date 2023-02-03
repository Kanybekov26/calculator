import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { ContextProvaider } from './stor/Context';

function App() {
  const [background, setBackground] = useState("white");

  // const blueButtonHandler = () => {
  //   setBackground("black");
  // };
  // const ButtonHandler = () => {
  //   setBackground();
  // };
  return (
    <div className="App">
      <ContextProvaider>
        <div style={{ backgroundColor: background ,width:"100%",height:"713px"}}>
        <Header setBackground={setBackground}/>  
       <Main/>
        </div>

      </ContextProvaider>
       
    </div>
  );
}

export default App;
