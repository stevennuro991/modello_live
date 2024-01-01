import React, { useState } from "react";
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
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";
import { Link } from "react-router-dom";
import { TiChevronRight } from "react-icons/ti";
import BookingForm from "../../components/booking_form";

function DomesticCleaning() {
  const serviceicons = [
    {
      icon: <GrUserSettings className="text-white text-xl" />,
      name: "Experienced Staff",
      description: "Rule first third above first treeth  the replenish.",
    },
    {
      icon: <GiDelicatePerfume className="text-white text-xl" />,
      name: "Fast Service ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaStudiovinari className="text-white text-xl" />,
      name: "Natural products ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaThumbsUp className="text-white text-xl" />,
      name: "Best Equipment",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
  ];
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute md:top-20 top-0 h-full flex flex-col md:pl-20 md:w-[800px] justify-center md:left-0 p-8">
          <h1 className="text-white md:text-[48px] leading-tight  font-bold">
          Domestic and Commercial Cleaning
          </h1>
          <div className="flex space-x-3 items-center text-gray-50 font-extralight">
            <p>Home</p>
            <FaChevronRight />
            <p>Services</p>
            <FaChevronRight />
            <p>Domestic and Commercial Cleaning</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:p-20 md:space-x-20">
        <div className="flex flex-col  md:ml-20 justify-between py-7 md:w-[40%] w-[100%] p-5 md:p-0">
          <div className="w-full md:border-2 rounded-xl h-fit p-5">
            <div className="flex gap-2 items-center">
              <hr className="bg-black h-[5px] w-[100px]" />
              <h1 className="text-black uppercase">our services</h1>
            </div>
            {/* <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
            <Link to="/cleaning-services">Home Cleaning</Link>
              <TiChevronRight />
            </div> */}
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/apartment-cleaning">Apartment Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/sofa-cleaning">Sofa Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/mattress-cleaning">Mattress Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/car-cleaning">Car Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/pest-control">Pest Control</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/gardening-and-landscaping">
                Gardening Maintenance and Landscaping
              </Link>
              <TiChevronRight />
            </div>
            <div className="py-5 flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/industrial-cleaning">Industrial Cleaning</Link>
              <TiChevronRight />
            </div>
          </div>
          <div className="w-full border-2 border-black h-[400px] rounded-xl service-img relative">
            <div className="w-full h-full bg-indigo-900 opacity-70 rounded-xl absolute flex flex-col items-center justify-center"></div>
            <div className="w-full h-full rounded-xl absolute flex flex-col items-center justify-center p-16">
              <p className="text-white z-50 text-[36px] text-center">
                Worried about your home & office cleaning?{" "}
              </p>
              <p className="text-white z-50">
                Hire us for any professional cleaning service{" "}
              </p>
            </div>
          </div>
          <BookingForm />
        </div>
        <div className="md:w-[60%] md:mr-40 space-y-10 p-5 me:p-0">
          <img
            className="md:h-[500px] md:w-[90%]"
            src={cleaninservice}
            alt=""
          />
          <h1 className="md:text-2xl font-bold">
            Domestic and Commercial Cleaning
          </h1>
          <p className="md:pr-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="w-full flex flex-col md:flex-row border h-fit md:py-5 justify-between">
            <div className="md:w-[60%] md:h-[600px]">
              <img src={hover} alt="" className="h-full object-cover" />
            </div>
            <div className="md:w-[40%]">
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
          <div className="md:pr-44">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="grid md:grid-cols-2 w-full place-items-center md:gap-10 gap-2">
            {serviceicons.map((item, index) => {
              return (
                <div key={index} className="w-full">
                  <div className="flex flex-row items-center justify-center w-full py-5 space-x-5">
                    <div className="w-[10%] ">
                      <div className="w-10 h-10 rounded-full bg-[#F19C4F] flex items-center justify-center">
                        {" "}
                        {item?.icon}
                      </div>
                    </div>
                    <div className="w-[90%] flex flex-col">
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

export default DomesticCleaning;
