import React, {useState} from "react";

function Item({ name, category }) {


  const [cartComp, changeCart] = useState({
    cartItem : "",
    addText : 'Add to Cart'
  });


  function changeDetails (cartComp) {
  const itemCond = (cartComp.cartItem === "") ? "in-cart": "";
  const textCond = (cartComp.addText === 'Add to Cart') ? 'Remove From Cart' : 'Add to Cart';
    changeCart({...cartComp, addText : textCond , cartItem : itemCond})
  }

  return (
    <li className={cartComp.cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => changeDetails(cartComp)}>{cartComp.addText}</button>
    </li>
  );
}

export default Item;
