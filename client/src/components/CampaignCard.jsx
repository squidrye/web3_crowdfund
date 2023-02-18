import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CampaignCard = () => {
  return (
    <Card className="w-72 mt-8 campaign--card shadow-lg">
      <CardHeader className="mt-4 h-48">
        <img
          src="/src/assets/courage.jpg"
          alt="campaign--img"
          className="w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h3" className="mb-2">
          Campaign Title
        </Typography>
          <Typography variant="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            nam dolore dolorum et soluta praesentium...
          </Typography>
        <div className="flex justify-between mt-2">
          <Typography variant="h6">0.0 Raised Of 1.0</Typography>
          <Typography variant="h6">32 days left</Typography>
        </div>
        <div className="text-left">
          <Typography variant="h6">by owner 0xcaxsacax</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default CampaignCard;
