import React, {useState} from "react";



function Item({ name, category }) {

  const [isAdd, setCart] = useState(false)

  function handleCart () {
    setCart(isAdd => !isAdd)
  }

  return (
    <li className={isAdd ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {isAdd ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
