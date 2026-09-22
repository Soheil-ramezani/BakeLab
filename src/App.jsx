import  { Route, Routes } from 'react-router'
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/footer/Footer'
import HomePage from "./Pages/HomePage/HomePage"
import CoursesListPage from './Pages/CoursesListPage/CoursesListPage'
import Course from './Pages/Course/Course'
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/Home" element={<HomePage/>} />
      <Route path="/Courses" element={<CoursesListPage/>} />
      <Route path='/' element={<Course/>} />
    </Routes>  
    <Footer/>
   </>
  )
}

export default App
