import { CampaignCard } from "../components/index.js";
import React from "react";
import Base from "../components/Base";
import { useState } from "react";
import { Link } from "react-router-dom";
import CampaignDetails from "./CampaignDetails.jsx";

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  //map over the campaigns and create a card for each campaign

  return (
    <Base>
      <div className="grid grid-cols-4 gap-3 mt-5 container mx-auto">
        <Link to="/campaign-details/1" element={< CampaignDetails />} >
          <CampaignCard />
        </Link>
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
    </Base>
  );
};

export default Home;
