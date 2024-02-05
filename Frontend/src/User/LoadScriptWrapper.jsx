// src/LoadScriptWrapper.js
import React from 'react';
import { LoadScriptNext } from '@react-google-maps/api';

const libraries = ['places'];

const LoadScriptWrapper = ({ children }) => {
  return (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyCozhSKrgb97LG3oz35s1uIOn3JLbmZAkw"
      libraries={libraries}
    >
      {children}
    </LoadScriptNext>
  );
};

export default LoadScriptWrapper;
