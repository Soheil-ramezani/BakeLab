import  { Route, Routes } from 'react-router'
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./Pages/HomePage/HomePage"
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
     <Routes>
      <Route path="/Home" element={<HomePage/>} />
    </Routes>  
    </>
  )
}

export default App
