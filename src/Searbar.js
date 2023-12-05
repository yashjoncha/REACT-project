  import React from 'react';
  import imagenike from './nikeshoes.webp';

  const SearchBar = ({ products, searchQuery, addToCart }) => {
    // Function to find an object by name
    const findObjectByName = (array, name) => {
      return array.find(obj => obj.shoes.toLowerCase() === name.toLowerCase());
    };

    // Convert the searchQuery to lowercase to make it case-insensitive
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    // Example usage
    const result = findObjectByName(products, lowerCaseSearchQuery);

    return (
      <div>
        <p>Search Query: {searchQuery}</p>
        <div className="product-card" >
          <div className="card-body" style={{ width: '25rem' }}>
          <img src={imagenike} className="card-img-top" alt="..." />
            {result ? (
              <div key={result.id} className="card-body">
                {/* Render the matched product */}
                <h3 class="card-title">{result.shoes}</h3>
                <p className="card-text">
                <p className="card-text">Step into style with {result.shoes} – where comfort meets fashion.</p>
                  {result.price}$
                  <button className="btn btn-primary m-3" onClick={() => addToCart(result)}>
                    Add to Cart
                  </button>
                </p>
              </div>
            ) : (
              <p>No matching product found</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default SearchBar;
