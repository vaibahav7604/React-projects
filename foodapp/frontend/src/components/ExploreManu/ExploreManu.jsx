import React from "react";
import "./ExploreManu.css";
import { menu_list } from "../../assets/assets";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
const ExploreManu = ({ category , setcategory }) => {
  return (
    <div  className="explore_menu" id="explore_menu">
      <h1>Our Manu</h1>
      <p className="explore-menu-text">
        Discover a world of flavors with our diverse menu. From savory starters
        to delectable desserts, each dish is crafted to delight your taste buds.
        Explore and enjoy a culinary journey like no other!
      </p>
      <div className="explore-manu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory(prev =>
                  prev === item.menu_name ? "All":item.menu_name
                )
              }
              key={index}
              className="expole-menu-item"
            >
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" srcset="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreManu;
