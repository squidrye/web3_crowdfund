import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // 0x3AD970Aa51E240c54A20Cc2fbC91d3c7d1cc4f44
  // 0x181A370DAE4e4646751950a44e8e3816e7E07E7D
  const { contract } = useContract('0x3AD970Aa51E240c54A20Cc2fbC91d3c7d1cc4f44');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.target,
        form.title, // title
        form.description, // description
        new Date(form.deadline).getTime(), // deadline,
        form.image
      ])

      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');
    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.ownerAddress,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.targetAmount.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountRaised.toString()),
      image: campaign.image,
      pId: i
    }));
    return parsedCampaings;
  }

  const getCampaignById = async (pId) => {
    const allCampaigns = await getCampaigns();
    return allCampaigns[pId];
  }
  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

    return filteredCampaigns;
  }

  const getOwnerCampaigns = async (ownerAddress) => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === ownerAddress);

    return filteredCampaigns;
  }

  const donate = async (pId, amount) => {
    const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount) });

    return data;
  }
  const getDonations = async (pId) => {
    const donations = await contract.call('getDontators', pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }


  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        getOwnerCampaigns,
        getCampaignById
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);