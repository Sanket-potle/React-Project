
import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Home/Homepage";
import AboutusPage from "./Component/About/Aboutus";
import BlogPage from './Component/Blog/BlogPage';
import NavbarMenu from './Pages/Homepage/NavbarMenu';
import BlogPage2 from './Component/Blog/BlogPage2';



function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog2" element={<BlogPage2 />} />
      </Routes>
    </>
  )
}
export default App;
