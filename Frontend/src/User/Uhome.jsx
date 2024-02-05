// src/components/Home.js

import React from 'react';
import Sidebar from './Sidebar';
import { Carousel } from 'react-bootstrap';

const Uhome = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div style={{ marginLeft: "230px", width: "1270px" }}>
        <br/>
        <h1 className='text-center'>Welcome to Ev Charge Finder</h1>

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
        
      </div>
    </div>
  );
};

export default Uhome;
