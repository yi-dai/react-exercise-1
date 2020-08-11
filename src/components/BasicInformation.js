import React from 'react';
import './BasicInformation.css';
const Photo = () => {
  return (
    // eslint-disable-next-line no-undef
    <img className="img1" src={require('../assets/avatar.jpg')} alt="avatar" />
  );
};
const Greet = () => {
  return <h1 className="greet">HELLO,</h1>;
};

const Information = () => {
  return (
    <h2 className="introduction">
      MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
    </h2>
  );
};

const Line = () => {
  return <div className="line"></div>;
};
export { Photo, Greet, Information, Line };
