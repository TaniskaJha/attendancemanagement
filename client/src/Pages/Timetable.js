import React from 'react'
import './../style.css'
import Logo from "../img/logo-dark.png"
import { Link } from 'react-router-dom'
import tt from "../img/tt.jpeg"



const Timetable = () => {
  return (
    <>
    


      <div className="cont">
      <nav>
       <ul>
        <li><a className="logo">
          <img src={Logo}/>
          <span className="nav-item">Student</span>
        </a></li>


        <li>
        <Link className='pageLink' to="/dashboard">
        <i className="fas fa-menorah"></i><span className="nav-item">Dashboard</span>
        </Link>
        </li>

        <li>
        <Link className='pageLink' to="/attendance">
        <i className="fas fa-chart-bar"></i><span className="nav-item">Attendance </span>
        </Link>
        </li>
         
        <li>
        <Link className='pageLink' to="/timetable">
        <i className="fas fa-clock"></i><span className="nav-item">TimeTable </span>
        </Link>
        </li>

        <li>
        <Link className='pageLink' to="/report">
        <i className="fas fa-database"></i><span className="nav-item">Report </span>
        </Link>
        </li>
      
       

        
        <li><a href="#">
          <i className="fas fa-cog"></i>
          <span className="nav-item">Settings</span>
        </a></li>

        <li className='d-flex logout'>
        <Link className='pageLink' to="/"><i className="fas fa-sign-out-alt"></i>  Logout</Link>
   
        </li>
      </ul>
    </nav>


    <div className="main">
      <div className="main-top" >
        <h1>TIMETABLE</h1>
       
        <p>(iiot)</p>
        <i className="fas fa-user-cog"></i>

        <div className="user">
        <div className="card d-flex justify-content-center">
          <img className='container' src={tt}/>
          </div></div>

        </div>
        </div>

</div>
</>
)
}





export default Timetable
