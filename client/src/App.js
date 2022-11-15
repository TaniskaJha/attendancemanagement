import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Attendance from './Pages/Attendance'
import Report from './Pages/Report'
import Timetable from './Pages/Timetable'
import About from './Pages/About'
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import './App.css';



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/attendance' element={<Attendance/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/timetable' element={<Timetable/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/barchart' element={<BarChart/>} />
        <Route path='/lineChart' element={<LineChart/>} />
        
      </Routes>
    </BrowserRouter>

   </>
    
  )
}


;




  
  




export default App;
