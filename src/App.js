import React from 'react'
import Page1 from './p1/Page1';
import Page2 from './p2/Page2';
import Page31 from './p31/Page31';
import Page3 from './p3/Page3';
import Page4 from './p4/Page4';
import Page5 from './p5/Page5';
import Page6 from './p6/Page6';
import Page7 from './p7/Page7';
import Page8 from './p8/Page8';
import { Route,Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Page1/>}></Route>
        <Route path='/login' element={<Page2/>}></Route>
        <Route path='/page3' element={<Page3/>}></Route>
        <Route path='/sigin' element={<Page4/>}></Route>
        <Route path='/forgotpassword' element={<Page5/>}></Route>
        <Route path='/otp' element={<Page6/>}></Route>
        <Route path='/newpassword' element={<Page7/>}></Route>
        <Route path='/tnks' element={<Page8/>}></Route>
        <Route path='/main' element={<Page31/>}></Route>
      </Routes>         
    </div>
    );
  }
