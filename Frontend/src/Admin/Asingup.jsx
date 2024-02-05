import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { FaBackspace, FaBezierCurve, FaLongArrowAltLeft, FaLongArrowAltRight, FaSignOutAlt, FaStepBackward } from 'react-icons/fa';

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:7000/asignup", payload)
      .then((result) =>{
        alert('Account created')
        console.log(result)
        navigate('/alogin')
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div>
    <div className="flex items-center justify-center min-h-screen bg-white"> 
   
    {/* <h2 style={{ position: "relative", bottom: "300px", right: "300px", transform: "scaleX(-1.5)",}} > <Link to="/" className='text-gray-500 hover:text-gray-900'><FaSignOutAlt/></Link></h2> */}

      <div className="relative  bg-green-500 p-8 rounded-md shadow-md overflow-hidden" style={{display:"flex",height:"440px",width:"550px"}}>
      <div>
        <img src='https://www.einfochips.com/blog/wp-content/uploads/2023/06/2_Blog_Featured_Image-scaled.jpg' width='200px' style={{marginRight:"35px",height:"390px"}} />
      </div>
        <div className="relative z-10" style={{width:"270px"}}>  
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4"  >
              Signup
            </h2>
    </div>
            
       

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              name="name"
              type="name"
              autoComplete="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email address
            </label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
            >
              Signup
            </button>

            <p className="text-sm text-gray-300 pt-2">
            Already have an account{' '}
            <button
              onClick={formHandle1}
              className="text-red-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
            >
              Login
            </button>
          </p>
          </div>         
        </form>
        </div>

        {/* <div className="absolute h-full w-full bg-red-500 transform -skew-y-6 origin-bottom-right"></div> */}
       
      </div>
    </div>
   </div>
  );
};

export default Asignup;
