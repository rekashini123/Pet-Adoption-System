import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import './Signuplogin.css';

function Loginpage() {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([{username:"praveena",password:"praveena"},{username:"pavi",password:"pavi"},{username:"rika",password:"rika"}]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  

useEffect(()=>{
  fetch("http://localhost:5000/")
  .then((res)=>res.json())
  .then((data)=>setUserDetails(data));
},[]);
console.log(userDetails)

  const loginuser = () => {
    
    const user = userDetails.find(user => user.username === username);

    if (user) {
      
      if (user.password === password) {
        setLoggedInUser(user);
        setLoginError('');
        navigate('/Homepage');

      } else {
        setLoginError('Incorrect password');
      }
    } else {
      setLoginError('User not found');
    }

   
    setUsername('');
    setPassword('');
  }
  return (
    <>
      <div className='body1'>
        <div className='Box'>
          <h1 class="heading">LOGIN</h1>
          <input className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
          <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
           <button className='button' onClick={loginuser}>Login</button>
          {loginError && <p className="error">{loginError}</p>}
          {loggedInUser && <p className="success">Logged in as {loggedInUser.name}</p>}
          <p class="signuptext">Don't have an account? <a href="/Signuppage">Sign up</a></p>
        </div>
      </div>
    </>
  )
}

export default Loginpage
