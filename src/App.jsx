import  { Route, Routes } from 'react-router'
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/footer/Footer'
import HomePage from "./Pages/HomePage/HomePage"
import CousresListPage from './Pages/CousresListPage/CousresListPage'
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/Home" element={<HomePage/>} />
      <Route path="/" element={<CousresListPage/>} />
    </Routes>  
    <Footer/>
   </>
  )
}

export default App
