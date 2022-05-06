import React from 'react';
import getAbout from './about_interface';
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h1>{getAbout()}</h1>
    </div>

  );
};
  
export default About;