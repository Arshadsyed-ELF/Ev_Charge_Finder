

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

function Ahome() {
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:7000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

      // Fetch items data
    axios.get(`http://localhost:7000/chargestations`)
    .then((response) => {
      setItems(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });

    axios.get(`http://localhost:7000/bookings`)
    .then((response) => {
      setBookings(response.data);
    })
    .catch((error) => {
      console.error('Error fetching bookings: ', error);
    });

  
  }, []);
 
  

  // Calculate the number of users and bookings
  const totalUsers = users.length;
  const totalItems = items.length;
  const totalBookings = bookings.length;

  // Define data for the bar chart
  const data = [
    { name: 'Users', value: totalUsers, fill: '#2B124C' }, 
    { name: 'Charge Stations', value: totalItems, fill: '#AE4451' }, 
    { name: 'Bookings', value: totalBookings, fill: 'orange' }, 
  ];
  return (
    <div>
        <Anavbar/>
      <h3 className="text-center" style={{color:""}}>DashBoard</h3>
      <Card body style={{ background: "white", width: "80%", marginLeft: "10%", marginTop: "20px", height: "580px" }}>
        <div className="flex justify-around items-center p-4">
           <Link to="/users" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-red-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           USERS <br /> <br />{totalUsers}
         </div>
         </Link> 
         <Link to="/achargepoints" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-green-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           Charge Stations <br /> <br />{totalItems}
         </div>
         </Link>
         <Link to="/bookings" style={{textDecoration:"none"}}>
          <div className="w-64 h-32 bg-yellow-500 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center">
           Bookings <br /> <br />{totalBookings}
         </div>
         </Link>
       </div>
       <br/>
       <br/>
       <br/>
       <div style={{paddingLeft:"350px"}}>
       <BarChart width={400} height={300} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip   />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" barSize={50} />
          
        </BarChart>
       </div>
       </Card>
   
    </div>
  );
}

export default Ahome;
