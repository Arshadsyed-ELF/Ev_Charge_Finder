// EditChargeStation.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Anavbar from './Anavbar';

const EditUser = ({ }) => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'6'
  });

  const { id } = useParams();

  const navigate =useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:7000/user/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:7000/updateuser/${id}`, formData);
      console.log('user updated successfully');
      alert('updated successfully')
      navigate('/users'); // Redirect to the charge points page
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
    <Anavbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className=" p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3  bg-gray-500">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Create Charge Station</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>  

           <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

           <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>       
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EditUser;
