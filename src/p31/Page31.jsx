import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../p3/main.css"
const Page31 = () =>
{
    let navigate = useNavigate();
    const mainnav =() =>{
       navigate('/tnks');
    }
    return (
      
        <div class="backp3">
          <div class="halfp3">
            <h1 class="fill">Fill Details To Complaint</h1>
            <input type="text" placeholder='Any Identification Mark Of Customer' class="a1"/>
            <input type="text" placeholder='Any Identification Mark Of trafficker' class="a1"/>
            <select name="type" id="type" class="a1">
            <option value="type">Quantity Of Drug</option>
            <option value="1">Few</option>
            <option value="2">More</option>
            <option value="3">Very High</option>
            </select>
            <select name="type" id="type" class="a1">
            <option value="type">Export/Import Type</option>
            <option value="1">Road Ways</option>
            <option value="2">Rail Ways</option>
            <option value="3">Air Ways</option>
            <option value="3">Personal Vehicle</option>
            </select>
            <input type="image" src="./album" alt="Trafficking Image" class="a1" />
            <button class="p31but" onClick={mainnav}>Click  Here To complaint</button>
          </div>          
        </div>      
    )
}
export default Page31;