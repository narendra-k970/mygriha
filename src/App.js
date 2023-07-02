import React from "react";
import "./index.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Architecture from "./components/Architecture";
import Construction from "./components/Construction";
import Interior from "./components/Interior";
import BidProject from "./components/BidProject";
import RentofProperties from "./components/RentofProperties";
import Signin from "./components/Signin";
import ShopOnline from "./components/ShopOnline";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

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
<Route path="/signin" element={<Signin />} />
<Route path="/shoponline" element={<ShopOnline />} />
</Routes>
</BrowserRouter>
</>
  );
};


export default App;