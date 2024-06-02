import "./App.css";
import About from "./compenents/About";
import Navbar from "./compenents/Navbar";
import Textform from "./compenents/Textform";
import React, { useState} from "react";



function App() {
  const [mode, setMode]= useState('light');//whether the dark mode is enabled or not
   const toggleMode=()=>{
       if(mode ==='light'){
        setMode('dark');
    document.body.style.backgroundColor='#042743'
       }
       else{
        setMode('light');
        document.body.style.backgroundColor='white'
       }
       
   }

  return (
    <>
      {/* <Navbar title="Textutils" aboutText="about Textutils" />*/}
      {/*<Navbar/>*/}
      <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}/>
    
      <div className='container my-3'>  
    <Textform heading ="Enter the text to Analyze Below" mode={mode} />
    
    
     <About/> 
      </div>
    </>
  );
}

export default App;
