import { Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./components/Home.jsx";
import Loading from './components/Loading'
import Cities from './components/Cities'
import Navbar from './components/Navbar';
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
        </Routes>
      </main>
    </>
  );
}

export default App;
