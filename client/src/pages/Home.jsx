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
  const [isCampaignDetailsLoading, setIsCampaignDetailsLoading] = useState();
  async function fetchData() {
    setIsCampaignDetailsLoading(true);
    var opt = await getCampaigns();
    setCampaigns(opt);
    setIsCampaignDetailsLoading(false);
  }
  useEffect(() => {
    if (contract) fetchData();
  }, [address, contract]);
  return (
    <Base>
      {isCampaignDetailsLoading ? (
        <img src="/src/assets/loader.svg" alt="loading" className="mx-auto" />
      ) : (
        <div className="flex flex-row flex-wrap gap-6 mt-5 container mx-auto">
          {campaigns &&
            campaigns.map((campaign, index) => {
              return (
                <Link
                  to={`/campaign-details/${campaign.pId}`}
                  key={index}
                  state={{ campaign: campaign }}
                  element={<CampaignDetails />}
                >
                  <CampaignCard campaign={campaign} key={index} />
                </Link>
              );
            })}
        </div>
      )}
    </Base>
  );
};

export default Home;
