import "./App.css";
//import About from "./compenents/About";
import Navbar from "./compenents/Navbar";
import Textform from "./compenents/Textform";

function App() {
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="about Textutils" />*/}
      {/*<Navbar/>*/}
      <Navbar title="Textutils" />
      <div className='container my-3'>  
    <Textform heading ="Enter the text to Analyze Below"/>
    
    {/* <About/> */}
      </div>
    </>
  );
}

export default App;
