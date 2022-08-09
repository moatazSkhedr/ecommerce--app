import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import  Login from './components/Login'
import { BrowserRouter, Route, Routes ,  Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { calculateTotal } from "./future/cartSlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const {basket} = useSelector((state)=>state.cart);
useEffect(()=>{
  dispatch(calculateTotal());
} , [basket])
  return (
      <BrowserRouter>
          <div>
          <Navbar />
        <Routes>
          <Route path="/checout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home /> } />
         
        </Routes>
        </div>

      </BrowserRouter>
  );
}

export default App;
