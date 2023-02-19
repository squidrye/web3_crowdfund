import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { thirdweb } from "../assets";
import {
  Card,
  CardBody,
  Progress,
  Typography,
  Input,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useLocation, useParams } from "react-router-dom";
import { useStateContext } from "../context";
const CampaignDetails = () => {
  const location = useLocation();
  // const { campaign } = location.state;

  const [daysLeft, setDaysLeft] = useState();

  const { donate, getDonations, getOwnerCampaigns, getCampaignById } =
    useStateContext();
  const { id } = useParams();
  const [fundAmount, setFundAmount] = useState(0);
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [donations, setDonations] = useState([]);
  const [campaign, setCampaign] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isCampaignDetailsLoading, setIsCampaignDetailsLoading] = useState();

  const fetchData = async () => {
    setIsCampaignDetailsLoading(true);
    var obj3 = await getCampaignById(id);
    setCampaign(obj3);
    var obj1 = await getOwnerCampaigns(obj3.owner);
    var obj2 = await getDonations(obj3.pId);
    setUserCampaigns(obj1);
    setDonations(obj2);
    
    const deadlineDate = new Date(obj3.deadline);
    const currDate = new Date();
    
    const daysLeftInMs = deadlineDate.getTime() - currDate.getTime();
    const noOfDaysLeft = daysLeftInMs / (1000 * 60 * 60 * 24);
    
    setDaysLeft(noOfDaysLeft);
    setIsCampaignDetailsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);

  const handleChange = (event) => {
    setFundAmount(event.target.value);
  };
  const handleSubmit = async () => {
    if(fundAmount == "") return;
    setRefresh(true);
    await donate(campaign.pId, fundAmount);
    setRefresh(false);
  };

  const buildProgressIndicator = () => {
    let perc = Math.floor((campaign.amountCollected / campaign.target) * 100);
    return (
      <Progress className="mt-4 text-black" value={perc} label="Completed" color="green"/>
    );
  };

  const buildCreatorRow = () => {
    return (
      <>
        <div>
          <Typography
            as="a"
            variant="h4"
            color="black"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <span>Creator</span>
          </Typography>

          <div className="mt-[10px] flex flex-row items-center flex-wrap gap-[14px]">
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
              <img
                src={thirdweb}
                alt="user"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
            <div>
              <h4 className="mr-4 cursor-pointer py-1.5 font-semibold text-[#2D383A]">
                {campaign.owner}
              </h4>
              <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#2D383A]">
                {userCampaigns.length} Campaigns
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buildStoryRow = () => {
    return (
      <>
        <div className="mt-9 mr-3">
          <Typography
            as="a"
            variant="h4"
            color="black"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <span>Story</span>
          </Typography>

          <div className="mt-[20px]">
            <p className="font-epilogue font-normal text-[16px] text-[#2D383A] leading-[26px] text-justify">
              {campaign.description}
            </p>
          </div>
        </div>
      </>
    );
  };

  const buildDonatorsRow = () => {
    return (
      <>
        <div className="mt-5">
          <Typography
            as="a"
            variant="h4"
            color="black"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <span>Donators</span>
          </Typography>
          {donations.map(({ donator, donation }, index) => {
            return (
              <div key={index} className="flex flex-row justify-between">
                <p className="font-epilogue font-normal text-[16px] text-[#2D383A] leading-[26px] text-justify">
                  {index + 1}.{donator}
                </p>
                <p className="font-epilogue font-normal text-[16px] text-[#2D383A] leading-[26px] text-justify">
                  {donation}
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const giveMoneyForm = () => {
    return (
      <>
        <div>
          <Typography
            as="a"
            variant="h4"
            color="black"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <span>Fund</span>
          </Typography>
          <Card className="h-80 bg-[#e2e2e2] w-96">
            <Typography className="mx-auto mt-3" variant="h4">
              Pledge without reward
            </Typography>
            <CardBody>
              <Input label="ETH 0.1" size="md" onChange={handleChange} />

              <div className="container bg-[#2D383A] rounded-md h-32 text-white">
                <Typography variant="h6" className="mt-3 p-2">
                  Back it because you believe in it
                </Typography>
                <p className="mt-2 p-2">
                  Support the project for no reward, just because it speaks to
                  you
                </p>
              </div>
              <Button
                fullWidth={true}
                className="mt-2"
                color="indigo"
                ripple={true}
                onClick={handleSubmit}
              >
                Fund Campaign
              </Button>
            </CardBody>
          </Card>
        </div>
      </>
    );
  };

  return (
    <Base>
      {/* //row1 */}
      {(isCampaignDetailsLoading || refresh) ? (
          <img src="/src/assets/loader.svg" alt="loading" className="mx-auto" />
      ) : (
        <>
          <div className="flex flex-row container mx-auto mb-10 mt-10">
            <div className="flex flex-col w-[80%] h-[23rem]">
              <img
                src={campaign.image}
                alt="campaign--img"
                className=" object-cover w-full h-[21rem] rounded-xl"
              />
              {buildProgressIndicator()}
            </div>
            <div className="grid grid-rows-3 gap-3">
              <Card className="h-auto w-full mx-12 grid grid-rows-3 bg-[#e2e2e2]">
                <div className="row-span-2 text-center font-bold my-auto">
                  {daysLeft && Math.floor(daysLeft)}
                </div>
                <div className="bg-[#2D383A] text-center text-white">
                  <span>Days Left</span>
                </div>
              </Card>
              <Card className="h-auto w-full mx-12 grid grid-rows-3 bg-[#e2e2e2]">
                <div className="row-span-2 text-center font-bold my-auto">
                  {campaign.amountCollected}
                </div>
                <div className="bg-[#2D383A] text-center text-white">
                  <span>Amount Raised</span>
                </div>
              </Card>
              <Card className="h-auto w-full mx-12 grid grid-rows-3 bg-[#e2e2e2]">
                <div className="row-span-2 text-center font-bold my-auto">
                  {campaign.target}
                </div>
                <div className="bg-[#2D383A] text-center text-white">
                <span>Target Amount</span>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-5 gap-7 container mx-auto">
            <div className="grid gird-rows-3 gap-3 col-span-2">
              {buildCreatorRow()}
              <hr className="bg-[#e2e2e2] opacity-70"/>
              {buildStoryRow()}
              <hr className="bg-[#e2e2e2] opacity-70"/>
              {buildDonatorsRow()}
            </div>
            {giveMoneyForm()}
          </div>
        </>
      )}
    </Base>
  );
};

export default CampaignDetails;
