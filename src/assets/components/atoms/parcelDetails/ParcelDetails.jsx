import React from 'react'
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp'
import Divider from '@mui/material/Divider'
import dataItems from '../../../pages/data.json'
import './parcelDetails.css'


function ParcelDetails({ oid, shippingCompany, carriers, delivered }) {
  return (
    <>
      <div className="card">
        <div className="iconContainer">
        <LocalShippingSharpIcon className="localShippingSharpIcon"/>
        </div>
        <div className="textContainer">
          <h2 className="header">{oid} Parcel List</h2>
          <p>{shippingCompany} </p>
          <p>{carriers} items to be picked up</p>
        </div>
        <div className="deliveryContainer">
          <p className="deliveryText">DELIVERY</p>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default ParcelDetails;