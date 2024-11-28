import React, { useContext } from "react";
import { StroeContext } from "../../context/StoreContext";
import "./FoodDisplay.css";
import Fooditem from "./Fooditem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StroeContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dises</h2>
      <div className="food-diaplay-list">
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                //category={category}
              />
            );
          }

        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
