/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { createContext ,useState} from "react";
import { food_list } from "../assets/assets";
import {Toaster, toast} from  'react-hot-toast';
export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
    
    const [cartItems,setcartItems]=useState({});

    const  addToCart=(itemId)=>{

            // toast.success(`Item no. ${itemId} Successfully added to your cart`, {
            //     position: "top-left",     
            //     autoClose: 2000,           
               

            // });

             if(!cartItems[itemId]){
                setcartItems((prev)=>({...prev,[itemId]:1}))
             }
             else{
                setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
             }
    }

    const removeFromCart = (itemId) => {
          setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        //   toast.success('Successfully removed');
    }
     const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=food_list.find((product)=>product._id===item);
                totalAmount+=iteminfo.price*cartItems[item];
            }
       
          
     }
     return totalAmount;
     }
    const contextValue = {
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}



export default StorecontextProvider;
