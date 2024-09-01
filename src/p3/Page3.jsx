import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./main.css"
const Page3 = () =>
{
  let navigate = useNavigate();
  const firstnav =() =>{
     navigate('/main');
  } 
    return (
      
        <div class="backp3">
          <div class="halfp3">
            <h1 class="fill">Fill Details To Complaint</h1>
            <input type="text" required placeholder='Name*' class="a1"/>
            <input type="text" required placeholder='City-Name*' class="a1"/>
            <select name="Age" id="Age" class="a1">
            <option value="Age">Approx Age Of Customer</option>
            <option value="Child">Below 18 Years</option>
            <option value="Adult">Above 18 Years</option>
            <option value="Aged">Above 30 Years</option>
            </select>
            <select name="Age" id="Age" class="a1">
            <option value="Age">Approx Age Of Supplier</option>
            <option value="Child">Below 18 Years</option>
            <option value="Adult">Above 18 Years</option>
            <option value="Aged">Above 30 Years</option>
            </select>
            <select name="type" id="type" class="a1">
            <option value="type">Type Of Drug</option>
            <option value="1">Cocaine</option>
            <option value="2">Cannabis</option>
            <option value="3">Inhalants</option>
            <option value="4">Heroin</option>
            <option value="5">Steroids</option>
            <option value="5">Others</option>
            </select>
            <button class="p3but" onClick={firstnav}>Next..</button>
          </div>          
        </div>      
    )
}
export default Page3;