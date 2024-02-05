import React from 'react'
import { Link } from 'react-router-dom'
import '../User/sidebar.css'
const Sidebar = () => {
  return (
    <div>
         <nav className="sidebar">
      <ul className="list-unstyled">
        <strong style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>Ev-Charge</strong>
        {/* <h5 style={{color:"white",paddingTop:"0px"}} className='text-center'>({JSON.parse(get).name} )</h5> */}
       <div style={{marginTop:"35px"}}>
       <li>
          <Link to="/uhome">
           <p style={{paddingLeft:"10px"}}>Home</p>
          </Link>
        </li>
        </div>
       <div>
       
        <li>
          <Link to="/chargestation">
        <p style={{paddingLeft:"10px"}}>Charge Stations</p>
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <p style={{paddingLeft:"10px"}}>Pricing</p>
          </Link>
        </li>
        <li>
          <Link to="/mybookings">
            <p style={{paddingLeft:"10px"}}>My Bookings</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <p style={{paddingLeft:"10px"}}>Signout</p>
          </Link>
        </li>
        </div>

      </ul>
    </nav>
    </div>
  )
}

export default Sidebar