import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../App.css'
import moment from 'moment';
import 'moment-timezone';

function BookSlot() {
  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phno: '',
    date:'',
    time:''
  });

  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:7000/chargestations/${id}`)
      .then((resp) => {
        setItem(resp.data);
      })
      .catch((error) => {
        console.log("Failed to fetch item data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure item is available and contains the required properties
      if (!item || !item.name || !item.address_components.district || !item.address_components.city || !item.address_components.state || !item.address_components.country || !item.address_components.zipcode || !item.address_components.street_address  || !item.address_components.district) {
        throw new Error('Item data is missing required properties');
      }


const { name} = item;
console.log(item)

      const updatedFormData = {
        ...formData,
        name: item.name,
        address: {
          district: item.address_components.district,
          city: item.address_components.city,
          state: item.address_components.state,
          country: item.address_components.country,
          zipcode: item.address_components.zipcode,
          street_address: item.address_components.street_address,
        },
      };

      updatedFormData.time = moment.tz(formData.time, 'HH:mm', 'Asia/Kolkata').format('hh:mm A');
      // You can add user-specific data here
      const userid = JSON.parse(localStorage.getItem('user')).id;
      const username = JSON.parse(localStorage.getItem('user')).name;
      updatedFormData.userId = userid;
      updatedFormData.userName = username;

      // Post the updatedFormData
      await axios.post('http://localhost:7000/userbooking', updatedFormData);
      console.log(updatedFormData);
      alert('booked successfully');
      navigate('/mybookings');
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '' }}>
      <Sidebar/>
      <div style={{ display: 'flex ' }} >
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white">
          <h2 className="text-2xl font-semibold" >Your Booking is almost Done! </h2>
          {/* <p>item name:{item.itemtype}</p> */}
          <form onSubmit={handleSubmit}>

            <div >
              <label className="block text-gray-600 text-center" style={{ paddingTop: "10px" }}>Details:</label>
              <div class="input-container">

                <input type="text" id="myInput" class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" " style={{ width: "340px" }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label for="myInput" class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                 name
                </label>
              </div>
            </div><br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div >
                <div class="input-container">
                  <input type="text" id="myInput" class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "
                    style={{ width: "160px" }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label for="myInput" class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                    Email
                  </label>
                </div>
              </div>
              <div >
                <div class="input-container">
                  <input type="text" id="myInput" class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "
                    style={{ width: "160px" }}
                    name="phno"
                    value={formData.phno}
                    onChange={handleChange}
                  />
                  <label for="myInput" class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
                    phno:-
                  </label>
                </div>
              </div>
            </div>
            <br/>
           <div>
            <input  type='date'
            name='date'
            id='date'
            value={formData.date}
             onChange={handleChange}
            />
           </div>
           <br/>
           <div>
           <input  type='time'
            name='time'
            id='time'
            value={formData.time}
             onChange={handleChange}
             />
           </div>
           <br/>
        
          
            <button
              type="submit"
              style={{ width: "340px" }}
              className="bg-blue-400 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookSlot;


// <div >
// <div class="input-container">
//   <input type="date"  
//     style={{ width: "160px" }}
//     name="date"
//     value={formData.date}
//     onChange={handleChange}
//   />
//   <label  class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
//     Date:-
//   </label>
// </div>
// </div>
// <div >
// <div class="input-container">
//   <input type="time" id="myInput" class="w-48 p-2 border border-gray-300 rounded focus:outline-none" placeholder=" "
//     style={{ width: "160px" }}
//     name="time"
//     value={formData.time}
//     onChange={handleChange}
//   />
//   <label for="myInput" class="absolute left-2 transform -translate-y-1/2 bg-white px-1 pointer-events-none transition-transform">
//     Time:-
//   </label>
// </div>
// </div>