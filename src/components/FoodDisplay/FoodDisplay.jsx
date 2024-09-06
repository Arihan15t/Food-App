/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = (category) => {

     const {food_list}= useContext(Storecontext)


  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-diplay-list">
        {food_list.map((item,index)=>{
           
           return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/> 
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
