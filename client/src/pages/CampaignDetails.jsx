import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { thirdweb } from '../assets'
import { Card, CardBody, CardHeader, Typography, Input, CardFooter, Button } from '@material-tailwind/react'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../context'

const CampaignDetails = () => {

  const location = useLocation();
  const { campaign } = location.state;

  const { address, getUserCampaigns, donate, getDonations, getOwnerCampaigns } = useStateContext();

  const [fundAmount, setFundAmount] = useState(0)
  const [userCampaigns, setUserCampaigns] = useState([])
  const [donations, setDonations] = useState([])
  const [refresh, setRefresh] = useState(false);
  const fetchData = async () => {
    var obj1 = await getOwnerCampaigns(campaign.owner);
    var obj2 = await getDonations(campaign.pId);

    setUserCampaigns(obj1);
    setDonations(obj2);
  }
  useEffect(() => {
    console.log("RUN");
    fetchData();
  }, [refresh]);

  const handleChange = (event) => {
    setFundAmount(event.target.value)
  }
  const handleSubmit = async () => {
    await donate(campaign.pId, fundAmount);
    setRefresh(!refresh);
  }

  const buildCreatorRow = () => {
    return (
      <><div>
        <Typography
          as="a"
          variant="h4"
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-bold">
          <span>Creator</span>
        </Typography>

        <div className="mt-[10px] flex flex-row items-center flex-wrap gap-[14px]">
          <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
          <div>
            <h4 className="mr-4 cursor-pointer py-1.5 font-semibold text-white">{campaign.owner}</h4>
            <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">{userCampaigns.length} Campaigns</p>
          </div>
        </div>
      </div></>
    );
  }

  const buildStoryRow = () => {
    return (
      <>
        <div className='mt-9 mr-3'>
          <Typography
            as="a"
            variant="h4"
            color="white"
            className="mr-4 cursor-pointer py-1.5 font-bold">
            <span>Story</span>
          </Typography>

          <div className='mt-[20px]'>
            <p className='font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>{campaign.description}</p>
          </div>
        </div>
      </>);
  }

  const buildDonatorsRow = () => {
    return (
      <>
        <div className='mt-5'>
          <Typography
            as="a"
            variant="h4"
            color="white"
            className="mr-4 cursor-pointer py-1.5 font-bold">
            <span>Donators</span>
          </Typography>
          {donations.map(({ donator, donation }, index) => {

            return (<div className='flex flex-row justify-between'>
              <p className='font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>
                {index + 1}.{donator}
              </p>
              <p className='font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>
                {donation}
              </p>
            </div>)
          })}
        </div>
      </>
    );
  }

  const giveMoneyForm = () => {
    return (
      <>
        <div>
          <Typography as="a"
            variant="h4"
            color="white"
            className="mr-4 cursor-pointer py-1.5 font-bold">
            <span>Fund</span>
          </Typography>
          <Card className='h-80 bg-[#1c1c24] w-96'>
            <Typography className="mx-auto mt-3" variant="h4">
              Pledge without reward
            </Typography>
            <CardBody>
              <Input label="ETH 0.1" size='md' onChange={handleChange} />

              <div className="container bg-[#13131a] rounded-md h-32 text-white" >
                <Typography variant="h6" className="mt-3 p-2">
                  Back it because you believe in it
                </Typography>
                <p className='mt-2 p-2'>Support the project for no reward, just because it speaks to you</p>
              </div>
              <Button fullWidth={true} className="mt-2" color='indigo' ripple={true} onClick={handleSubmit} >Fund Campaign</Button>
            </CardBody>
          </Card>
        </div>
      </>);
  }


  return (
    <Base>
      {/* //row1 */}
      <div className="flex flex-cols container mx-auto mb-10 mt-10">
        {/* //col1 */}
        <img
          src="/src/assets/courage.jpg"
          alt="campaign--img"
          className="w-[80%] h-[22rem] object-cover rounded-xl"
        />
        {/* //col-2 */}
        <div className='grid grid-rows-3 gap-3'>
          {/* //row-1 */}
          <Card className='h-auto w-full mx-12 grid grid-rows-3 '>
            <div className='row-span-2 text-center font-bold my-auto'>
              {campaign.deadline}
            </div>
            <div className='bg-[#1c1c24] text-center text-white'>
              DAYS LEFT
            </div>
          </Card>
          {/* //row-2 */}
          <Card className='h-auto w-full mx-12 grid grid-rows-3 '>
            <div className='row-span-2 text-center font-bold my-auto'>
              {campaign.amountCollected}
            </div>
            <div className='bg-[#1c1c24] text-center text-white'>
              DAYS LEFT
            </div>
          </Card>
          {/* //row-3 */}
          <Card className='h-auto w-full mx-12 grid grid-rows-3 '>
            <div className='row-span-2 text-center font-bold my-auto'>
              3
            </div>
            <div className='bg-[#1c1c24] text-center text-white'>
              DAYS LEFT
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-5 gap-7 container mx-auto">
        <div className='grid gird-rows-3 gap-3 col-span-2'>
          {buildCreatorRow()}
          {buildStoryRow()}
          {buildDonatorsRow()}
        </div>
        {giveMoneyForm()}
      </div>
    </Base>
  )
}

export default CampaignDetails