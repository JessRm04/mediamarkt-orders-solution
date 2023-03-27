import React from 'react'
import './orderDetails.css'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom';
import TransportistList from '../../../pages/TransportistList'

function OrderDetails(props) {
    const { deliveryDate, pickupDate } = props;
    
  return (
    <>
    <div className="oderDetailsContainer">
        <div>
<<<<<<< HEAD
        <h2 onClick={props.onTitleClick}>Parcel List {deliveryDate}</h2>
=======
        <Link to="/transportistList">
            <h2 className="parcelList">Parcel List {deliveryDate}</h2>
          </Link>
>>>>>>> 15a81695205850351c0882f6740a455eb2289929
            <p>5 carriers picked up the parcel on {pickupDate}</p>
            <p>14 items</p>
        </div>
        <div>
            <p className="deliveryDate">{deliveryDate}</p>
        </div>
    </div>
    <Divider/>
    </>
  );
}

export default OrderDetails;
