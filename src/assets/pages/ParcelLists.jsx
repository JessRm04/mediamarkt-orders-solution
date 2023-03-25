import React, { useState } from 'react';
import ParcelInformationModal from '../components/molecules/ParcelInformationModal';
import OrderDetails from '../components/atoms/orderDetails/OrderDetails';
import data from './data.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function ParcelLists() {

  const returnData = data.slice(0, 8);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <h1>Parcel Lists</h1>
    <div>
      {returnData.map((parcel) => (
        <OrderDetails
          key={parcel.id}
          deliveryDate={parcel.deliveryDate}
          pickupDate={parcel.pickupDate}
        />
      ))}
      <Fab color="secondary" aria-label="add" onClick={handleOpenModal}>
        <AddIcon/>
      </Fab>
      {isModalOpen && (
        <ParcelInformationModal onClose={handleCloseModal} />)}
    </div>
    </>
  );
}

export default ParcelLists;



