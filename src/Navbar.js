    import React from 'react';
import { Link } from 'react-router-dom';
import imageSrc from './pngwing.com.png';

const NavBar = (productsApp) => {

  return (
        <>
        
       <nav className="navbar navbar-light bg-light p-0">
       <div className="container-fluid">
       <Link className="navbar-brand mr-5" to="#"> <img src={imageSrc} alt='img' className='image-class'/> </Link>
        <span class="navbar-text">
        Nike.Just Do It.Nike IN
        
      </span>
      </div>
      </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="container-fluid">
            <Link className="navbar-brand mr-5" to="#"> <img src={imageSrc} alt='img' className='image-class'/> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
              <ul className="navbar-nav mr-5 me-auto mb-2 mb-lg-0">
                <li className="nav-item mr-5">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item mr-5">
                <Link to="/about">About</Link>
                </li>
                <li className="nav-item mr-5">
                <Link to="/contact">Contact</Link>
                </li>
                <li className="nav-item ml-auto ">
                <Link to="/Login">Login</Link>
                </li>
              </ul>
              
              <form className="d-flex ml-auto   " role="search">
              <ul className="navbar-nav mr-5 me-auto mb-2 mb-lg-2">
              <li className="nav-item ml-auto">
               <Link to="/Cart">Cart</Link>
              </li>
              <li className="nav-item ml-auto">
               <Link to="/Cart">Cart</Link>{productsApp.length}
              </li>
                
              </ul>
                  
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        </>
      );
    }
    
    export default NavBar;
    