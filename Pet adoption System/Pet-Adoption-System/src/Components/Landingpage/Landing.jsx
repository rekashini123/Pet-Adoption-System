import React from 'react';
import './Landing.css';
// import Loginpage from '../Loginpage';

class Landingpage extends React.Component {
  render() {
    return (
        <>
        <div className='body5'>
      <div>
        <nav>
          <div className="nav__bar">
            <div className="nav__header"></div>
            <ul className="nav__links" id="nav-links">
              {/* <li><a href="#">HOME</a></li> */}
              <li><a href="/Loginpage">ADOPT</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li className="nav__button"><a href="/Loginpage">LOGIN</a></li>
              <li className="nav__button"><a href="/Signuppage">SIGNUP</a></li>
              {/* <li><a href="#">CONTACT US</a></li> */}
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="content">
            <h1> Hey Adopt  <br />Someone</h1>
            <h4>Everyone Deserves Home</h4>
            <p>
              We are passionate about uncovering the wonders of our diverse world
              and sharing them with you. Our mission is to inspire a sense of
              discovery, and stories that make our planet unique.
            </p>
          </div>
        </div> 
      </div>
      </div>
      </>
    );
  }
}

export default Landingpage;