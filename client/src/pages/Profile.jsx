import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { useStateContext } from '../context'
import { CampaignCard } from '../components'
import { Link } from 'react-router-dom'
import CampaignDetails from './CampaignDetails'

const Profile = () => {
  const { address, getUserCampaigns, contract } = useStateContext();

  const [userCampaigns, setUserCampaigns] = useState([]);

  async function fetchData() {
    let obj = await getUserCampaigns()
    setUserCampaigns(obj);
  }

  useEffect(() => {
    if (contract) {
      fetchData();
    }
  }, [contract, address]);
  return (
    <Base>
      <div className="grid grid-cols-4 gap-3 mt-5 container mx-auto">
        {
          userCampaigns && userCampaigns.map((campaign, index) => {
            return (<Link to={`/campaign-details/${campaign.pId}`} key={index} state={{ campaign: campaign }} element={< CampaignDetails />} >
              <CampaignCard campaign={campaign} key={index} />
            </Link>)
          })
        }
      </div>
    </Base>
  )
}

export default Profile