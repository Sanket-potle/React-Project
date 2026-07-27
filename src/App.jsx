
import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Home/Homepage";
import AboutusPage from "./Component/About/Aboutus";
import BlogPage from './Component/Blog/BlogPage';
import NavbarMenu from './Pages/Homepage/NavbarMenu';



function App() {  
  return (
    <>
    <NavbarMenu/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  )
}
export default App;
