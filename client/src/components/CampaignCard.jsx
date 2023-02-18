import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CampaignCard = (campaign) => {
  return (
    <Card className="w-72 mt-8 campaign--card drop-shadow-3xl bg-[#c9d6ff]">
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
          <Typography variant="h6">{campaign.amountCollected} Raised Of {campaign.target}</Typography>
          <Typography variant="h6">{campaign.deadline} days left</Typography>
        </div>
        <div className="text-left">
          <Typography variant="h6">by owner {campaign.owner}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default CampaignCard;
