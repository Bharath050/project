import React from 'react'
import "../p4/sign.css";
import { useNavigate } from 'react-router-dom';
const Page4 = () =>
{
  const navigate = useNavigate();
  const confirmnav =() =>{
     navigate('/page3');
  }
    return (
        <div class="backp4">
          <div class="borderp4">
          <div >
          <h1 class="headingp4">Sign up</h1>
          <input type="text" placeholder='First Name' class="txtp4"/>
          <input type="text" placeholder='Last Name' class="txtp4"/>
          <input type="email" placeholder='E-mail' class="txtp4"/>
          <input type="password" placeholder='Password' class="txtp4"/>
          </div>          
          <p class="pp4">Already a Member? <a href="/login" class="forgotp4">Log In..</a></p>
          <p class="ppp4">.........................Or Sign-in by.........................</p>
          <div class="block">
          <a href='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?state=5b921f6a-8e48-463c-a6fe-5d7a072b9a29&access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=779010036194-lf6spugv22vvj41pqjdj4d8k2tq7o5fd.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F'><p class="google"></p></a>
          <a href='https://www.facebook.com/'><p class="fb">
            </p></a>
          <a href='https://twitter.com/i/flow/login'><p class="twit">
            </p></a>
          </div>
          <div>
          <button class="butp4" onClick={confirmnav}>Sign up</button>
          </div>
          </div>
        </div>      
    )
}
export default Page4;

