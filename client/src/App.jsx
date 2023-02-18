import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  CreateCampaign,
  CampaignDetails,
  Profile,
  About
} from "./pages/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create-campaign" element={<CreateCampaign />}/>
        <Route path="/campaign-details/:id" element={<CampaignDetails />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/about-us" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
