
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Home/Homepage'

function App() {
  return (
    <>
    <h2>Hello app</h2>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}
export default App;
