import React, { useContext, useState } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StroeContext } from "../../context/StoreContext";
const Fooditem = ({ id, name, price, description, image }) => 
  {
    
    const{cartitem,addtoCart,removeCart}=useContext(StroeContext);

  return (
    <div className="food-item">
      <div className="food-img-container">
        <img className="food-img" src={image} alt=""  />
        {
            !cartitem[id]?<img className="add" onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt="" />: 
            <div className="food-item-counter">
                <img onClick={()=>removeCart(id)} src={assets.remove_icon_red}/>
                <p>{cartitem[id]}</p>
                <img onClick={()=>addtoCart(id)} src={assets.add_icon_green}/>
            </div>
        }
      </div>

      <div className="food-info">
        <div className="food-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt=""  />
        </div>
      </div>
      <div className="food-desc">
        <p>{description}</p>
      </div>
      <div className="food-price">
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
