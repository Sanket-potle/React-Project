
import './App.css'

import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Home/Homepage";
import AboutusPage from "./Component/About/Aboutus";


function App() {
  return (
    <>
      {/* <h2>Hello app</h2> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutusPage />} />
      </Routes>
    </>
  )
}
export default App;
