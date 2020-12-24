import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ImageDetails,
  NameContainer,
} from "./cart-item.styles";

// import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="" />
    <ImageDetails>
      <span>{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ImageDetails>
  </CartItemContainer>
);

export default CartItem;
