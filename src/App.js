import './App.css';
import {Route, Routes} from "react-router"
import ParcelLists from './assets/pages/ParcelLists';
import ParcelList from './assets/pages/ParcelList';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<ParcelList/>} />
      </Routes>
    </>
  );
}

export default App;
