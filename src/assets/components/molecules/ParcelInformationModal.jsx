import React, { useRef, useEffect } from 'react';
import './parcelInformationModal.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function ParcelInformationModal({ onClose }) {
    const modalRef = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);

  return (
    <>
    
  <div class="modalOverlay"></div>
    <div ref={modalRef}>
            <div className="modalContainer">
                <h1 className="header">Parcel and carrier information</h1>
                <form className="formContainer">
                <div className="textField">
                    <TextField
                    required
                    id="filled-required"
                    label="ID"
                    variant="filled"
                    />
                    <TextField
                    required
                    id="filled-required"
                    label="Carrier ID"
                    variant="filled"
                    />
                </div>
                </form>
                <br></br>
                <Button className="button" variant="contained" color="secondary">ADD</Button>
                <br></br>
            </div>
        </div>
    </>
  );
};

export default ParcelInformationModal;