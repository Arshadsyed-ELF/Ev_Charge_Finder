// src/components/Navbar.js

import React from 'react';
import {Link } from "react-router-dom"
// import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { Carousel } from 'react-bootstrap';

const Home = () => {

  return (
    <div>
    <NavBar/>
   
    <p className="mt-4" style={{fontSize:"20px"}} >
          Embrace the future of transportation with electric vehicles (EVs). At Ev Charge Finder, we are dedicated to
          providing you with real-time information about nearby charging stations, helping you plan your journeys with
          ease. Whether you own an electric car or a plug-in hybrid, our platform ensures that you have access to a
          network of charging points, making your EV experience convenient and efficient. Explore the world of electric
          mobility and stay up-to-date with the latest news and developments. Start your electric journey today!
        </p>
        <Carousel controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.globalso.com/acecharger/BANNER-2.png" // Replace with your image URL
              alt="First EV"
              style={{ height: "450px", width: "100%" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ecogears.in/wp-content/uploads/2020/09/COST-OF-EV-CHARGING-STATION-5.jpg" // Replace with your image URL
              alt="Second EV"
              style={{ height: "450px", width: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
    <Footer/>
    </div>
    
  );
};

export default Home;
