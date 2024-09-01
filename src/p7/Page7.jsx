import React from 'react'
import "../p5/forgot.css";
import { useNavigate } from 'react-router-dom';
const Page7 = () =>
{
  const navigate = useNavigate();
  const newpass =() =>{
     navigate('/login');
  }
    return (
        <div class="backp5">
          <div class="halfp5">
            <h1 class="headingp5">Create New Password</h1>
            <input type="password" placeholder='Enter New Password'class="txtp5"/>      
          <br/>         
            <input type="password" placeholder='Re-Enter Password'class="txtp5"/>
          <br />          
          <button class="textp5" onClick={newpass}>Confirm Password</button>
          </div>          
        </div>      
    )
}
export default Page7;