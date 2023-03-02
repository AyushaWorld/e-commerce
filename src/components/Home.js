import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="w-100 backImage" style={{height:"93vh"}}>
        <div className='center'>
          <h1>Best E-Commerce Site</h1>
          <h6>We are team of talented designers making websites with Bootstrap</h6> 
          <Link to="/products" className="btn btn-success" type="submit">Get Started</Link>
        </div>
      </div>
    </>
  )
}
