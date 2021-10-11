//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
const [mode, setMode]=useState('light'); // use state for dark/light mode
const [alert, setAlert] = useState(null);    // use state for alert 

const showAlert=(message,type)=>{

  setAlert(
    {
      msg: message,
      type: type
    }
  )
  setTimeout(() => {
    setAlert(null);
  }, 1400);

}

const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode enabled","success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("light mode enabled","success");
  }
}
  
  return (
     <BrowserRouter>
    <>
      <Navbar title= "TextUtility"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my -3">
        
          <Switch>
              <Route exact path="/about" >
                  <About/>
              </Route>
                
         <Route exact  path="/">
                  <TextBox defValue = " Enter the text below for Analyzation!" mode={mode} showAlert={showAlert} />   
              </Route>
           </Switch>
          
      </div>
            
    </>
    </BrowserRouter>
      
      );
}

export default App;
