import React, { useState }     from 'react';
import { Link} from 'react-router-dom';
import imageSrc from './pngwing.com.png';
import imageSrc1 from './pngwing1.com.png';
 import Home from "./Home"
 import Login from "./Login"  
 import About from "./About"  
 import Unisex from "./Unisex.js"  
 import Male from "./Male"  
 import Female from "./Female"  
 import Kids from "./Kids"  
import Searbar from './Searbar.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUpload from './Fileupload.js';
 //  import Searbar from "./Searbar"
// import { Card } from 'react-bootstrap';
// import Cart from './Cart';
const Productlist = () => {
  const [showkids, setShowkids] = useState(false);
  const [showunisex, setShowunisex] = useState(true);
  const [showmen, setShowmen] = useState(false);
  const [showwomen, setShowwomen] = useState(false);


  
  // Function to add items to the cart
  const [cartItem, setCartItemList] = useState([]);
  
  const cartlen=cartItem.length
  const [showhome, setShowhome] = useState(true);
  const [showsearchbar, setShowsearchbar] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const[showcontact,setshowcontact]=useState(false)
  // const [showFurniture, setShowFurniture] = useState(false);
  
  // const navigate=useNavigate();
  const togglesearch=()=>{
    if (showAbout || showhome || showLogin || showsearchbar) {
      // Reset other states
      setShowsearchbar(false)
      setShowLogin(false);
      setShowhome(false);
      setShowwomen(false);
      setShowmen(false);
      setShowunisex(false);
      setShowAbout(false);
      setShowkids(false);
      // setSearchQuery("");
    }
    setshowcontact(!showcontact);

  }
  const toggleHome = () => {
    if (showLogin || showAbout || showsearchbar ||showcontact) {
      // Reset other states
      setShowLogin(false);
      setshowcontact(false)
      setShowsearchbar(false);
      setShowwomen(false);
      setShowmen(false);
      setShowunisex(true);
      setShowAbout(false);
      setShowkids(false);
      setSearchQuery("");
    }
    setShowhome(!showhome);
  };
  
  const toggleAbout = () => {
    if (showLogin || showhome || showsearchbar || showcontact) {
      // Reset other states
      setshowcontact(false)
      setShowkids(false);
      setShowLogin(false);
      setShowhome(false);
      setShowwomen(false);
      setShowmen(false);
      setShowunisex(false);
      setShowsearchbar(false);
      setSearchQuery("");
    }
    setShowAbout(!showAbout);
  };
  
  const toggleCart = () => {
    if (showAbout || showhome || showLogin || showcontact) {
      // Reset other states
      setshowcontact(false)
      setShowsearchbar(false)
      setShowLogin(false);
      setShowhome(false);
      setShowwomen(false);
      setShowmen(false);
      setShowunisex(false);
      setShowAbout(false);
      setShowkids(false);
      // setSearchQuery("");
    }
    setShowsearchbar(!showsearchbar);
  };
  
  const toggleLogin = () => {
    if (showAbout || showhome || showsearchbar||showcontact) {
      // Reset other states
      setshowcontact(false)
      setShowkids(false);
      setShowwomen(false);
      setShowAbout(false);
      setShowmen(false);
      setShowunisex(false);
      setShowsearchbar(false);
      setShowhome(false);
      setSearchQuery("");
    }
    setShowLogin(!showLogin);
  };
  
  // const toggleSearchBar = () => {
  //   // Reset other states
  //   setShowLogin(false);
  //   setShowhome(false);
  //   setShowwomen(false);
  //   setShowmen(false);
  //   setShowunisex(false);
  //   setShowAbout(false);
  //   setShowkids(false);
  //   setShowCart(false);
  
  //   setSearchQuery(""); // Clear search query when toggling search bar
  // };
  
  
  // const toggleFurniture = () => {
    //     setShowFurniture(!showFurniture);
    // }
    const products = [
      { shoes: 'Nike', price: 100, id: 1 },
      { shoes: 'Adidas', price: 80, id: 2 },
      { shoes: 'Puma', price: 70, id: 3 },
      { shoes: 'Reebok', price: 90, id: 4 },
      { shoes: 'Dubai', price: 90, id: 5 },
      { shoes: 'Jordans', price: 100, id: 6 },
      { shoes: 'Jordans1', price: 100, id: 7},
      { shoes: 'Jordans2', price: 100, id: 8 },
      // Add more shoes with their price and unique id as needed
    ];
    const addToCart = (products) => {
      toast("PRODUCT ADDED TO CART!")
      setCartItemList([...cartItem, products]);
      // console .log(cartItem)
};




const [showsuggestion, setshowsuggestion] = useState(false);
const filteredProducts = products.filter((product) =>
    product.shoes.toLowerCase().includes(searchQuery.toLowerCase())
);

  const handleclicked = (e) => {
  const inputValue = e.target.value;
  console.log("Input value:", inputValue);
  setSearchQuery(e.target.value);
  setSearchQuery(inputValue);
  console.log(searchQuery,"ok");
  setshowsuggestion(true);
};


const handleclickedout = () => {
  setshowsuggestion(false);
};

const handleclickedin = (e) => {
  setSearchQuery(e.target.value);
  setshowsuggestion(true);
  // console.log(searchQuery,"o");
};

// const [productDetails, setProductDetails] = useState(null);
// const productName = searchQuery;
const handleSuggestionClick = (selectedProduct) => {
  console.log("Selected product:", selectedProduct.shoes);
  
  setSearchQuery(selectedProduct.shoes);
  // setSearchQuery(searchQuery)
  console.log(searchQuery,"shoes");
  toggleCart ()
  // setProductDetails(selectedProduct);
  setshowsuggestion(false); // Hide the suggestions
  // productDetails()
  // console.log(productDetails);
  // productDetails()
};
// function getProductByName(Products, productName) {
  // const product = products.find((product) => product.shoes === productName);
  // console.log(product);
  // return product;
// }
// setProductDetails( getProductByName(products, productName));

  


  return (
    <div>
      {/* dont touch this */}
      <div className='navigation'>
      <nav className="navbar navbar-light bg-light p-0">
       <div className="container-fluid">
       <Link className="navbar-brand mr-5" to="#"> <img src={imageSrc1} alt='img' className='image-class'/> </Link>
        <span class="navbar-text">
        Nike.Just Do It.Nike IN
        
      </span>
      </div>




      </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="container-fluid">
            <Link className="navbar-brand mr-5" to="#"> <img src={imageSrc} alt='img' className='image-class1'/> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
              <ul className="navbar-nav mr-5 me-auto mb-2 mb-lg-0">
                <li className="nav-item mr-5">
                <button className="navig noborder" onClick={toggleHome}>Home</button>
                {/* <Link to="/Home" onClick={togglehome}>Home</Link> */}
                </li>
                
                {/* <li className="nav-item ml-auto " >
                <button className="navig noborder" >Contact</button>
                </li> */}
                <li className="nav-item ml-auto " >
                <button className="navig noborder" onClick={toggleLogin}>Login</button>
                </li>
                
              <li className="nav-item ml-5 ">
                <button className="navig noborder" onClick={togglesearch}>Contact us</button>
               
                </li>
              </ul>
              
              <ul className="navbar-nav d-flex d-flex ml-auto ">
                  <li className="nav-item   mr-5  ">
                  <button className="navig noborder" onClick={toggleAbout}>&#128722; {cartlen}</button>
                
                  </li>
              
              <form className="d-flex ml-auto  mr-5   " role="search">
              <div>
      <input
        onClick={handleclicked}
        className="form-control me-2" placeholder="Search"
        type="text"
        value={searchQuery}
        onChange={handleclickedin}
        />
      {showsuggestion && (
        <ul onClick={handleclickedout}>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => handleSuggestionClick(product)}>
              {product.shoes}
            </li>
          ))}
        </ul>
      )}
 
    </div> <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />
{/*  */}
                  
              {/* <Searbar products={products}  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/> */}
              </form>
                
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
      {/* {productlen} */}
      {/* {productsApp.length} */}
        {/* {productsApp.ma?p((items)=>( */}
            <>
          {/* {items.name} */}
          {/* <button onClick={() => addToCart(items)}>Add to Cart</button> */}
          </>
        {/* ))} */}
      
      <div className="body2a">
             
                    {showhome && <Home setShowAbout={setShowAbout} setShowLogin={setShowLogin}  setShowmen={setShowmen} showmen={showmen} setShowwomen={setShowwomen} showwomen={showwomen} setShowkids={setShowkids} showkids={showkids} setShowunisex={setShowunisex} showunisex={showunisex}/>}
                    {/* { < Male  addToCart={addToCart} products={products}  searchQuery={searchQuery} setSearchQuery={setSearchQuery} getProductByName={getProductByName}/>} */}
                    {/* { <Unisex  addToCart={addToCart} products={products}  searchQuery={searchQuery} setSearchQuery={setSearchQuery} getProductByName={getProductByName}/>} */}
                    {/* {showhome && <Male/>} */}
                    {/* {showCart && <Cart   />} */}
                     {showLogin && <Login addToCart={addToCart}toggleHome={toggleHome}  />}
                     {showAbout&& <About cartlen={cartlen} addToCart={addToCart}  productsApp={cartItem} setCartItemList={setCartItemList}/>} 
                     {showmen && <Male addToCart={addToCart} products={products}/>}
                     {showsearchbar && <Searbar products={products} searchQuery={searchQuery} addToCart={addToCart}/>}
      {showwomen && <Female addToCart={addToCart} products={products}/>}
      {showkids && <Kids addToCart={addToCart} products={products} />}
      {showunisex && <Unisex addToCart={addToCart} products={products}/>}
      {showcontact && <FileUpload/>}
                </div>
    </div>
    
  );
};

export default Productlist;

