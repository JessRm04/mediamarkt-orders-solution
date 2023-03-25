import React from 'react'
import './orderDetails.css'

function OrderDetails(props) {
    const { deliveryDate, pickupDate } = props;
    
  return (
    <div className="oderDetailsContainer">
        <div>
            <h2>Parcel List {deliveryDate}</h2>
            <p>5 carriers picked up the parcel on {pickupDate}</p>
            <p>14 items</p>
        </div>
        <div>
            <p className="deliveryDate">{deliveryDate}</p>
        </div>
    </div>
  );
}

export default OrderDetails;