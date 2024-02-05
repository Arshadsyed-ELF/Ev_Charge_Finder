// src/ChargingStations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScriptNext, Marker, StandaloneSearchBox, InfoWindow } from '@react-google-maps/api';
import Sidebar from './Sidebar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const libraries = ['places'];

const ChargingStations = ({ chargingStation }) => {
  const [chargeStations, setChargeStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({ lat: 17.4065, lng: 78.4772 });
  const [selectedStation, setSelectedStation] = useState(null);


  const onSearchBoxLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places.length > 0) {
        const { geometry } = places[0];
        setCenter({
          lat: geometry.location.lat(),
          lng: geometry.location.lng(),
        });
      }
    }
  };

  const handleMarkerClick = (station) => {
    setSelectedStation(station);
  };

  const handleInfoWindowClose = () => {
    setSelectedStation(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/chargestations');
        setChargeStations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Sidebar/>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '80%', marginLeft: '230px' }}>
          <h1 className='text-center mb-5 pt-2'>Charging Stations</h1>         
            <GoogleMap
              mapContainerStyle={{ height: '500px', width: '100%' }}
              center={center}
              zoom={8}>
              <StandaloneSearchBox
                onLoad={onSearchBoxLoad}
                onPlacesChanged={onPlacesChanged}
              >
                <input
                  type="text"
                  placeholder="Search for a place"
                  style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-120px',
                  }}
                />
              </StandaloneSearchBox>

              {/* Render markers based on chargeStations data */}
              {chargeStations.map((station) => (
                <Marker
                  key={station._id}
                  position={{ lat: station.latitude, lng: station.longitude }}
                  onClick={() => handleMarkerClick(station)}
                  icon={{
                    url: "https://cdn-www.pod-point.com/Circle-charging.png?v=1610534982",
                    scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
                  }}
                />
              ))}

              {/* Display InfoWindow when a marker is clicked */}
              {selectedStation && (
                <InfoWindow
                  position={{ lat: selectedStation.latitude, lng: selectedStation.longitude }}
                  onCloseClick={handleInfoWindowClose}
                >
                  <div>
                    <h3>
                      <strong>Charging Point Name:</strong>
                      {selectedStation.name}
                    </h3>
                    <p>
                      <strong>Address:</strong>
                      {selectedStation.address_components.street_address}, {selectedStation.address_components.city},{' '}
                      {selectedStation.address_components.zipcode}, {selectedStation.address_components.district},{' '}
                      {selectedStation.address_components.state}, {selectedStation.address_components.country}.{' '}
                    </p>
                    <p>
                      <strong>Latitude</strong>
                      <a href={selectedStation.latitude}>{selectedStation.latitude}</a>
                    </p>
                    <p>
                      <strong>Longitude</strong>
                      <a href={selectedStation.longitude}>{selectedStation.longitude}</a>
                    </p>
                    <p>
                      <strong>Phno:</strong>
                      {selectedStation.phone_number}
                    </p>
                    <p>
                      <strong>Timings</strong>
                      {selectedStation.opening_hours}
                    </p>
                    <p>
                      <strong>Ratings</strong>
                      {selectedStation.rating}
                    </p>
                      <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
                            <Link to={`/bookslot/${selectedStation._id}`} style={{ color: "white", textDecoration: "none" }}  >
                                Book Slot
                            </Link>
                        </button>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          
        </div>
      </div>

    </div>
  );
};

export default ChargingStations;
