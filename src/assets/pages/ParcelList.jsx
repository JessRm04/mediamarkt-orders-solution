import React from 'react';
import ParcelDetails from '../components/atoms/parcelDetails/ParcelDetails'
import data from './data.json';
import transportistData from './transportist.json';

function ParcelList() {
    const combinedData = transportistData.map(parcel => {
      const dataParcel = data.find(item => item.id.$oid === parcel.id.$oid);
      return {
        oid: parcel.id.$oid,
        shippingCompany: parcel.companyName,
        carriers: dataParcel ? dataParcel.itemsCount : 0
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