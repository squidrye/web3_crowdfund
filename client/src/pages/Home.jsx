import { CampaignCard } from "../components/index.js";
import React, { useEffect } from "react";
import Base from "../components/Base";
import { useState } from "react";
import { Link } from "react-router-dom";
import CampaignDetails from "./CampaignDetails.jsx";
import { useStateContext } from "../context/index.jsx";

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  //map over the campaigns and create a card for each campaign

  async function fetchData() {
    var opt = await getCampaigns();
    setCampaigns(opt);
  }
  useEffect(() => {
    if (contract)
      fetchData();
  }, [address, contract]);
  return (
    <Base>
      {/* {JSON.stringify(campaigns)} */}
      <div className="grid grid-cols-4 gap-3 mt-5 container mx-auto">
        {
          campaigns && campaigns.map((campaign, index) => {
            return (<Link to={`/campaign-details/${campaign.pId}`} state={{ campaign: campaign }} element={< CampaignDetails />} >
              <CampaignCard campaign={campaign} key={index} />
            </Link>)
          })
        }
      </div>
    </Base>
  );
};

export default Home;
