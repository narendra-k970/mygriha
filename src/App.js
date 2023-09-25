import React from "react";
import "./index.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Architecture from "./components/Architecture";
import Construction from "./components/Construction";
import Interior from "./components/Interior";
import BidProject from "./components/BidProject";
import RentofProperties from "./components/RentofProperties";
import Login from "./componentc/Login";
import Signup from "./componentc/Signup";
import ShopOnline from "./components/ShopOnline";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import ForgotPass from "./componentc/ForgotPass";
import Profile from "./componentc/Profile"

const App = () => {
  return(
    <>
<BrowserRouter>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/architecture" element={<Architecture />} />
<Route path="/construction" element={<Construction />} />
<Route path="/interior" element={<Interior />} />
<Route path="/bidproject" element={<BidProject />} />
<Route path="/rentproprties" element={<RentofProperties />}/>
<Route path="/Signup" element={<Signup />} />
<Route path="/Login" element={<Login />} />
<Route path="/ForgotPass" element={<ForgotPass />} />
<Route path="/shoponline" element={<ShopOnline />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</BrowserRouter>
</>
  );
};


export default App;