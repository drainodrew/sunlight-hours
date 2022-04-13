import { Link, Routes, Route } from 'react-router-dom'
import  './App.css';
import Home from "./components/Home.jsx";
import Loading from './components/Loading/Loading'
import Cities from './components/Cities/Cities'
import Navbar from './components/Navbar';
import Test from './components/test'
//link and route --> you can't have one without the other 
  //routes you only use one time (when you define it)



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities-form" element={<Cities />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
