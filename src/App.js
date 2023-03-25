import './App.css';
import {Route, Routes} from "react-router"
import ParcelLists from './assets/pages/ParcelLists';
// import ParcelInformationModal from './assets/components/molecules/ParcelInformationModal.jsx'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<ParcelLists/>} />
      </Routes>
    </>
  );
}

export default App;
