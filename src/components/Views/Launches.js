import React from "react";
import LaunchRocket from './LaunchRocket';

export const Launches = () => {
  
  return (
    <>
      <LaunchRocket endpoint='/launches' />
    </>
  );
};

export default Launches;
