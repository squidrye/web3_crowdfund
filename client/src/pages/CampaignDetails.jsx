import React from 'react'
import Base from '../components/Base'
import { thirdweb } from '../assets'
import { Card, CardBody, CardHeader, Typography, Input, CardFooter, Button } from '@material-tailwind/react'


const buildCreatorRow = () => {
  return (
    <><div>
      <Typography
        as="a"
        href="#"
        variant="h4"
        color="white"
        className="font-epilogue font-semibold text-[18px] text-white uppercase">
        <span>Creator</span>
      </Typography>

      <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
        <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
          <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>
        <div>
          <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{"Owner address"}</h4>
          <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
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
          href="#"
          variant="h4"
          color="white"
          className="font-epilogue font-semibold text-[18px] text-white uppercase">
          <span>Story</span>
        </Typography>

        <div className='mt-[20px]'>
          <p className='font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur necessitatibus sint magni hic perspiciatis sit pariatur recusandae facilis non!</p>
        </div>
      </div>
    </>);
}

const buildDonatorsRow = () => {
  return (
    <>
      <Typography
        as="a"
        href="#"
        variant="h4"
        color="white"
        className="font-epilogue font-semibold text-[18px] text-white uppercase">
        <span>Donators</span>
      </Typography>

      <div className='mt-[20px] flex flex-row justify-between'>
        <p className='font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>
          1.No Donators yet
        </p>
        <p className='font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>
          No donation value yet
        </p>
      </div>
    </>
  );
}


const CampaignDetails = () => {
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
          <Card className='h-auto w-full mx-12'>
            OTher value
          </Card>
          {/* //row-2 */}
          <Card className='h-auto w-full mx-12'>
            OTher value
          </Card>
          {/* //row-3 */}
          <Card className='h-auto w-full mx-12'>
            OTher value
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-5 gap-3 container mx-auto">
        <div className='grid gird-rows-3 gap-3 col-span-2'>
          {buildCreatorRow()}
          {buildStoryRow()}
          {buildDonatorsRow()}
        </div>

        {/* fund the campaign */}
        <div>
          <Typography as="a"
            href="#"
            variant="h4"
            color="white"
            className="mr-4 cursor-pointer py-1.5 font-bold">
            <span>Fund</span>
          </Typography>
          <Card className='h-80 bg-[#e2e2e2] w-96'>
            <Typography className="mx-auto mt-3" variant="h4">
              Pledge without reward
            </Typography>
            <CardBody>
              <Input label="ETH 0.1" size='md' />

              <div className="container bg-[#13131a] rounded-md h-32 text-white" >
                <Typography variant="h6" className="mt-3 p-2">
                  Back it because you believe in it
                </Typography>
                <p className='mt-2 p-2'>Support the project for no reward, just because it speaks to you</p>
              </div>
              <Button fullWidth={true} className="mt-2" color='indigo' ripple={true}>Fund Campaign</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </Base>
  )
}

export default CampaignDetails