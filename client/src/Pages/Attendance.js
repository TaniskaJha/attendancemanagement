import React from 'react'
import './../style.css'
import Logo from "../img/logo-dark.png"
import { Link } from 'react-router-dom'



const Attendance = () => {
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
        <i className="fas fa-menorah"></i><span className="nav-item">Dashboard </span>
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
        <h1>ATTENDANCE</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      

       

      <div className="attendance">
        <div className="attendance-list">
          
          <table className="table">
          <thead>
              <tr>
                <th>Semester</th>
                <th>Subject Code</th>
                <th>Subject </th>
                <th>Teacher</th>
                <th>Class hrs</th>
                <th>Attending hrs</th>
                <th>Details</th>
                  
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03</td>
                <td>016</td>
                <td>DSA</td>
                <td>Dr.Neetu</td>
                <td>17</td>
                <td>08</td>
                <td><button className="btn table-btn" type="button">view</button></td>
              
                </tr>
                <tr>
                <td>03</td>
                <td>310</td>
                <td>DBMS</td>
                <td>Dr.Geetanshi</td>
                <td>08</td>
                <td>00</td>
                <td><button className="btn table-btn" type="button">view</button></td>
      
              </tr>
              <tr>
                <td>03</td>
                <td>110</td>
                <td>Comp-Networks</td>
                <td>Dr.Rahul</td>
                <td>11</td>
                <td>03</td>
                <td><button className="btn table-btn" type="button">view</button></td>
      
              </tr>
              <tr>
                <td>03</td>
                <td>071</td>
                <td>Intro to AI</td>
                <td>Dr.Divya</td>
                <td>09</td>
                <td>01</td>
                <td><button className="btn table-btn" type="button">view</button></td>

              </tr>
              <tr >
                <td>03</td>
                <td>101</td>
                <td>Mathematics</td>
                <td>Dr.Sheena</td>
                <td>15</td>
                <td>07</td>
                <td><button className="btn table-btn" type="button">view</button></td>
      
              </tr>
              <tr >
                <td>03</td>
                <td>016</td>
                <td>English</td>
                <td>Dr.Sukriti</td>
                <td>12</td>
                <td>03</td>
                <td><button className="btn table-btn" type="button">view</button></td>
     
              </tr> 
            </tbody>
          </table>

          

          

          

        </div>
      </div>
    </div>
  </div>

    
    </>
  )
}





export default Attendance
