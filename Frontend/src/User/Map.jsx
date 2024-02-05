// import React, { useState } from 'react';
// import { GoogleMap, LoadScriptNext, Marker, StandaloneSearchBox, InfoWindow } from '@react-google-maps/api';

// const libraries = ['places'];

// const Map = ({ chargeStations }) => {
//   const [map, setMap] = useState(null);
//   const [searchBox, setSearchBox] = useState(null);
//   const [center, setCenter] = useState({ lat:17.4065, lng: 78.4772 });
//   const [selectedStation, setSelectedStation] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const onUnmount = () => {
//     setMap(null);
//   };

//   const onSearchBoxLoad = (ref) => {
//     setSearchBox(ref);
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places.length > 0) {
//         const { geometry } = places[0];
//         setCenter({
//           lat: geometry.location.lat(),
//           lng: geometry.location.lng(),
//         });
//       }
//     }
//   };

//   const handleMarkerClick = (station) => {
//     setSelectedStation(station);
//   };

//   const handleInfoWindowClose = () => {
//     setSelectedStation(null);
//   };

//   return (
//     <LoadScriptNext
//       googleMapsApiKey="AIzaSyCozhSKrgb97LG3oz35s1uIOn3JLbmZAkw"
//       libraries={libraries}
//     >
//      <GoogleMap
//   mapContainerStyle={{ height: '500px', width: '100%' }}
//   center={center}
//   zoom={8}  // Adjust this value to include your markers
//   onLoad={onLoad}
//   onUnmount={onUnmount}
// >

    //     <StandaloneSearchBox
    //       onLoad={onSearchBoxLoad}
    //       onPlacesChanged={onPlacesChanged}
    //     >
    //       <input
    //         type="text"
    //         placeholder="Search for a place"
    //         style={{
    //           boxSizing: `border-box`,
    //           border: `1px solid transparent`,
    //           width: `240px`,
    //           height: `32px`,
    //           padding: `0 12px`,
    //           borderRadius: `3px`,
    //           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    //           fontSize: `14px`,
    //           outline: `none`,
    //           textOverflow: `ellipses`,
    //           position: 'absolute',
    //           left: '50%',
    //           marginLeft: '-120px',
    //         }}
    //       />
    //     </StandaloneSearchBox>

    //     {/* Render markers based on chargeStations data */}
    //     {chargeStations.map((station) => (
    //   <Marker
    //   key={station._id}
    //   position={{ lat: station.latitude, lng: station.longitude }}
    //   onClick={() => handleMarkerClick(station)}
    //   icon={{
    //     url: 'https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg',
    //     size: { width: 42, height: 42 },
    //   }}
    // />
    
    //     ))}

    //     {/* Display InfoWindow when a marker is clicked */}
    //     {selectedStation && (
    //       <InfoWindow
    //         position={{ lat: selectedStation.latitude, lng: selectedStation.longitude }}
    //         onCloseClick={handleInfoWindowClose}
    //       >
    //         <div>
    //           <h3>
    //             <strong>Charging Point Name:</strong>
    //             {selectedStation.name}
    //           </h3>
    //           <p>
    //             <strong>Address:</strong>
    //             {selectedStation.address_components.street_address}, {selectedStation.address_components.city},{' '}
    //             {selectedStation.address_components.zipcode}, {selectedStation.address_components.district},{' '}
    //             {selectedStation.address_components.state}, {selectedStation.address_components.country}.{' '}
    //           </p>
    //           <p>
    //             <strong>Latitude</strong>
    //             <a href={selectedStation.latitude}>{selectedStation.latitude}</a>
    //           </p>
    //           <p>
    //             <strong>Longitude</strong>
    //             <a href={selectedStation.longitude}>{selectedStation.longitude}</a>
    //           </p>
    //           <p>
    //             <strong>Phno:</strong>
    //             {selectedStation.phone_number}
    //           </p>
    //           <p>
    //             <strong>Timings</strong>
    //             {selectedStation.opening_hours}
    //           </p>
    //           <p>
    //             <strong>Ratings</strong>
    //             {selectedStation.rating}
    //           </p>
    //         </div>
    //       </InfoWindow>
    //     )}
//       </GoogleMap>
//     </LoadScriptNext>
//   );
// };

// export default Map;


import React, { useState } from 'react';
import { GoogleMap, LoadScriptNext, Marker, StandaloneSearchBox, InfoWindow } from '@react-google-maps/api';

const libraries = ['places'];

const Map = ({ chargeStations }) => {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({ lat: 17.4065, lng: 78.4772 });
  const [selectedStation, setSelectedStation] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

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

  return (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyCozhSKrgb97LG3oz35s1uIOn3JLbmZAkw"
      libraries={libraries} // Keep the libraries prop outside the component
    >
      <GoogleMap
        mapContainerStyle={{ height: '500px', width: '100%' }}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
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
        url: 'https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg',
        size: { width: 42, height: 42 },
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
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Map;

