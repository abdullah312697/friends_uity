import React from 'react';
import Home from './pages/Home';
import Ragister from './pages/Ragister';
import View from './pages/View';
import Update from './pages/Update';
import Login from './pages/Login';
import Vouchers from './pages/Vouchers';
import Payment from './pages/Payment';
import Confirm from './pages/Confirm';
import Tamount from './pages/Tamount';
import Abouts from './pages/Abouts';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  /*jshint ignore:start */
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ragister/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile/:id" element={<View/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/voucher/:id" element={<Vouchers/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="/updateAmount" element={<Tamount/>}/>
        <Route path="/about" element={<Abouts/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>

  );
    /*jshint ignore:end */
}

export default App;
