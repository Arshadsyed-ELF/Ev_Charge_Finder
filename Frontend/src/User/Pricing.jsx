// src/components/ChargePriceList.js

import React from 'react';
import Sidebar from './Sidebar';

const ChargePriceList = () => {
  const chargingOptions = [
    {
      type: 'Standard Charging',
      rate: '₹8 per kWh',
      compatibleVehicles: ['Electric Cars', 'Plug-in Hybrids'],
      chargingSpeed: 'Up to 22 kW',
    },
    {
      type: 'Fast Charging',
      rate: '₹12 per kWh',
      compatibleVehicles: ['Electric Cars'],
      chargingSpeed: 'Up to 50 kW',
    },
    {
      type: 'Rapid Charging',
      rate: '₹18 per kWh',
      compatibleVehicles: ['Electric Cars'],
      chargingSpeed: 'Up to 100 kW',
    },
    {
      type: 'Ultra-Fast Charging',
      rate: '₹25 per kWh',
      compatibleVehicles: ['Electric Cars'],
      chargingSpeed: 'Over 150 kW',
    },
  ];

  return (
    <div>
        <Sidebar/>
        <div style={{marginLeft:"230px",width:"1270px"}}>
      <h2 className="text-2xl font-semibold pt-5 mb-5 text-center">EV Charge Price List</h2>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r">Charging Type</th>
            <th className="py-2 px-4 border-b border-r">Rate</th>
            <th className="py-2 px-4 border-b border-r">Compatible Vehicles</th>
            <th className="py-2 px-4 border-b border-r">Charging Speed</th>
          </tr>
        </thead>
        <tbody>
          {chargingOptions.map((option) => (
            <tr key={option.type}>
              <td className="py-2 px-4 border-b border-r">{option.type}</td>
              <td className="py-2 px-4 border-b border-r">{option.rate}</td>
              <td className="py-2 px-4 border-b border-r">{option.compatibleVehicles.join(', ')}</td>
              <td className="py-2 px-4 border-b">{option.chargingSpeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ChargePriceList;
