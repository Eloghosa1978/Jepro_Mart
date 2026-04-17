import React from "react";
import "../../theme/CSS/Products-card.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsCard = ({ product }) => {
  const { id, name, category, subcategory, price, image } = product || {};
  return (
    <div className="product-card" key={id} tabIndex={0}>
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" loading="lazy" />
      </div>

      <div className="product-details">
        <p className="category-badge">{category.toUpperCase()} Collection</p>
        <h3 className="product-name">
          {name} {subcategory}
        </h3>
        <p className="product-price">
          <strong>₦{price.toFixed(2)}</strong>
        </p>
        <button className="add-to-cart-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
