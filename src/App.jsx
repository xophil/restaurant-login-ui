import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Policy from './policy';
import Terms from './terms';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
