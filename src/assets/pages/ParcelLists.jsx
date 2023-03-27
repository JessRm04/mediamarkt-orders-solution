import React, { useState } from 'react';
import ParcelInformationModal from '../components/molecules/ParcelInformationModal';
import OrderDetails from '../components/atoms/orderDetails/OrderDetails';
import dataJson from './data.json';
import transportistJson from './transportist.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function ParcelLists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (id, carrierId) => {
    const data = dataJson.find((item) => item.id.$oid === id);
    const carrierData = transportistJson.find((item) => item.id.$oid === carrierId);

    setModalData({ data, carrierData });

    setIsModalOpen(false);
  };

  const [selectedParcelId, setSelectedParcelId] = useState(null);

  const handleTitleClick = (id) => {
    setSelectedParcelId(id);
  };

  return (
    <>
      <h1>Parcel Lists</h1>
      <div>
        {dataJson.slice(0, 8).map((parcel) => (
          <OrderDetails
            key={parcel.id}
            deliveryDate={parcel.deliveryDate}
            pickupDate={parcel.pickupDate}
            onTitleClick={() => handleTitleClick(parcel.id)}
          />
        ))}
        {modalData && (
          <OrderDetails
            deliveryDate={modalData.data.deliveryDate}
            pickupDate={modalData.data.pickupDate}
            carrierCompanyName={modalData.carrierData.companyName}
          />
        )}
        <Fab color="secondary" aria-label="add" onClick={handleOpenModal}>
          <AddIcon />
        </Fab>
        {isModalOpen && (
          <ParcelInformationModal onClose={handleCloseModal} onSubmit={handleModalSubmit} />
        )}
      </div>
    </>
  );
}

export default ParcelLists;