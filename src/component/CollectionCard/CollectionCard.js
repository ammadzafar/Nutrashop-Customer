import React from "react";

const CollectionCard = (props) => {

  return (
    <div className="product-images">
      <div className="product-content">
        <div className="cart-contents">
          <a href="">
            <span>{props.name}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
