import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(Storecontext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
           <p className="title">Deliver Inforamtion</p>
           <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
           </div>
           <input type="email" placeholder='Email address' />
           <input type="text" placeholder='Phone Number' />
           <div className='multi-fields'>
              <input type="text" placeholder='Street' />
              <input type="text" placeholder='City' /> 
           </div>
           <div className='multi-fields'>
              <input type="text" placeholder='Pincode' />
              <input type="text" placeholder='State' /> 
              <input type="text" placeholder='Country' /> 
              <input type="text" placeholder='LandMark' /> 
           </div>

      </div>
      <div className="place-order-right">
      <div className='cart-total'>
           <h2>Cart Totals</h2>
             <div className='cart-total-details'>
              <p>Subtotal</p>
                   <p>${getTotalCartAmount()==0?0:getTotalCartAmount()}</p>
             </div>
             <hr />
             <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0? 0:2}</p>
             </div>
             <hr />
             <div className='cart-total-details'>
                   <b>Total</b>
                   <b>${getTotalCartAmount()==0 ?0:getTotalCartAmount() + 2}</b>
             </div>
             <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
