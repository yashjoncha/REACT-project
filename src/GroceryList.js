import React  from 'react';
import { useState } from 'react';

const Groceries = [
  { id: 1, name: 'Rice', price: 10 },
  { id: 2, name: 'Dal', price: 20 },
  { id: 3, name: 'Wheat', price: 30 },
  { id: 4, name: 'Milk', price: 40 },
  { id: 5, name: 'Ghee', price: 50 },
  { id: 6, name: 'Chana', price: 50 },
];

const GroceryList = () => {
  const[itemList, setItemList]=useState([]);
  const addToCart = (item) => {
      setItemList([...itemList,item]);
      console.log("Item added to cart:", item);
  }
  
  
  return (
    <div className="container" style={{ width: '1000px', height: '800px' }}>
      <div className="heading" style={{ display: 'flex', paddingLeft: '30px' }}>
        <h1>Bootes</h1>
        {/* <a style={{ marginTop: '20px', marginLeft: '700px' }}>View All</a> */}
      </div>
      <div className="Grocery-List1" style={{ display: 'flex', marginTop: '5px', marginLeft: '30px' }}>
        <div className='container'>
          <div className='row'>
            {Groceries.map((Grocery,index) => (
              <div className='col-3'>
                <div key={index} className="Grocery" style={{marginLeft:"20px", marginTop:"15px", border:"1px black solid", width:"215px", padding:"5px"}}>
                  <div className='Grocery-image' style={{width:"200px", height:"150px"}}></div>
                  <h3 style={{textAlign:"center"}}>{Grocery.name}</h3>
                  <p style={{textAlign:"center"}}>Price: ${Grocery.price}</p>
                  <button onClick={addToCart} style={{marginLeft:"50px"}}>Add to Cart</button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroceryList;