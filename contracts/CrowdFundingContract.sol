// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFundingContract {
    struct Campaign {
        address ownerAddress;
        uint256 targetAmount;
        string image;
        string title;
        string description;
        uint256 deadline;
        uint256 amountRaised;
        address[] donators;
        uint256[] donations;
    }
    Campaign[] public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        address _ownerAddress,
        uint256 _targetAmount,
        string memory _title,
        string memory _description,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage createdCampaign = campaigns[numberOfCampaigns++];

        require(
            _deadline == block.timestamp,
            "deadline should be a date in the future"
        );

        createdCampaign.ownerAddress = _ownerAddress;
        createdCampaign.targetAmount = _targetAmount;
        createdCampaign.image = _image;
        createdCampaign.title = _title;
        createdCampaign.description = _description;
        createdCampaign.amountRaised = 0;
        createdCampaign.deadline = _deadline;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 sentAmount = msg.value;

        Campaign storage campaign = campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(sentAmount);

        (bool success, ) = payable(campaign.ownerAddress).call{
            value: sentAmount
        }("");

        if (success) {
            campaign.amountRaised += sentAmount;
        }
    }

    //returns address of dontators and dontations in contract with id
    function getDontators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint256 i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }
        return allCampaigns;
    }
}
