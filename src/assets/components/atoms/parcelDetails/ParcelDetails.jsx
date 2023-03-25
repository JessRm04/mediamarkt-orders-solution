import React from 'react'
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp'
import Divider from '@mui/material/Divider'
import dataItems from '../../../pages/data.json'


function ParcelDetails({ oid, shippingCompany, carriers, delivered }) {
  return (
    <>
      <div>
        <LocalShippingSharpIcon />
        <div>
          <h2>{oid}</h2>
          <p>{shippingCompany} </p>
          <p>{carriers} items to be picked up</p>
        </div>
        <div>
          <p>{delivered}</p>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default ParcelDetails;