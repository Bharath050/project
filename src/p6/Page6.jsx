import React from 'react'
import "../p6/otp.css";
import { useNavigate } from 'react-router-dom';
const Page6 = () =>
{
  let navigate = useNavigate();
  const changenav =() =>{
     navigate('/newpassword');
  }
    return (
        <div class="backp6">
          <div class="halfp6">
            <h1 class="otpp6">Verify OTP</h1>
            <h3 class="h3p6">Enter The 4 Digit Code You Received</h3>
            <div class="otp">
              <input class="input-o"  type="text" maxLength={1} required />
              <input class="input-o" type="text" maxLength={1} required />
              <input class="input-o" type="text" maxLength={1} required />
              <input class="input-o" type="text" maxLength={1} required />
            </div>
          <br/>         
          <br />
          <h3 class="h3p6">If You Don't Receive The Code <a href=''>Resend code</a></h3>
          <button class="verify" onClick={changenav}>Verify</button>
          </div>          
        </div>      
    )
}
export default Page6;