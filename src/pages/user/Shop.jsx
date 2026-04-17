import React from "react";
import "../../theme/CSS/Shop.css";
import useGetProducts from "../../hooks/useGetProducts.js";
import ProductsCard from "../../components/ProductsCard.jsx";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const { products, loading, error } = useGetProducts();
  return (
    <div className="container">
      <section className="hero">
        <h1>
          <i>Currated Shop</i>{" "}
        </h1>
        <p>
          Explore our latest collection of stylish apparel and accessories,
          where heritage Ankara meets modern design.
        </p>
      </section>
      <br />
      {/* Section for 2 parts left part is sidebar that contains filters and sorting options based on categories, subcategories or price*/}
      <section className="shop-content">
        <aside className="sidebar">
          <h2>Filters</h2>
          <hr />
          <div className="filter-collections">
            <>
              <h3>Categories</h3>
              <ul>
                <li>Ankara</li>
                <li>Modern</li>
                <li>Casual</li>
              </ul>
            </>
            <>
              <h3>Subcategories</h3>
              <ul>
                <li>Gowns</li>
                <li>Up and Down</li>
                <li>Shirts</li>
                <li>Pants</li>
              </ul>
            </>
          </div>
          <div className="filter-price">
            <h3>Price</h3>
            <ul>
              <li>
                Under <FontAwesomeIcon icon={faNairaSign} /> 50
              </li>
              <li>
                <FontAwesomeIcon icon={faNairaSign} /> 50 -{" "}
                <FontAwesomeIcon icon={faNairaSign} /> 100
              </li>
              <li>
                <FontAwesomeIcon icon={faNairaSign} /> 100 -{" "}
                <FontAwesomeIcon icon={faNairaSign} /> 200
              </li>
              <li>
                <FontAwesomeIcon icon={faNairaSign} /> 200 -{" "}
                <FontAwesomeIcon icon={faNairaSign} /> 500
              </li>
              <li>
                <FontAwesomeIcon icon={faNairaSign} /> 500 and above
              </li>
            </ul>
          </div>
        </aside>
        {/* Right part is the products section that contains the products display in a grid format */}
        <main className="products">
          <header className="products-info">
            <p>Showing {products?.length || 0} products</p>
            {/* <p>Sort by <select name="sort" id="sort">
              <option value="default">Latest Arrival</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name">Name</option>
            </select></p> */}

            {/* Show loading State */}
            {loading && <>

              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading products...</p>
              </div>

            </>}

            {/* Show error State */}
            {error && <p className="error-state">Error: {error}</p>}
          </header>
          <div className="product-grid">
            {/* Product items would be displayed here */}
            {products?.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Shop;
