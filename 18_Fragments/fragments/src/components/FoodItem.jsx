import React from 'react';
import style from "./FoodItem.module.css";

const FoodItem = ({data ,bought, BuyButtonHanddeler}) =>
{

   let foodItems = data;
 

   return(
      
<li className={`list-group-item list-group-item-action ${bought ? "active" : ""}`}>
<ul className={style.listgroup}>
    {foodItems.map(item => <li className="list-group" key={item}>My food list : {item} <span>
      <button className='btn btn-primary'
      onClick={BuyButtonHanddeler}
      >Clicl Me</button></span></li>)}
    </ul>
    </li>
   );
};

export default FoodItem;