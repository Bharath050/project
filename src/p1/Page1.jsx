import React from 'react'
import "../p1/page1.css";
import { useNavigate } from 'react-router-dom';
const Page1 = () =>
{
     let navigate = useNavigate();
     const LogInPageNav =() =>{
         alert ("Turn On Your Location");
        navigate('/login');
     }
     navigate = useNavigate();
     const SignInNav =() =>{
        alert ("Turn On Your Location");
        navigate('/sigin');
     }
     navigate = useNavigate();
     const EmergencyNav =() =>{
        alert ("Turn On Your Location");
        navigate('/page3');
     }
    return (
        <div class="backp1">
         <div class="half">
              <h3 class="h3p1">Drug Trafficking</h3>          
              <button class='button' onClick={LogInPageNav}>LogIn</button>  
              <br />        
              <button class='button'onClick={SignInNav}>SignUp</button>   
              <br />              
              <button class='button1'onClick={EmergencyNav}>Emergency</button>
         </div>
       </div>
      
    )
}
export default Page1;
