import React from 'react'
// import { toast } from 'react-toastify';
// import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function App(){
  
  
  // import { ToastContainer, toast } from 'react-toastify';
  const About = ({ productsApp, setCartItemList, addToCart,cartlen }) => {
  const notify = () => toast("YOUR PRODUCT WILL BE DELIVERD IN 2/3 BUSSINESS DAYS  !");
   const removeFromCart = (index) => {
    const updatedProducts = [...productsApp]; // Create a copy of the array
    updatedProducts.splice(index, 1); // Remove the item at the specified index
    setCartItemList(updatedProducts);
  };

  if (!productsApp || !Array.isArray(productsApp) || productsApp.length === 0) {
    // Handle the case where productsApp is undefined, not an array, or empty
    return <div>No items in the cart</div>;
  }
  // const originalArray = productsApp;
// const copyArray = [...originalArray,productsApp.price];
// const copyArray = productsApp.map((item) => item.price);
var totalamount = productsApp.reduce((accum,item) => accum + item.price, 0)
console.log(totalamount);

// const alertok=()=>{
// alert("Your Order Will be deliverd in 2/3 Bussiness Days ")
// }
// const notify = () => toast("Wow so easy!");
  return (
    <div>
        <div>
        
      {productsApp.map((item, index) => (
        
        <div key={index}>
             <div className="card w-75 mb-3">
      <div className="card-body">
      
      <div>
  <p style={{ display: 'inline-block', marginRight: '10px' }}>{item.shoes}</p>-
  <p style={{ display: 'inline-block' }}>{item.price}$</p>
</div>

        <p className="card-text">Step into style with {item.shoes} – where comfort meets fashion..</p>
        <p className="button-container">
  <button className="btn btn1 btn-primary " onClick={() => removeFromCart(index)}>-</button>
  <p className="button-container"> {cartlen}</p>
  <button className="btn btn1 btn-primary" onClick={() => addToCart(item)}>+</button>
</p>
      
      </div>
    </div>
         
        </div>
)      )}
 <div className='btn'>


  
          <button type="button" className="center-button btn btn-info m-5">Total Products:- { cartlen}</button>
          <button type="button" className="center-button btn btn-info m-5">Total Amount:- { totalamount}$</button>
<button className="center-button btn btn-info m-5" onClick={notify}>Buy</button>

<div>
      {/* <button onClick={notify}>Notify!</button> */}
      {/* <ToastContainer /> */}
    </div>
          
          </div>
    </div>
    </div>
  )
}

export default About