import React from "react";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";

import Navbar from "./componets/Navbar/Navbar.js";
import Footer from "./componets/Footer/Footer.js";
import Contact from "./componets/Contact/Contact.js";
import About from "./componets/About/About.js";
import SignUp from './componets/SignUp/SignUp.js';
import LogIn from './componets/LogIn/LogIn.js';
import LogOut from './componets/LogOut.js';
import Cart from "./componets/Cart/Cart.js";


import Oats from './images/Oats-Milk.jpg';
import nuttela from './images/Nutella.jpg';
import jam from './images/jam.jpg'
import vitality from './images/vitality-shot.jpg';

import gummies from './images/gummies.jpg';
import juice from './images/juice.jpg';
import sauce from './images/sauce.jpg';
import doritos from './images/doritos.jpg';

const dealList = [{
    id: 1,
    imageUrl: Oats,
    name: 'Basrista Series Oat',
    brand: 'Pacific Foods',
    price: 500
  },
  {
    id: 2,
    imageUrl: nuttela,
    name: 'Nutella Hazelnut Spead',
    brand: 'Nutella',
    price: 750
  },
  {
    id: 3,
    imageUrl: jam,
    name: 'Jersey Jam',
    brand: 'Red Stallion',
    price: 299
  },
  {
    id: 4,
    imageUrl: vitality,
    name: 'Vatality Shot',
    brand: 'Pressed',
    price: 15000
  },

];

const productList = [{
  id: 5,
  imageUrl: gummies,
  name: 'Gummies',
  brand: 'Kushque',
  price: 999
},
{
  id: 6,
  imageUrl: juice,
  name: 'Simply Red Juice',
  brand: 'Apple Tree',
  price: 750
},
{
  id: 7,
  imageUrl: sauce,
  name: 'Core & Grind Cashew Cheesy Sauce',
  brand: 'Core & Grind',
  price: 299
},
{
  id: 8,
  imageUrl: doritos,
  name: 'Dorritos Wasabi',
  brand: 'Dorritos',
  price: 15000
},

];

const App = () => {


  return (

    <div className="app" >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage dealList={dealList} />} >             
          </Route>

          <Route path="/products" element={<ProductPage dealList={dealList} productList={productList} />} >             
          </Route>

          <Route path="/signup" element={ <SignUp /> }> </Route>        

          <Route path="/login" element={ <LogIn />} > </Route>     

          <Route path="/about" element={ <About />}> </Route>

          <Route path="/contact" element={ <Contact /> } > </Route>

          <Route path="/logout" element={ <LogOut /> } >  </Route>

          <Route path="/cart" element={ <Cart /> } >  </Route>

          <Route path="*" element={
            <><h1>404 Page Not Found</h1></>
          } >             
          </Route>
          
        </Routes>
        <Footer />
    </div>
    
  );
}


export default App;
