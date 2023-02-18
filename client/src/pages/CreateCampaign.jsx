import React from 'react'
import Base from '../components/Base'

//form components
import { Button, Textarea, Input, Card, CardBody, CardHeader, Typography, CardFooter } from '@material-tailwind/react'

const CreateCampaign = () => {
  return (
    <Base>
      <Card className='w-auto mx-[30rem] mt-4 relative top-30' >
        <CardHeader variant='gradient'
          color='cyan'
          className='mb-4 grid h-28 place-items-center mt-10'
        >
          <Typography>
            Create campaign
          </Typography>
        </CardHeader>
        <CardBody className='flex flex-col gap-4 !w-auto' color='white'>
          <Input label="Title" size="lg" />
          <Textarea label="Description" size="lg" />
          <Input label="Image" size="lg" />
          <div className='flex gap-2'>
            <Input label="DeadLine" size="md" type='date' />
            <Input label="Target Amount" size="md" />
          </div>
        </CardBody>
        <CardFooter>
          <Button variant="gradient" fullWidth color='cyan'>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </Base>
  )
}

export default CreateCampaign