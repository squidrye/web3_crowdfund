import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import Base from "../components/Base";
const About = () => {
  return (
    <Base>
      <Card className="w-[50vw] mx-auto mt-3 shadow-md bg-[#e2e2e2]">
        <CardBody className="flex flex-row justify-around">
          <img src="https://media.licdn.com/dms/image/C4E03AQHWQxBX14eesg/profile-displayphoto-shrink_200_200/0/1631427193057?e=1681344000&v=beta&t=zAKc0Zzd6Sp0m3jItXhumErhHDNZ2-G4MoSWOMmjyQk" width={150} height={150}  alt="dp" className="h-42 w-56" />
          <Typography variant="h4" className="mt-[10vh]">
            Mihir Singh
          </Typography>
        </CardBody>
        <hr />
        <CardBody className="flex flex-row justify-around">
          <img src="https://media.licdn.com/dms/image/C4D03AQFREFBIPie8xg/profile-displayphoto-shrink_200_200/0/1650052367448?e=1681344000&v=beta&t=LXZ78fY2GNlPos9pzveUBmB7aLE4wAgw37peYUlDDwg" width={150} height={150}  alt="dp" className="h-42 w-56" />
          <Typography variant="h4" className="mt-[10vh]">
            Arth Srivastava
          </Typography>
        </CardBody>
        <hr />
        <CardBody className="flex flex-row justify-around">
          <img src="https://media.licdn.com/dms/image/C5603AQH-Rlzjwqhfgw/profile-displayphoto-shrink_200_200/0/1611500674483?e=1681344000&v=beta&t=NDQkA-yONlY5vwFu8ivC_XeIjJKO-7VAij1Ic6dlyrA" width={150} height={150} alt="dp" className="h-42 w-56" />
          <Typography variant="h4" className="mt-[10vh]">
            Swapnil Saxena
          </Typography>
        </CardBody>
      </Card>
    </Base>
  );
};

export default About;
