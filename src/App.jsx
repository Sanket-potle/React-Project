
import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Home/Homepage";
import AboutusPage from "./Component/About/Aboutus";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
      </Routes>
    </>
  )
}
export default App;
