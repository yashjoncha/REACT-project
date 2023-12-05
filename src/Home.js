    import React from 'react'
    // import Unisex from "./Unisex";
    // import Kids from "./Kids";
    // import Male from  "./Male";
    // import Female from  "./Female";
  const Home = ({setShowAbout,setShowLogin,showmen,setShowmen,showkids,setShowkids,showwomen,setShowwomen,showunisex,setShowunisex}) => {
 
    // const [showCart, setShowCart] = useState(false);
    // const [showFurniture, setShowFurniture] = useState(false);
    // const navigate=useNavigate();
    
    // const productDetail = Array.isArray(productDetails) ? productDetails() : [];
    

    // const toggleunisex = () => {
    //   setShowmen(false);
    //   setShowwomen(false);
    //   setShowkids(false);
    //   setShowunisex(!showunisex);
    // };
    
   

    const togglekids = () => {
      setShowwomen(false);
      setShowmen(false);
      setShowunisex(false);
      // setShowLogin(false)
      // setShowAbout(false)
      setShowkids(!showkids);
    };
    
    const togglewomen = () => {
      setShowmen(false);
      setShowkids(false);
      setShowunisex(false);
      setShowwomen(!showwomen);
    };
    
    const togglemen = () => {
      setShowwomen(false);
      setShowkids(false);
      setShowunisex(false);
      setShowmen(!showmen);
    };
    
    return (
      <>
      <div className='naigation'>
      <div className="navbar navbar-light bg-light p-0">
                <ul className="container-fluid">
                  
                
                  <li className="navbar-brand mr-5" >
                  <button className="navig noborder" onClick={togglemen}>MEN</button>
                  </li>
                  
                <li className="navbar-brand mr-5">
                  <button className="navig noborder" onClick={togglewomen}>WOMEN</button>
                
                  </li>
                  <li className="navbar-brand mr-5" >
                  <button className="navig noborder" onClick={togglekids}>Kid's</button>

                  </li>
                {/* <li className="navbar-brand mr-5">  */}
                  {/* <button className="navig noborder" onClick={toggleunisex}>KID'S</button> */}
                
                   {/* </li> */}
                </ul>
              </div>
              </div>




      <div>
      {/* {products.map((product) => (
          // Mapping over productDetails and rendering each item
          <div key={product.id} className=''>
            <div className="card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.shoes}</h5>
                <p className="card-text">Step into style with {product.shoes} – where comfort meets fashion.</p>
                <p className="card-title">{product.price}
                  <button className="btn btn-primary m-3" onClick={() => addToCart(product)}>Add to Cart</button>
                </p>
              </div>
            </div>
          </div>
        ))} */}

        



        
      </div>
      
        </>
    )
  }

  export default Home;
