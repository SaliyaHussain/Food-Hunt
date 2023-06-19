import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import gif from './4rv8-unscreen.gif';
const Main = () => {
  let n = useNavigate();
  function gocards() {
    n('/Restaurants');
  }
  function gosignup() {
    n('/SignUp');
  }

  return (
    <>
      <div class='grid'>
        <div className='content'>
        <div className='content-right1'>
            <img src={gif} alt='' />
          </div>
          <div className='content-left'>
            <div className='info1'>
              <h4>Delivering Delights</h4>
              <h2>Food Hunt</h2>
              <p>
                Food Hunt Food Delivery is here to make your dining experience
                seamless and delightful. Simply explore, order, and savor the
                joy of good food, delivered fresh and fast
              </p>
              <div>
              <button className='btn4' onClick={gocards}>
                Go For Hunt
              </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

     
    </>
  );
};

export default Main;
