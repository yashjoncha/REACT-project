import React from 'react'
import { Link} from 'react-router-dom';
import image from './New folder/Screenshot 2023-11-09 203946.png';
import imagebig2 from './New folder/Screenshot 2023-11-09 204006.png';
import image1 from './male 2023-11-06 134841.png';
import image2 from './female 2023-11-06 134853.png';
import image3 from './kid 2023-11-06 134918.png';
import imagenike from './nikeshoes.webp';
// import footbal from './New folder/Screenshot 2023-11-09 203650.png';
// import running from './New folder/Screenshot 2023-11-09 203659.png';
// import sportsweaar from './New folder/Screenshot 2023-11-09 203707.png';

const female = ({products, addToCart}) => {
  return (
    <div>
     <h3>Women</h3> 
         <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-ride="carousel" data-interval="5000"style={{ maxHeight: "80px" }} >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h3>Hello Nike App</h3>
          <p>Download the App To Acess Everything</p>
          
        </div>
        <div className="carousel-item">
          <h3>NEW Style : On Sale 40%</h3>
          <p>Shop All Our New Mark Downs </p>
          
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" ariahidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
         <div className="full-page-background" >
          <Link className="navbar-brand mr-5" to="#"> <img src={image} alt='img'/> </Link>
        </div>
        <div className="container">
      <h1 className="big-name">GIFT THAT MOVES YOU</h1>
      <div className="buttons">
        <button className="shop-button">Shop</button>
        <button className="more-button">Explore</button>
      </div>
       </div>

       {/* features  */}
       <div className="image-container1">
      <div className="image-wrapper1">
        <img src={image1} alt="Img" />
        <p>For Him</p>
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Img" />
        <p>For Her</p>
      </div>
      <div className="image-wrapper">
        <img src={image3} alt="Img" />
        <p>For Kid's</p>
      </div>
        </div>
        <div className="full-page-background" >
          <Link className="navbar-brand mr-5" to="#"> <img src={imagebig2} alt='img'/> </Link>
        </div>
        <div className="container">
      <h1 className="big-name">GIFT THAT MOVES YOU</h1>
      <div className="buttons">
        <button className="shop-button">Shop</button>
        <button className="more-button">Explore</button>
      </div>
       </div>



       {/* 2 cointainer  */}
       <div className="image-container">
      <div className="image-background image1">
        <div className="image-content">
          <p>Nike wear's</p>
          <button className="shop-button">Shop</button>
        </div>
      </div>
      <div className="image-background image2">
        <div className="image-content">
          <p>Nike Dunk's</p>
          <button className="shop-button">Shop</button>
        </div>
      </div>
       </div>
       <div className="full-page-background" >
          <Link className="navbar-brand mr-5" to="#"> <img src={imagebig2} alt='img'/> </Link>
        </div>
        <div className="container">
      <h1 className="big-name">GIFT THAT MOVES YOU</h1>
      <div className="buttons">
        <button className="shop-button">Shop</button>
        <button className="more-button">Explore</button>
      </div>
       </div>

       <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {Array.isArray(products) &&
          products.map((product, index) => (
            <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={product.image} className="d-block w-100" alt={product.name} />
              <h3>{product.shoes}</h3>
              <p className="card-title">
            {product.price}
            <button className="btn btn-primary m-3" onClick={() => addToCart(product)}>Add to Cart</button>
          </p>
            </div>
          ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    


    
       

       
        <div className="product-container">
  {Array.isArray(products) && products.map((product) => (
    <div key={product.id} className="product-card">
      <div className="card" style={{ width: '18rem' }}>
        <img src={imagenike} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.shoes}</h5>
          <p className="card-text">Step into style with {product.shoes} – where comfort meets fashion.</p>
          <p className="card-title">
            {product.price}$
            <button className="btn btn-primary m-3" onClick={() => addToCart(product)}>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


<div className="image-container-custom">
      <div className="image-wrapper-custom">
        <img src={image1} alt="Img" />
        <div className="image-content-custom">
          {/* <p>For Him</p> */}
          <button className="shop-button-custom">MEN</button>
        </div>
      </div>
      <div className="image-wrapper-custom">
        <img src={image2} alt="Img" />
        <div className="image-content-custom">
          {/* <p>For Her</p> */}
          <button className="shop-button-custom">WOMEN</button>
        </div>
      </div>
      <div className="image-wrapper-custom">
        <img src={image3} alt="Img" />
        <div className="image-content-custom">
          
          <button className="shop-button-custom">KID'S</button>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis neque at arcu pretium.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <address>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Email: info@nikestore.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Nike Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </div>
  )
}

export default female