import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import QRCode from "react-qr-code";
import Sidebar from './Sidebar';
import Footer from '../Components/Footer';

function Mybookings() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:7000/userbookings/${user.id}`)
        .then((response) => {
          const taskData = response.data;
          setItems(taskData);
          console.log(taskData);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Sidebar />
        <div style={{ width: '80%', marginLeft: '230px' }}>
          <h1 className='text-center'>My Bookings</h1>
          <div>
            {items.map((item) => (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  marginLeft: '65px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <QRCode
                      size={86}
                      value={item._id.slice(0, 10)}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  <div>
                    <p>BookingId:</p>
                    <p>{item._id.slice(0, 10)}</p>
                  </div>
                  <div>
                    <p>Station Name:</p>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>Slot Timing</p>
                    <p>{item.time}</p>
                  </div>
                  <div>
                    <p>Booking Date</p>
                    <p>{item.date}</p>
                  </div>
                  <div>
                    <p>Address</p>
                    <p>{item.address.street_address},{item.address.city},<br/>
                    {item.address.state},{item.address.zipcode}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mybookings;
