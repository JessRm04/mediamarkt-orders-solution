import React from 'react';
import OrderDetails from '../components/atoms/OrderDetails';
import data from './data.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function ParcelLists() {

  const returnData = data.slice(0, 8);

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
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
    </>
  );
}

export default ParcelLists;




// function ParcelLists() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get('https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Media+Markt/Challenges/parcels_mm.json/{id}')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map(parcel => (
//         <OrderDetails key={parcel.id.$oid} pickupDate={parcel.pickupDate} deliveryDate={parcel.deliveryDate} />
//       ))}
//     </div>
//   );
// }

// export default ParcelLists;