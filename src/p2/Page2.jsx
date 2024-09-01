import React from 'react'
import "../p2/page2.css";
import { useNavigate } from 'react-router-dom';
const Page2 = () =>
{
  let navigate = useNavigate();
  const accountnav =() =>{
     navigate('/page3');
  }
    return (
        <div class="backp2">
          <div class="border">
          <div >
          <h1 class="heading">Log  in to your Account</h1>
          <input type="email" placeholder='E-mail/Mobile-No' lable="name" class="txt"/>
          <br/>
          <input type="password" placeholder='Password' class="txt"/>
          <div>
          <input type="checkbox" class="checkp2"/>Keep Me Logged in for 30 days
          <a href="/forgotpassword" class="forgotp2">Forgot password...</a>
          </div>
          </div>          
          <div>
          <button class="but"onClick={accountnav}>Log-In</button>
          </div>
          <div>
          <p class="checkp2">Need an Account ?<a href="/sigin" class="forgotp2">SignUp..</a></p>
          </div>
          </div>
        </div>      
    )
}
export default Page2;
