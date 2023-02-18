import React from 'react'
import Base from '../components/Base'
import { Card, Typography } from '@material-tailwind/react'
const CampaignDetails = () => {
  return (
    <Base>
      <div className="grid grid-cols-3 mt-5 gap-5 container mx-auto">
        <img
          src="/src/assets/courage.jpg"
          alt="campaign--img"
          className="w-full h-[20rem] rounded-md col-span-2"
        />
        <div className='grid grid-rows-3 gap-3'>
          <Card className='h-auto w-auto mx-12'>
            OTher value
          </Card>
          <Card className='h-auto w-auto mx-12'>
            OTher value
          </Card>
          <Card className='h-auto w-auto mx-12'>
            OTher value
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-5 gap-3 container mx-auto">
        <div className='grid gird-rows-3 gap-3 '>
          <Typography
            as="a"
            href="#"
            variant="h4"
            color="white"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            <span>Creator</span>
          </Typography>
        </div>
      </div>
    </Base>
  )
}

export default CampaignDetails