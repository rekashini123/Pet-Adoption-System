import './Homepage.css'
import React from 'react';
import Details from './Components/Adoptionform/Details';
import Landingpage from './Components/Landingpage/Landing';

function Homepage() {
  return (
    <>
    <div className='Main1'>
        <div className='Nav'>
      <div className="Main-header">
        <div className="logo">The Loyal Friend</div>
        <ul className="Main-nav-links">
          <li><a href="/Homepage">Home</a></li>
          {/* <li><a href="#">Adopt</a></li> */}
          <li><a href="#">Adopt</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </div>

      <div className="Main-container">
        
        <div className="Main-image">
          <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 1" />
          <div className="button-group">
           <a href="/Details"><button className="details-button" >Details</button></a> 
          </div>
        </div>
        <div class="Main-image">
    <img src="data:image/jpeg;base64,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"/>
    <div class="button-group">
      
      <button class="details-button">Details</button>
    </div>
  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Image 3"/>
    <div class="button-group">
     
      <button class="details-button">Details</button>
    </div>
  </div>
  <div class="Main-image">
    <img src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2021/12/adorable-cavalier-king-charles-spaniel-puppy-royalty-dog.jpg" alt="Image 4"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>
  </div>
  <div class="Main-image">
    <img src="data:image/jpeg;base64,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" alt="Image 5"/>
    <div class="button-group">
     
      <button class="details-button">Details</button>
    </div>
  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1511823794984-b87716139b88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFycm90fGVufDB8fDB8fHww" alt="Image 6"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>
  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 7"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>
  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1560525821-d5615ef80c69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 8"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>

  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1597633544424-4da83804df40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 9"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>

  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1597633544424-4da83804df40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 10"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>

  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1603232644140-bb47da511b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 11"/>
    <div class="button-group">
      <button class="details-button">Details</button>
    </div>

  </div>
  <div class="Main-image">
    <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D" alt="Image 12"/>
    <div class="button-group">
    
      <button class="details-button">Details</button>
    </div>

  </div></div>

      </div></div>
    </>
  );
}

export default Homepage