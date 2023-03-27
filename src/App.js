import './App.css';
import {Route, Routes} from "react-router"
import ParcelLists from './assets/pages/ParcelLists';
import TransportistList from './assets/pages/TransportistList';



function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<ParcelLists/>} />
        <Route path="/TransportistList" element={<TransportistList/>}/>
      </Routes>
    </>
  );
}

export default App;
