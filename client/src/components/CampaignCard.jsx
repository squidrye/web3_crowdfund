import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const CampaignCard = ({ campaign }) => {
  const deadlineDate = new Date(campaign.deadline);
  const currDate = new Date();

  const daysLeftInMs = deadlineDate.getTime() - currDate.getTime();
  const daysLeft = daysLeftInMs / (1000*60*60*24);
  
  const percentageAmtRaised = (campaign.amountCollected / campaign.target) * 100;
  return (
    <Card className="w-72 mt-8 campaign--card drop-shadow-2xl bg-[#e2e2e2]">
      <CardHeader className="mt-4 h-48">
        <img
          src={campaign.image}
          alt="campaign--img"
          className="w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" className="mb-2">
          {campaign.title}
        </Typography>
        <Typography variant="paragraph">
          {campaign.description}
        </Typography>
        <div className="flex justify-between mt-2">
          <Typography variant="h6">{Math.floor(percentageAmtRaised)}% amount raised</Typography>
          <Typography variant="h6">{Math.floor(daysLeft)} days left</Typography>
        </div>
        <div className="text-left">
          <Typography variant="h6">by owner {campaign.owner.substring(0, 10)}...</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default CampaignCard;
