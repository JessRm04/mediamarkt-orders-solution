import React from 'react';
import ParcelDetails from '../components/atoms/parcelDetails/ParcelDetails'
import data from './transportist.json';
import product from './product.json'

function ParcelList() {
  const combinedData = data.map(parcel => {
    const products = product.filter(item => item.id.$oid === parcel.id.$oid);
    return {
      oid: parcel.id.$oid,
      shippingCompany: parcel.companyName,
      carriers: products.length
    }
  });

  return (
    <div>
      <h1>Parcel Details</h1>
      {combinedData.map((parcel) => (
        <ParcelDetails
          key={parcel.oid}
          oid={parcel.oid}
          shippingCompany={parcel.shippingCompany}
          carriers={parcel.carriers}
        />
      ))}
    </div>
  );
}

export default ParcelList;