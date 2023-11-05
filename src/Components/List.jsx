import React, { useState } from "react";
import "../Style/list.css";
import nftData from "../Constants/nft.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function List() {
  const [cartItems, setCartItems] = useState([]);

  function toggleCartItem(index) {
    if (cartItems.includes(index)) {
      setCartItems(cartItems.filter(item => item !== index));
    } else {
      setCartItems([...cartItems, index]);
    }
  }

  return (
    <div className="flex-f">
      {nftData.map((x, i) => {
        return (
          <div className="flex-list" key={i}>
            {/* <span style={{ marginLeft: 10 }}>{i + 1}</span> */}
            <span
              className="image"
              style={{
                background: `url(${x.Logo})`,
                backgroundSize: "cover",
              }}
            ></span>
            <span className="list-name">{x.Name}</span>
            <span>0.08 ETH</span>
            <span>58 ETH</span>
            <span className="cart-btn" onClick={() => toggleCartItem(i)}>
              {cartItems.includes(i) ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default List;
