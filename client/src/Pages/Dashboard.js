import React from 'react'
import './../style.css'
import Logo from "../img/logo-dark.png"
import Profile from "../img/profile.jpg"
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";




const Dashboard = () => {
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
        <h1>DASHBOARD</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      <div className="users">
        <div className="card d-flex justify-content-center">
          <img className='container' src={Profile}/>
          <h2>Student Name</h2>
          <h4>Enrollment no.</h4>
          <p>Branch</p>
          
          <div className="per">
            <table>
              <tr>
                <td><span>85%</span></td>
                <td><span>47%</span></td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Sem</td>
              </tr>
            </table>
          </div>
          
          <Link className='pageLink' to="/about">
         <Button variant="outline-light" size="lg">
                    Profile
         </Button>
         </Link>
          </div>


       

      <div className="attendance">
        <div className="attendance-list">
          <h1>Attendance</h1>
          <table className="table">
            <thead>
            <tr>
                <th>Semester</th>
                <th>Subject Code</th>
                <th>Subject </th>
                <th>Attendance(%)</th>
                  
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03</td>
                <td>016</td>
                <td>DSA</td>
                
                <td><div className="progress-bar bg-primary
                            progress-bar-striped
                            progress-bar-animated"
                            style={{width:'50%'}}>50%
               </div>
            </td>



              
                </tr>
                <tr>
                <td>03</td>
                <td>310</td>
                <td>DBMS</td>

                <td><div className="progress-bar bg-success
                            progress-bar-striped 
                            progress-bar-animated" 
                            style={{width:'90%'}}>90%</div>
                  </td>
      
      
              </tr>
              <tr>
                <td>03</td>
                <td>110</td>
                <td>Comp-Networks</td>
                <td><div className="progress-bar bg-warning 
                            progress-bar-striped
                            progress-bar-animated" 
                            style={{width:'30%'}}>30%</div>
                    </td>
              </tr>
              <tr>
                <td>03</td>
                <td>071</td>
                <td>Intro to AI</td>
                <td><div className="progress-bar bg-primary
                            progress-bar-striped 
                            progress-bar-animated" 
                            style={{width:'70%'}}>70%
                     </div>
                  </td>
              </tr>
              <tr >
                <td>03</td>
                <td>101</td>
                <td>Mathematics</td>
                <td> <div className="progress-bar bg-danger
                            progress-bar-striped 
                            progress-bar-animated"
                            style={{width:'10%'}}>10%</div>
                  </td>
      
              </tr>
              <tr >
                <td>03</td>
                <td>016</td>
                <td>English</td>
                <td><div className="progress-bar bg-info 
                            progress-bar-striped 
                            progress-bar-animated" 
                            style={{width:'70%'}}>70%
                     </div>
                  </td>
     
              </tr> 
            </tbody>
          </table>

          

          

        </div>
      </div>
    </div>
  </div>

    </div>
    </>
  )
}





export default Dashboard
