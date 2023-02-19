import React, { useState } from "react";
import Base from "../components/Base";

//form components
import {
  Button,
  Textarea,
  Input,
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { useStateContext } from "../context";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {

  const [formDetails, setFormDetails] = useState({})

  const { createCampaign } = useStateContext()

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormDetails(prevFormDetails => ({
      ...prevFormDetails,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    createCampaign({ ...formDetails, target: ethers.utils.parseUnits(formDetails.target, 18) });
    //create campaign
    navigate("/")
  }

  return (
    <Base>
      <Card className="w-auto mx-[30rem] mt-4 relative top-30">
        <CardHeader
          variant="gradient"
          color="cyan"
          className="mb-4 grid h-28 place-items-center mt-10"
        >
          <Typography>Create campaign</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 !w-auto" color="white-700">
          <Input label="Title" size="lg" name="title" onChange={handleChange} />
          <Textarea label="Description" size="lg" name="description" onChange={handleChange} />
          <Input label="Image" size="lg" name="image" onChange={handleChange} />
          <div className="flex gap-2">
            <Input label="DeadLine" size="md" type="date" name="deadline" onChange={handleChange} />
            <Input label="Target Amount" size="md" name="target" onChange={handleChange} />
          </div>
        </CardBody>
        <CardFooter>
          <Button variant="gradient" fullWidth color="cyan" onClick={handleSubmit}>
            Create Campaign
          </Button>
        </CardFooter>
      </Card>
    </Base>
  );
};

export default CreateCampaign;
