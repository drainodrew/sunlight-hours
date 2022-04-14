import { Routes, Route } from 'react-router-dom'
import  './App.css';
import Home from "./components/Home.jsx";
import Cities from './components/Cities/Cities'
import Navbar from './components/Navbar';
import List from './components/List'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities-form" element={<Cities />} />
          <Route path="/cities-list" element={<List />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
