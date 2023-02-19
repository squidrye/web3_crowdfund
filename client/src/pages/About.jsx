import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import Base from "../components/Base";
const About = () => {
  return (
    <Base>
      <Card className="w-[50vw] mx-auto mt-3 shadow-md">
        <CardBody className="flex flex-row justify-around">
          <img src="/src/assets/courage.jpg" alt="dp" className="h-42 w-56" />
          <Typography variant="h4" className="mt-[10vh]">
              Mihir Singh
          </Typography>
          </CardBody>
          <hr />
          <CardBody className="flex flex-row justify-around">
          <img src="/src/assets/courage.jpg" alt="dp" className="h-42 w-56" />
          <Typography variant="h4" className="mt-[10vh]">
              Arth Srivastava
          </Typography>
          </CardBody>
          <hr />
          <CardBody className="flex flex-row justify-around">
          <img src="/src/assets/courage.jpg" alt="dp" className="h-42 w-56" />
          <Typography variant="h4" className="mt-[10vh]">
              Swapnil Saxena
          </Typography>
          </CardBody>
      </Card>
    </Base>
  );
};

export default About;
