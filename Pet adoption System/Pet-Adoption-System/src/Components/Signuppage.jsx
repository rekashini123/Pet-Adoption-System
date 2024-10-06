
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; 
function Signuppage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [newusername, setUsername] = useState('');
  const [newemail, setEmail] = useState('');
  const [newpassword, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
useEffect(()=>{
  fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setUserDetails(data))
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setErrorMessage('An error occurred while fetching user data. Please try again later.'); // Display error message on fetch error
      });
},[]);
console.log(userDetails)
const handleclick = async () => {
  if (!newemail || !newusername || !newpassword) {
    alert('Please fill in all fields.');
    return;
  }
  else{
  try {
    const newuser = {
      email: newemail,
      username: newusername,
      password: newpassword,
    };
    
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Parse error message
      setErrorMessage(errorData.message || 'An error occurred during signup. Please try again later.'); // Display specific or generic error message
      return; // Handle signup errors gracefully
    }

    // Successful signup
    setUserDetails([...userDetails, newuser]); // Update local state (optional)
    setUsername('');
    setPassword('');
    setEmail('');

    navigate('/Homepage'); // Redirect after successful signup

  } catch (error) {
    console.error('Error during signup:', error);
    setErrorMessage('An error occurred during signup. Please try again later.'); // Generic error message for unexpected errors
  }}
};
  return (
    <>
      <div className='body1'>
        <div class='Box'>
          <h1 class="heading">Sign Up</h1>
          <input className='input' type="email" value={newemail} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Id' />
          <input className='input' type="text" value={newusername} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
          <input className='input' type="password" value={newpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
          <a href="/Homepage" id='signup'><button className='button' onClick={handleclick}> Sign up </button></a>
          <p class="signuptext">Already have an account? <a href="/Loginpage">Login</a></p>
        </div>
      </div>
    </>
  )
}
export default Signuppage
