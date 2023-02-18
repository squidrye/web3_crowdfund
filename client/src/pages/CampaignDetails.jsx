import React from 'react'
import Base from '../components/Base'
import { Card, CardBody, CardHeader, Typography, Input, CardFooter, Button } from '@material-tailwind/react'
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
            <Input label="ETH 0.1" size='md'/>

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