import React from 'react'
import Base from '../components/Base'
import { Card, Typography } from '@material-tailwind/react'
import { thirdweb } from '../assets'
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
        </div>
      </div>
    </Base>
  )
}

export default CampaignDetails