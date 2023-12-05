  import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './Navbar'; // Import the NavBar component
import Home from "./Home"
// import Login from "./Login"
// import Cart from './Cart';
// import About from './About';
// import Contact from './Contact';
import './MyComponent.css';
// import Searbar from './Searbar';
import Productlist from './Productlist';  
// import {  createContext } from "react";
// import ReactDOM from "react-dom/client";
// import { ToastContainer } from 'react-toastify';

const App = () => {
  const [cartItem, setCartItemList] = useState([]);

  // Function to add items to the cart
  const addToCart = (products) => {
    setCartItemList([...cartItem, products]);
    console.log(cartItem);
  };
  // const productlen= cartItem.length
  // const [cartItems, setCartItems]=useState([]);
  // let  obj = {name:"yash"};
  
  return (
    
    // <Context.provider value={obj}>
    // <Home/>
    // </Context.provider>
    <HashRouter>
      {/* <NavBar productsApp={cartItem} /> Include the NavBar component within the Router */}
      {/* <ToastContainer/> Include the NavBar component within the Router */}
      
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/"  element={<Contact />} /> */}
        {/* <Route path="/About"  element={<About />} /> */}
        {/* <Route path="/Search"  element={<Searbar  products={products} />} /> */}
        {/* <Route path="/"  element={<Searbar  products={products} />} /> */}
        {/* <Route path="/Cart"  element={<Cart productsApp={cartItem} setCartItemList={setCartItemList} addToCart={addToCart} />} /> */}
        <Route path="/"  element={<Productlist addToCart={addToCart} productsApp={cartItem} />} />
        <Route path="/Home" element={<Home addToCart={addToCart} productsApp={cartItem}  />} />
        {/* <Route path="/" element={<GroceryList />} /> */}
      </Routes>
    </HashRouter> 
    
  );
}

export default App ;



// import React from 'react';
// import Home from "./Home";
// import React, {    useRef, useState } from "react";
// // export const Context = createContext();
// const App = () => {
//   const [Name,SetName]=useState("")
//   const count=useRef()
//   const handleclick=(e)=>{
    
//     SetName(e.target.value)
    
   
//   }
//   // useEffect(()=>{
//   //   count.current=count.current+1
//   //  })
  
//   const colourchange=()=>{
//     count.current.focus()
//     count.current.style.backgroundColor="red"

//   }
  
  
//   return (
  
//     <>
    
// <input onChange={handleclick } ref={count}/><br></br>
// <input onChange={handleclick } ref={count}/><br></br>
// <button onClick={colourchange}>okkkk</button>
//    {/* count= {count.current} */}
//     </>
   
//      );
//     }
    
//     export default App ;
