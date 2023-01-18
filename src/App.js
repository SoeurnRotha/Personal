import Navbar from "./componect/page/Navbar";
import Home from "./componect/page/Home";
import {Routes, Route} from  'react-router-dom';
import About from "./componect/page/About";
import Contact from "./componect/page/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
