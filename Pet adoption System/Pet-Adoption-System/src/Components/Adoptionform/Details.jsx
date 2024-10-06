import React from 'react';
import './Details.css';
function Details() {
  return (
    <>
    <div className='Back'>
        <div className='Detailsbox'>
            <div className="Detail-i">
          <img id='img1' src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 1" />
          
          <div className='Des'>
          <p>
        Name: Mickey<br />
        Age: 2months<br />
        Breed: Pomeranian<br />
        Color: Brown<br />
        Gender: Male
      </p></div>
      <div className="button-group1">
            <a href="/Form"><button className="adopt-button" id='i1'>Adopt Me</button></a>
          </div>
          </div>
        </div>
        </div>
    </>


  )}
  export default Details;