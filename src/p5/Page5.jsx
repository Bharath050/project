import React from 'react'
import "../p5/forgot.css";
import { useNavigate } from 'react-router-dom';
const Page5 = () =>
{
  const navigate = useNavigate();
  const otpnav =() =>{
     navigate('/otp');
  }
    return (
        <div class="backp5">
          <div class="halfp5">
          <h1 class="headingp5">Forgot Password</h1>
          <input type="email" placeholder='Enter E-mail Address' class="txtp5" required/>
          <br/>         
          <br />
          <button class="textp5" onClick={otpnav}>Click Here To Send OTP</button>
          </div>          
        </div>      
    )
}
export default Page5;

