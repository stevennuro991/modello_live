import React from "react";
import banner from "../../assets/images/banner.png";
import hover from "../../assets/images/Clean-The-Floors.jpg";
import cleaninservice from "../../assets/images/man-cleaning-office-window-medium-shot.jpg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { FaChevronRight } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaStudiovinari } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";

function Cleaning() {
  const serviceicons = [
    {
      icon: <GrUserSettings />,
      name: "Experienced Staff",
      description: "Rule first third above first treeth  the replenish.",
    },
    {
      icon: <GiDelicatePerfume />,
      name: "Fast Service ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaStudiovinari />,
      name: "Natural products ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaThumbsUp />,
      name: "Best Equipment",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
  ];
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute top-20 h-full flex flex-col pl-20 w-[800px] justify-center  left-0 p-8">
          <h1 className="text-white text-[48px] leading-tight  font-bold">
            HOME cleaning
          </h1>
          <div className="flex space-x-3 items-center text-gray-50 font-extralight">
            <p>Home</p>
            <FaChevronRight />
            <p>Services</p>
            <FaChevronRight />
            <p>residential Cleaning</p>
          </div>
        </div>
      </div>
      <div className="flex p-20 space-x-20">
        <div className="flex ml-20 justify-between py-7 w-[40%] border">
          <div>
            <div className="flex gap-2 items-center">
              <hr className="bg-black h-[5px] w-[100px]" />
              <h1 className="text-black uppercase">our services</h1>
            </div>
            <div className="border w-full "></div>
          </div>
        </div>
        <div className="w-[60%] mr-40 space-y-10">
          <img className="h-[500px] w-[90%]" src={cleaninservice} alt="" />
          <h1 className="text-2xl font-bold">
            No matter how messy it is, we do the best.
          </h1>
          <p className="pr-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="w-full flex border h-fit py-5 justify-between">
            <div className="w-[60%] h-[600px]">
              <img src={hover} alt="" className="h-full object-cover" />
            </div>
            <div className="w-[40%]">
              <div className="h-full w-full flex flex-col space-y-5 p-5">
                <h1 className="font bold text-2xl">
                  Our team prefer it doing with the perfection.
                </h1>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Recurring Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Occasional Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Apartment Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Special Event Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Housekeeping Services</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Move Out & Move in Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Refrigerator Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Oven Cleaning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-44">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="grid grid-cols-2 w-full place-items-center gap-10">
            {serviceicons.map((item, index) => {
              return (
                <div key={index} className=" hover:scale-[1.02] duration-150 border w-full">
                  <div className="flex w-full h-fit relative hover:cursor-pointer p-5 justify-center items-center object-contain space-y-5 rounded-md space-x-5">
                    <div className="w-20 h-20 rounded-full bg-[#F19C4F] flex items-center justify-center">
                      <p className="text-white text-3xl">{item?.icon}</p>
                    </div>
                    <div className="flex flex-col w">
                      <p className="font-bold">{item?.name}</p>
                      <p className="text-xs">{item?.description}</p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cleaning;
