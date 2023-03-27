import React, { useState } from 'react';
import ParcelInformationModal from '../components/molecules/ParcelInformationModal';
import OrderDetails from '../components/atoms/orderDetails/OrderDetails';
import dataJson from './data.json';
import transportistJson from './transportist.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './parcelLists.css'

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

  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
    handleOpenModal();
  };

  return (
    <>
      <h1 className="pageTitle">Parcel Lists</h1>
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

        {showButton && (
          <div className="buttonContainer">
            <Fab color="error" aria-label="add" onClick={handleClick} className="addButton">
              <AddIcon />
            </Fab>
          </div>
        )}

        {isModalOpen && (
          <ParcelInformationModal onClose={handleCloseModal} onSubmit={handleModalSubmit} />
        )}
      </div>
    </>
  );
}

export default ParcelLists;