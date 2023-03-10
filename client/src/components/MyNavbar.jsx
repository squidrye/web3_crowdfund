import { React, useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";

const MyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const { connect, address } = useStateContext();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav--text">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold text-lg"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold text-lg"
      >
        <Link to="/profile" className="flex items-center">
          Profile
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold text-lg"
      >
        <Link to="/about-us" className="flex items-center">
          About us
        </Link>
      </Typography>
    </ul>
  );

  const handleBtnClick = () => {
    if (address) {
      navigate("/create-campaign");
    } else {
      //connect to meta mask
      connect();
    }
  };
  return (
    <Navbar
      className="max-w-xxl mx-auto py-2 px-4 lg:px-8 lg:py-4 drop-shadow-md text-white gradient-primary border-0 opacity-80 myNav"
      variant="gradient"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          variant="h4"
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          <span>
            <Link to="/">CrowdFunding</Link>
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block btn-three rounded-0"
          onClick={handleBtnClick}
          color="indigo"
          ripple={true}
        >
          <span>{address ? "Create Campaign" : "Connect"}</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            className="mb-2 ease-in duration-300"
            color="indigo"
          >
            <span>{address ? "Create Campaign" : "Connect"}</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default MyNavbar;
