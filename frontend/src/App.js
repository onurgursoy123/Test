import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import RegisterLogin from "./Pages/RegisterLogin";
import AdminPanel from "./Pages/AdminPanel";
import StoreApplication from "./Pages/StoreApplication";
import ProductCreate from "./Pages/ProductCreate";
import CategoryCreate from "./Pages/CategoryCreate";


function App() {
  return (
    <>
        <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/registerlogin" element={<RegisterLogin />}/>
      <Route path="/adminpanel" element={<AdminPanel />}/>
      <Route path="/storeapplication" element={<StoreApplication />}/>
      <Route path="/productcreate" element={<ProductCreate/>}/>
      <Route path="/categorycreate" element={<CategoryCreate/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
