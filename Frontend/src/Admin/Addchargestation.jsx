// Addchargestaion.js
import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';
import { useNavigate } from 'react-router-dom';

const Addchargestaion = () => {
  const [formData, setFormData] = useState({
    name: '',
    address_components: {
      district: '',
      street_address: '',
      city: '',
      zipcode: '',
      state: '',
      country: '',
    },
    latitude: 0,
    longitude: 0,
    phone_number: '',
    opening_hours: '',
    rating: 0,
    review_count: 0,
  });

  const navigate =useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the changed field is within address_components
    if (name.startsWith('address_components.')) {
      const addressField = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        address_components: {
          ...prevData.address_components,
          [addressField]: value,
        },
      }));
    } else {
      // If not within address_components, update directly
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:7000/chargestations', formData);
      console.log('Charge station created successfully');
      alert('Charge station created successfully')
      navigate('/achargepoints')
      
    } catch (error) {
      console.error('Error creating charge station:', error);
    }
  };

  return (
    <div>
        
    <Anavbar/>
    <br/>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="district">
              District:
            </label>
            <input
              type="text"
              id="district"
              name="address_components.district"
              value={formData.address_components.district}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street_address">
              Street Address:
            </label>
            <input
              type="text"
              id="street_address"
              name="address_components.street_address"
              value={formData.address_components.street_address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="address_components.city"
              value={formData.address_components.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipcode">
              Zipcode:
            </label>
            <input
              type="text"
              id="zipcode"
              name="address_components.zipcode"
              value={formData.address_components.zipcode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="address_components.state"
              value={formData.address_components.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="address_components.country"
              value={formData.address_components.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
              Latitude:
            </label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
              Longitude:
            </label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">
              Phone Number:
            </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="opening_hours">
              Opening Hours:
            </label>
            <input
              type="text"
              id="opening_hours"
              name="opening_hours"
              value={formData.opening_hours}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review_count">
              Review Count:
            </label>
            <input
              type="number"
              id="review_count"
              name="review_count"
              value={formData.review_count}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Charge Station
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Addchargestaion;
