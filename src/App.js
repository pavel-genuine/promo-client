import ImagesUploader from "./Components/ImagesUploader/ImagesUploader";
import Navbar from "./Components/Navbar/Navbar";
import SinglePromo from "./Components/SinglePromo/SinglePromo";
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import AllPromos from "./Components/AllPromos/AllPromos";
import AddPromo from "./Components/AddPromo/AddPromo";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all-promo' element={<AllPromos></AllPromos>} ></Route>
        <Route path='/add-promo' element={<AddPromo></AddPromo>} ></Route>
        <Route path='/upload' element={<ImagesUploader></ImagesUploader>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
